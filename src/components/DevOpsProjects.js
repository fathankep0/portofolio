import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
const DevOpsProjects = () => {
    const projects = [
        {
            title: 'Kubernetes Multi-Cluster Management',
            description: 'Designed and implemented a multi-cluster Kubernetes infrastructure across AWS regions with automated failover and disaster recovery.',
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=400&h=250',
            technologies: ['Kubernetes', 'ArgoCD', 'AWS EKS', 'Terraform'],
            metrics: ['99.99% uptime', '50% cost reduction', '75% faster deployments'],
            github: '#',
            demo: '#',
            year: '2023'
        },
        {
            title: 'CI/CD Pipeline Optimization',
            description: 'Rebuilt legacy Jenkins pipelines into GitLab CI/CD with automated testing, security scanning, and blue-green deployments.',
            image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=400&h=250',
            technologies: ['GitLab CI', 'Docker', 'SonarQube', 'AWS ECR', 'Helm'],
            metrics: ['80% faster builds', '95% test coverage', '0 deployment failures'],
            github: '#',
            demo: '#',
            year: '2023'
        },
        {
            title: 'Infrastructure as Code Platform',
            description: 'Built a self-service infrastructure platform using Terraform modules with automated compliance and cost optimization.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=250',
            technologies: ['Terraform', 'AWS', 'ansible', 'Python'],
            metrics: ['40% cost savings', '10x faster provisioning', '100% compliance'],
            github: '#',
            demo: '#',
            year: '2022'
        },
        {
            title: 'Monitoring & Observability Stack',
            description: 'Implemented comprehensive monitoring solution with Prometheus, Grafana, and custom alerting for microservices architecture.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250',
            technologies: ['Prometheus', 'Grafana', 'AlertManager', 'ELK Stack'],
            metrics: ['MTTR reduced by 60%', '24/7 monitoring', '500+ metrics tracked'],
            github: '#',
            demo: '#',
            year: '2022'
        }
    ];
    return (_jsx("section", { id: "projects", className: "portfolio-section bg-gray-50 dark:bg-gray-800", children: _jsxs("div", { className: "portfolio-container", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "portfolio-heading-2 mb-4", children: "Featured Projects" }), _jsx("p", { className: "portfolio-text-lead max-w-3xl mx-auto", children: "Real-world DevOps projects that demonstrate my expertise in cloud infrastructure, automation, and scalable solutions" })] }), _jsx("div", { className: "portfolio-grid-2 gap-8", children: projects.map((project, index) => (_jsxs("div", { className: "portfolio-card hover-lift hover-glow group", children: [_jsxs("div", { className: "relative overflow-hidden rounded-lg mb-6", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" }), _jsx("div", { className: "absolute top-4 right-4 flex space-x-2", children: _jsx("span", { className: "px-2 py-1 bg-black/70 text-white text-xs rounded", children: project.year }) })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "portfolio-heading-3 mb-2", children: project.title }), _jsx("p", { className: "portfolio-text-body", children: project.description })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Key Metrics:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.metrics.map((metric, metricIndex) => (_jsxs("span", { className: "inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full", children: [_jsx(TrendingUp, { size: 12, className: "mr-1" }), metric] }, metricIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech, techIndex) => (_jsx("span", { className: "skill-badge-blue", children: tech }, techIndex))) })] }), _jsxs("div", { className: "flex space-x-4 pt-4 border-t border-border", children: [_jsxs("a", { href: project.github, className: "portfolio-button-outline flex items-center space-x-2 flex-1 justify-center", children: [_jsx(Github, { size: 16 }), _jsx("span", { children: "Code" })] }), _jsxs("a", { href: project.demo, className: "portfolio-button-primary flex items-center space-x-2 flex-1 justify-center", children: [_jsx(ExternalLink, { size: 16 }), _jsx("span", { children: "Demo" })] })] })] })] }, index))) })] }) }));
};
export default DevOpsProjects;
