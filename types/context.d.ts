import { Language } from "./language";

export interface GlobalState {
  lang: string;
  dictionaries: Dictionary[];
  languages: Language[];
  mode: string;
}

export interface GlobalStateContextType {
  lang: string;
  dictionaries: Dictionary[];
  languages: Language[];
  mode: string;
  setLang: (lang: string) => void;
  setDictionaries: (dictionaries: Dictionary[]) => void;
  setLanguages: (languages: Language[]) => void;
  setMode: (newMode: string) => void;
}
