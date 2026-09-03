// Types for the $global values this site relies on: `meta` comes from the
// route-level +meta.json files and `url` is provided by @marko/run.
declare global {
  namespace Marko {
    interface Global {
      meta?: {
        pageTitle?: string;
        pageDescription?: string;
        [key: string]: unknown;
      };
      url?: URL;
    }
  }
}

export {};
