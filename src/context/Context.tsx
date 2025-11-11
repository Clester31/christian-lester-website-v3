"use client";

import {
  createContext,
  useContext,
  type ReactNode,
  useState,
} from "react";
import AboutMe from "../components/sections/AboutMe";

export type ThemeType = 'light' | 'dark'
export interface SectionType {
    sectionName: "about me" | "skills" | "projects" | "resume" | "contact"
    sectionTitle: string
    sectionDescription: string
    sectionComponent: ReactNode
}

interface ContextType {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => void;
  section: SectionType
  setSection: (newSection:SectionType) => void
  swapTheme: (newTheme: ThemeType) => void;
}

const AppContext = createContext<ContextType | undefined>(undefined);

export const UseAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [section, setSection] = useState<SectionType>({
    sectionName: "about me",
    sectionTitle: "About me",
    sectionDescription: "Description",
    sectionComponent: <AboutMe />
  });

  const swapTheme = (newTheme: ThemeType) => {
    setTheme(newTheme)
    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);
  }

  const contextValue: ContextType = {
    theme,
    setTheme,
    section,
    setSection,
    swapTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
