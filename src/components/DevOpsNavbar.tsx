import React, { useState } from 'react';
import { Menu, X, Code, Server, Cloud } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const DevOpsNavbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' }, // Anda bisa menambahkan komponen Projects jika ada
    { name: 'Contact', href: '#contact' },
];

return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <a href="#home" className="flex items-center space-x-2 cursor-pointer"> 
            <div className="flex items-center space-x-1">
            <Server className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
            <Cloud className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
            SHOLIHIN
            </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
            <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
                {item.name}
            </a>
            ))}
            <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-expanded={isMenuOpen} // Add ARIA attributes
            aria-controls="mobile-menu"
            >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
                >
                {item.name}
                </a>
            ))}
            </div>
        </div>
        )}
    </div>
    </nav>
);
};

export default DevOpsNavbar;