import fs from "fs";
import type { Config, ConfigModules } from "./config";
import prettier from "prettier";
import path from "path";
import { removeFile } from "../util";
const currentDir = path.dirname(path.dirname(__dirname));

function getBrowserFileName(filename, basePath = "") {
    if (filename === "index") {
        return path.join(currentDir, basePath, `browser.json`);
    }
    return path.join(currentDir, basePath, `${filename}.browser.json`);
}

function getMJSFileName(filename, basePath = "") {
    return path.join(currentDir, basePath, `${filename}.mjs`);
}

function getFileName(filename, ext, basePath = "") {
    return path.join(currentDir, basePath, `${filename}.${ext}`);
}

function getBrowserRequireSyntax(filename) {
    return `require: ./${filename}.js`;
}

function getCSSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.endsWith(".css") || filepath.includes("svg")) {
        fullFilePath = filepath;
    }
    return `@import "./${fullFilePath}";\n`;
}

function getJSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.endsWith(".css") || filepath.includes("svg")) {
        fullFilePath = filepath;
    }
    return `require('./${fullFilePath}');\n`;
}

function getMJSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.endsWith(".css") || filepath.includes("svg")) {
        fullFilePath = filepath;
    }
    return `import './${fullFilePath}';\n`;
}

interface ModuleBuildOptions {
    hasBaseModule?: boolean;
    isNested?: boolean;
    distDir?: string;
    addIndexModules?: ConfigModules;
}

/* Options:
 *   hasBaseModule: true/false | if the base module should be included in the requires.
 *   isNested: true/fase | if this module has nested additioanl modules
 *   distDir: string | The distDir for modules
 */
class ModuleBuilder {
    declare moduleName: string;
    declare config: Config;
    declare additionalModules: string[];
    declare options: ModuleBuildOptions;

    constructor(moduleName, config: Config, options: ModuleBuildOptions) {
        this.moduleName = moduleName;
        this.config = config;
        this.additionalModules = config.modules[moduleName] || [];
        this.options = Object.assign(
            {
                hasBaseModule: true,
                isNested: false,
                distDir: "",
                addIndexModules: null,
            },
            options,
        );
    }

    getFilePath(filename) {
        let file = filename;
        let filePath = filename;
        let prefixPath = "";
        if (this.config.overrideFile[filename]) {
            file = this.config.overrideFile[filename];
        } else if (this.options.isNested) {
            filePath = filename === this.moduleName ? "index" : this.moduleName;
            file = file === this.moduleName ? "index" : filename;
            prefixPath = "../";
        }
        return `${prefixPath}dist/${filePath}/${file}`;
    }
    async clean() {
        if (this.options.isNested) {
            try {
                // Remove the as any when @types/node is upgraded past 14.x.
                // This is due to changesets/cli bringing in an older version of node types

                if (this.options.addIndexModules);
                for (const file of Object.keys(this.options.addIndexModules)) {
                    await removeFile(getFileName(file, "js"));
                    await removeFile(getFileName(file, "css"));
                }

                await (fs.promises as any).rm(this.moduleName, {
                    recursive: true,
                });
                await removeFile(getFileName(this.moduleName, "js"));
                await removeFile(getFileName(this.moduleName, "css"));
            } catch (e) {
                return;
            }
        } else {
            await removeFile(getBrowserFileName(this.moduleName));

            await removeFile(getFileName(this.moduleName, "js"));
            await removeFile(getFileName(this.moduleName, "css"));
        }
    }

    // Overrides options and additional Modules.
    // Passes a callback functon to restore overriden data
    async overrideData(options, additionalModules, callback) {
        const prevOption = Object.assign({}, this.options);
        const prevAdditionalModules = this.additionalModules;

        this.additionalModules = additionalModules;
        this.options = Object.assign({}, this.options, options);

        await callback();
        this.options = prevOption;
        this.additionalModules = prevAdditionalModules;
    }

    async run() {
        if (this.options.isNested) {
            // create directory
            await fs.promises.mkdir(path.join(currentDir, this.moduleName), {
                recursive: true,
            });
            // Get all modules now in directory
            const moduleList = await fs.promises.readdir(
                path.join(this.options.distDir!, this.moduleName),
            );

            if (this.options.addIndexModules) {
                for (const file of Object.keys(this.options.addIndexModules)) {
                    if (file === "index") {
                        await this.overrideData(
                            { hasBaseModule: false },
                            this.options.addIndexModules[file],
                            async () => {
                                await this.writeBrowserJSON(file);
                                await this.writeModuleFiles(file);
                            },
                        );
                    } else {
                        await this.overrideData(
                            { hasBaseModule: false, isNested: false },
                            this.options.addIndexModules[file],
                            async () => {
                                await this.writeModuleFiles(file);
                            },
                        );
                    }
                }
            }

            for (const file of moduleList) {
                let modName = path.parse(file).name;

                if (modName === this.moduleName) {
                    modName = "index";
                }
                await this.writeBrowserJSON(modName);
                await this.writeModuleFiles(modName);
            }
        } else {
            await this.writeBrowserJSON();
            await this.writeModuleFiles();
        }
    }

    async writeBrowserJSON(currentModule = "") {
        const additionalRequires = this.additionalModules.map((addFile) =>
            getBrowserRequireSyntax(addFile),
        );
        const filename = currentModule || this.moduleName;
        const requires = additionalRequires.concat(
            this.options.hasBaseModule
                ? [getBrowserRequireSyntax(filename)]
                : [],
        );

        const content = { dependencies: requires };
        return await fs.promises.writeFile(
            getBrowserFileName(
                filename,
                this.options.isNested ? this.moduleName : "",
            ),
            await prettier.format(JSON.stringify(content), { parser: "json" }),
        );
    }

    async writeModuleFiles(currentModule = "") {
        const modules = this.additionalModules;
        const mod = currentModule || this.moduleName;
        const filename = this.options.hasBaseModule
            ? this.getFilePath(mod)
            : null;
        const baseDirectory = this.options.isNested ? this.moduleName : "";

        await fs.promises.writeFile(
            getFileName(mod, "js", baseDirectory),
            this.parseAdditionalModules(getJSRequireSyntax, "js", {
                modules,
                filename,
            }),
        );

        await fs.promises.writeFile(
            getFileName(mod, "css", baseDirectory),
            this.parseAdditionalModules(getCSSRequireSyntax, "css", {
                modules,
                filename,
            }),
        );

        await fs.promises.writeFile(
            getFileName(mod, "mjs", baseDirectory),
            this.parseAdditionalModules(getMJSRequireSyntax, "css", {
                modules,
                filename,
            }),
        );
    }

    parseAdditionalModules(getSyntax, ext, { modules, filename }) {
        const additioanlContent = modules.map((addFile) =>
            getSyntax(addFile, ext),
        );
        const content = additioanlContent.concat(
            filename ? [getSyntax(filename, "css")] : [],
        );
        return content.join("");
    }
}

export { ModuleBuilder };
