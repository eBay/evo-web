declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

// Stylesheets imported for side effects only (TS 6 flags undeclared
// side-effect imports as TS2882).
declare module "*.css";
declare module "@ebay/skin/marketsans";
