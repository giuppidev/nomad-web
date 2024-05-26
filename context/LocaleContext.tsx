"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

// TODO: (Vittorio) da definire il tipo del dizionario
type Dictionary = Record<string, any>;

type LocaleContextProviderProps = {
  children: React.ReactNode;
  lang: Locale;
  dictionary: Dictionary;
};

type LocaleContext = {
  lang: Locale;
  dictionary: Dictionary;
  changeLanguage: (lang: Locale) => void;
};

const LocaleContext = createContext<LocaleContext | null>(null);

export const LocaleProvider = ({
  children,
  lang: initialLang,
  dictionary: initialDictionary,
}: LocaleContextProviderProps) => {
  const [lang, setLang] = useState<Locale>(initialLang || i18n.defaultLocale);
  const [dictionary, setDictionary] = useState<Dictionary>(
    initialDictionary || {},
  );

  const fetchDictionary = async (lang: Locale) => {
    const dictionaryData = await getDictionary(lang);
    setDictionary(dictionaryData);
  };

  useEffect(() => {
    fetchDictionary(lang);
  }, [lang]);

  const changeLanguage = async (newLang: Locale) => {
    setLang(newLang);
  };

  return (
    <LocaleContext.Provider value={{ lang, dictionary, changeLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error(
      "useLocaleContext must be used within a LocaleContextProvider",
    );
  }
  return context;
};
