import React from 'react';
import { Switch } from '@/components/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
const { theme, toggleTheme } = useTheme();

return (
    <div className="flex items-center space-x-2">
    <Sun className="h-4 w-4 text-yellow-500" />
    <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
    />
    <Moon className="h-4 w-4 text-blue-500" />
    </div>
);
};

export default ThemeToggle;