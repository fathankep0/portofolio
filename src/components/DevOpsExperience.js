import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
const DevOpsExperience = () => {
    const experiences = [
        {
            title: 'DevOps Engineer',
            company: 'Tilaka Nusa Teknologi',
            location: 'jakarta, Indonesia',
            period: '2023 - 2024',
            description: 'DevOps initiatives for microservices architecture serving 10M+ users. Reduced deployment time by 75% through automated CI/CD pipelines.',
            achievements: [
                'Migrated legacy infrastructure to Kubernetes, improving scalability by 300%',
                'Implemented Infrastructure as Code reducing provisioning time from days to hours',
                'Established monitoring and alerting systems achieving 99.9% uptime'
            ],
            technologies: ['Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Docker']
        },
        {
            title: 'DevOps Engineer',
            company: 'Prospero Solutions',
            location: 'Jakarta, Indonesia',
            period: '2023 - 2023',
            description: 'Designed and implemented cloud-native solutions for enterprise clients. Automated deployment processes and optimized cloud costs.',
            achievements: [
                'Reduced cloud infrastructure costs by 40% through resource optimization',
                'Built automated disaster recovery systems with RPO < 1 hour',
                'Mentored junior engineers and established DevOps best practices'
            ],
            technologies: ['GCP', 'Docker', 'Ansible', 'GitLab CI', 'Prometheus']
        },
        {
            title: 'DevOps Engineer',
            company: 'PT. TRIX Studio',
            location: 'Jakarta, Indonesia',
            period: '2022 - 2023',
            description: 'Managed on-premise and hybrid cloud infrastructure. Initiated the transition from traditional operations to DevOps practices.',
            achievements: [
                'Automated server provisioning reducing setup time by 80%',
                'Implemented centralized logging and monitoring solutions',
                'Led migration of critical applications to cloud infrastructure'
            ],
            technologies: ['Linux', 'VMware', 'AWS', 'Bash', 'Git', 'Jenkins', 'Docker', 'Kubernetes']
        }
    ];
    return (_jsx("section", { id: "experience", className: "py-20 bg-gray-50 dark:bg-gray-800", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4", children: "Professional Experience" }), _jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Over 3+ years of experience building and scaling infrastructure for high-growth companies" })] }), _jsx("div", { className: "space-y-12", children: experiences.map((exp, index) => (_jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300", children: [_jsx("div", { className: "flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6", children: _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-2", children: exp.title }), _jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-300 mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(ExternalLink, { size: 16 }), _jsx("span", { className: "font-medium", children: exp.company })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { size: 16 }), _jsx("span", { children: exp.location })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { size: 16 }), _jsx("span", { children: exp.period })] })] })] }) }), _jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-6 leading-relaxed", children: exp.description }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-4", children: "Key Achievements:" }), _jsx("ul", { className: "space-y-2", children: exp.achievements.map((achievement, achIndex) => (_jsxs("li", { className: "flex items-start gap-3 text-gray-700 dark:text-gray-300", children: [_jsx("div", { className: "w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" }), _jsx("span", { children: achievement })] }, achIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-3", children: "Technologies Used:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: exp.technologies.map((tech, techIndex) => (_jsx("span", { className: "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium", children: tech }, techIndex))) })] })] }, index))) })] }) }));
};
export default DevOpsExperience;
