import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const packageRoot = path.resolve(__dirname, "../../../..");
const sourceRoot = path.join(packageRoot, "src");
const configPath = path.join(packageRoot, "tsconfig.json");

const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
if (configFile.error) {
    throw new Error(ts.flattenDiagnosticMessageText(configFile.error.messageText, "\n"));
}

const config = ts.parseJsonConfigFileContent(configFile.config, ts.sys, packageRoot);
const program = ts.createProgram(config.fileNames, config.options);
const checker = program.getTypeChecker();

type ComponentDeclaration = ts.VariableDeclaration | ts.FunctionDeclaration | ts.ClassDeclaration;

type PublicComponent = {
    declaration: ComponentDeclaration;
    declarationName: string;
    modulePath: string;
    publicName: string;
    sourceFile: ts.SourceFile;
};

function unwrapAlias(symbol: ts.Symbol): ts.Symbol {
    const aliases = new Set<ts.Symbol>();
    let current = symbol;

    while (current.flags & ts.SymbolFlags.Alias && !aliases.has(current)) {
        aliases.add(current);
        current = checker.getAliasedSymbol(current);
    }

    return current;
}

function namedComponentDeclaration(symbol: ts.Symbol): ComponentDeclaration | undefined {
    return symbol.declarations?.find(
        (declaration): declaration is ComponentDeclaration =>
            (ts.isVariableDeclaration(declaration) && ts.isIdentifier(declaration.name)) ||
            (ts.isFunctionDeclaration(declaration) && Boolean(declaration.name)) ||
            (ts.isClassDeclaration(declaration) && Boolean(declaration.name)),
    );
}

function declarationFromExpression(expression: ts.Expression, seen: Set<ts.Symbol>): ComponentDeclaration | undefined {
    if (ts.isCallExpression(expression)) {
        if (!ts.isIdentifier(expression.expression) || expression.expression.text !== "withForwardRef") {
            return undefined;
        }

        const [component] = expression.arguments;
        const symbol = component && ts.isIdentifier(component) ? checker.getSymbolAtLocation(component) : undefined;
        return symbol ? canonicalDeclaration(symbol, seen) : undefined;
    }

    const symbol = ts.isIdentifier(expression) ? checker.getSymbolAtLocation(expression) : undefined;
    return symbol ? canonicalDeclaration(symbol, seen) : undefined;
}

function canonicalDeclaration(symbol: ts.Symbol, seen = new Set<ts.Symbol>()): ComponentDeclaration | undefined {
    const resolved = unwrapAlias(symbol);
    if (seen.has(resolved)) {
        return undefined;
    }
    seen.add(resolved);

    const declaration = namedComponentDeclaration(resolved);
    if (declaration) {
        if (ts.isVariableDeclaration(declaration) && declaration.initializer) {
            const aliasedDeclaration = declarationFromExpression(declaration.initializer, seen);
            if (aliasedDeclaration) {
                return aliasedDeclaration;
            }
        }
        return declaration;
    }

    const exportAssignment = resolved.declarations?.find(ts.isExportAssignment);
    return exportAssignment ? declarationFromExpression(exportAssignment.expression, seen) : undefined;
}

function isPublicReactComponent(name: string, symbol: ts.Symbol, sourceFile: ts.SourceFile): boolean {
    if (!/^[A-Z]/.test(name)) {
        return false;
    }

    const type = checker.getTypeOfSymbolAtLocation(symbol, sourceFile);
    return (
        checker.getSignaturesOfType(type, ts.SignatureKind.Call).length > 0 ||
        checker.getSignaturesOfType(type, ts.SignatureKind.Construct).length > 0
    );
}

function declarationIdentifier(declaration: ComponentDeclaration): ts.Identifier | undefined {
    return ts.isVariableDeclaration(declaration)
        ? ts.isIdentifier(declaration.name)
            ? declaration.name
            : undefined
        : declaration.name;
}

function collectPublicComponents(): PublicComponent[] {
    return fs
        .readdirSync(sourceRoot)
        .filter((entry) => entry.startsWith("ebay-") && fs.statSync(path.join(sourceRoot, entry)).isDirectory())
        .sort()
        .flatMap((entry) => {
            const modulePath = path.join(sourceRoot, entry, "index.ts");
            const sourceFile = program.getSourceFile(modulePath);
            const moduleSymbol = sourceFile && checker.getSymbolAtLocation(sourceFile);
            if (!sourceFile || !moduleSymbol) {
                throw new Error(`Unable to load public component module ${modulePath}`);
            }

            return checker
                .getExportsOfModule(moduleSymbol)
                .filter((symbol) => isPublicReactComponent(symbol.getName(), symbol, sourceFile))
                .map((symbol) => {
                    const declaration = canonicalDeclaration(symbol);
                    const identifier = declaration && declarationIdentifier(declaration);
                    if (!declaration || !identifier) {
                        throw new Error(`Unable to resolve public component ${entry}.${symbol.getName()}`);
                    }

                    const declarationSource = declaration.getSourceFile();
                    if (declarationSource.text.startsWith("/* This file is autogenerated")) {
                        return undefined;
                    }

                    return {
                        declaration,
                        declarationName: identifier.text,
                        modulePath: path.relative(packageRoot, modulePath),
                        publicName: symbol.getName(),
                        sourceFile: declarationSource,
                    };
                })
                .filter((component): component is PublicComponent => Boolean(component));
        });
}

function hasExactDisplayName(component: PublicComponent): boolean {
    return component.sourceFile.statements.some((statement) => {
        if (!ts.isExpressionStatement(statement) || !ts.isBinaryExpression(statement.expression)) {
            return false;
        }

        const assignment = statement.expression;
        return (
            assignment.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
            ts.isPropertyAccessExpression(assignment.left) &&
            ts.isIdentifier(assignment.left.expression) &&
            assignment.left.expression.text === component.declarationName &&
            assignment.left.name.text === "displayName" &&
            ts.isStringLiteral(assignment.right) &&
            assignment.right.text === component.publicName
        );
    });
}

const observations = collectPublicComponents();
const declarations = new Map<string, PublicComponent[]>();

for (const component of observations) {
    const key = `${component.sourceFile.fileName}:${component.declaration.getStart()}`;
    declarations.set(key, [...(declarations.get(key) || []), component]);
}

const publicComponents = [...declarations.values()].map((components) => {
    const [first] = components;
    const ownerEntry = path.relative(sourceRoot, first.sourceFile.fileName).split(path.sep)[0];
    const ownerModulePath = path.join("src", ownerEntry, "index.ts");
    return components.find((component) => component.modulePath === ownerModulePath) || first;
});

describe("public component display names", () => {
    it("discovers public non-generated React component declarations", () => {
        expect(observations.length).toBeGreaterThan(0);
        expect(publicComponents.length).toBeGreaterThan(0);
    });

    it.each(publicComponents)("preserves $publicName exported by $modulePath", (component) => {
        expect(hasExactDisplayName(component)).toBe(true);
    });
});
