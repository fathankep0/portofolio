import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from '@/components/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Sun, { className: "h-4 w-4 text-yellow-500" }), _jsx(Switch, { checked: theme === 'dark', onCheckedChange: toggleTheme, className: "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300" }), _jsx(Moon, { className: "h-4 w-4 text-blue-500" })] }));
};
export default ThemeToggle;
