import { en } from "./src/translation";

export type TranslationKeys = keyof typeof en;

declare module "i18n-js" {
  interface TranslateOptions {
    defaultValue?: string;
    count?: number;
  }

  interface I18n {
    t(scope: TranslationKeys, options?: TranslateOptions): string;
  }
}

declare global {
  namespace ReactNativeGlobal {
    interface I18n {
      t(scope: TranslationKeys, options?: TranslateOptions): string;
    }
  }
}
