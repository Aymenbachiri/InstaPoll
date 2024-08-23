// src/contexts/LanguageContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TranslationKeys } from "@/translations";
import { ar, en, fr } from "@/src/translation";

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: TranslationKeys, params?: object) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LANGUAGE_KEY = "@app_language";

export const LanguagesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState("");

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
        setLocaleState(savedLanguage || getLocales()[0].languageCode || "en");
      } catch (error) {
        console.error("Error loading language:", error);
        setLocaleState("en"); // Fallback to English
      }
    };

    loadLanguage();
  }, []);

  const i18n = useMemo(() => {
    const instance = new I18n({ ar, en, fr });
    instance.enableFallback = true;
    instance.locale = locale;
    return instance;
  }, [locale]);

  const setLocale = async (newLocale: string) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, newLocale);
      setLocaleState(newLocale);
    } catch (error) {
      console.error("Error setting language:", error);
    }
  };

  const t = useCallback(
    (key: TranslationKeys, params?: object) => i18n.t(key, params),
    [i18n]
  );

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      t,
    }),
    [locale, t]
  );

  if (!locale) {
    // You might want to show a loading indicator here
    return null;
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
