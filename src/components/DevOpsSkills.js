import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cloud, Server, Code, Database, Shield, GitBranch } from 'lucide-react';
const DevOpsSkills = () => {
    const skillCategories = [
        {
            title: 'Cloud Platforms',
            icon: _jsx(Cloud, { className: "h-8 w-8" }),
            skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
            color: 'blue'
        },
        {
            title: 'Container & Orchestration',
            icon: _jsx(Server, { className: "h-8 w-8" }),
            skills: ['Docker', 'Kubernetes', 'OpenShift', 'Helm'],
            color: 'green'
        },
        {
            title: 'Infrastructure as Code',
            icon: _jsx(Code, { className: "h-8 w-8" }),
            skills: ['Terraform', 'Ansible'],
            color: 'purple'
        },
        {
            title: 'CI/CD & Version Control',
            icon: _jsx(GitBranch, { className: "h-8 w-8" }),
            skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Git'],
            color: 'orange'
        },
        {
            title: 'Monitoring & Logging',
            icon: _jsx(Database, { className: "h-8 w-8" }),
            skills: ['Prometheus', 'Grafana', 'ELK Stack'],
            color: 'red'
        },
        {
            title: 'Security & Compliance',
            icon: _jsx(Shield, { className: "h-8 w-8" }),
            skills: ['HashiCorp Vault', 'AWS IAM', 'OWASP'],
            color: 'indigo'
        }
    ];
    const getColorClasses = (color) => {
        const colors = {
            blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
            green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
            purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
            orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
            red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
            indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800'
        };
        return colors[color] || colors.blue;
    };
    return (_jsx("section", { id: "skills", className: "py-20 bg-white dark:bg-gray-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4", children: "Technical Skills & Expertise" }), _jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Comprehensive experience across the entire DevOps lifecycle, from infrastructure automation to deployment optimization" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: skillCategories.map((category, index) => (_jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300", children: [_jsx("div", { className: `inline-flex p-3 rounded-lg mb-4 ${getColorClasses(category.color)}`, children: category.icon }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-4", children: category.title }), _jsx("div", { className: "space-y-2", children: category.skills.map((skill, skillIndex) => (_jsxs("div", { className: "flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600", children: [_jsx("span", { className: "text-gray-700 dark:text-gray-300 font-medium", children: skill }), _jsx("div", { className: "flex space-x-1", children: [...Array(5)].map((_, starIndex) => (_jsx("div", { className: `w-2 h-2 rounded-full ${starIndex < 4
                                                    ? 'bg-yellow-400'
                                                    : 'bg-gray-300 dark:bg-gray-600'}` }, starIndex))) })] }, skillIndex))) })] }, index))) })] }) }));
};
export default DevOpsSkills;
