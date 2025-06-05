import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const DevOpsProjects = () => {
  const projects = [
    {
      title: 'Kubernetes Multi-Cluster Management',
      description: 'Designed and implemented a multi-cluster Kubernetes infrastructure across AWS regions with automated failover and disaster recovery.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=400&h=250',
      technologies: ['Kubernetes', 'ArgoCD',  'AWS EKS', 'Terraform'],
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

  return (
    <section id="projects" className="portfolio-section bg-gray-50 dark:bg-gray-800">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading-2 mb-4">Featured Projects</h2>
          <p className="portfolio-text-lead max-w-3xl mx-auto">
            Real-world DevOps projects that demonstrate my expertise in cloud infrastructure, automation, and scalable solutions
          </p>
        </div>

        <div className="portfolio-grid-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card hover-lift hover-glow group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="portfolio-heading-3 mb-2">{project.title}</h3>
                  <p className="portfolio-text-body">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Metrics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full"
                      >
                        <TrendingUp size={12} className="mr-1" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-badge-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="portfolio-button-outline flex items-center space-x-2 flex-1 justify-center"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="portfolio-button-primary flex items-center space-x-2 flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsProjects;
