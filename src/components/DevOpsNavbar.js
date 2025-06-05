import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
    return (_jsx("nav", { className: "fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs("a", { href: "#home", className: "flex items-center space-x-2 cursor-pointer", children: [_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(Server, { className: "h-8 w-8 text-blue-600 dark:text-blue-400" }), _jsx(Code, { className: "h-6 w-6 text-green-600 dark:text-green-400" }), _jsx(Cloud, { className: "h-7 w-7 text-purple-600 dark:text-purple-400" })] }), _jsx("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "SHOLIHIN" })] }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [navItems.map((item) => (_jsx("a", { href: item.href, className: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium", children: item.name }, item.name))), _jsx(ThemeToggle, {})] }), _jsxs("div", { className: "md:hidden flex items-center space-x-4", children: [_jsx(ThemeToggle, {}), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400", "aria-expanded": isMenuOpen, "aria-controls": "mobile-menu", children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] })] }), isMenuOpen && (_jsx("div", { id: "mobile-menu", className: "md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700", children: _jsx("div", { className: "px-2 pt-2 pb-3 space-y-1", children: navItems.map((item) => (_jsx("a", { href: item.href, className: "block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium", onClick: () => setIsMenuOpen(false), children: item.name }, item.name))) }) }))] }) }));
};
export default DevOpsNavbar;
