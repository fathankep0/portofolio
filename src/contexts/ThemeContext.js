import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
// Kita tidak lagi perlu membuat createContext sendiri karena next-themes sudah menanganinya
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
    // Menggunakan useNextTheme dari next-themes
    const { theme, setTheme } = useNextTheme();
    const currentTheme = (theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme);
    const toggleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };
    return { theme: currentTheme, toggleTheme };
};
export const ThemeProvider = ({ children }) => {
    return (
    // Menggunakan ThemeProvider dari next-themes
    _jsx(NextThemesProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, children: children }));
};
