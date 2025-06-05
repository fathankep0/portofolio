import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';

type Theme = 'dark' | 'light';

interface ThemeContextType {
theme: Theme;
toggleTheme: () => void;
}

// Kita tidak lagi perlu membuat createContext sendiri karena next-themes sudah menanganinya
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
// Menggunakan useNextTheme dari next-themes
const { theme, setTheme } = useNextTheme();

const currentTheme = (theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme) as Theme;

const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
};

return { theme: currentTheme, toggleTheme };
};

interface ThemeProviderProps {
children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
return (
    // Menggunakan ThemeProvider dari next-themes
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
    </NextThemesProvider>
);
};