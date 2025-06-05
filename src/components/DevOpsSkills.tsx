import React from 'react';
import { Cloud, Server, Code, Database, Shield, GitBranch } from 'lucide-react';

const DevOpsSkills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="h-8 w-8" />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
      color: 'blue'
    },
    {
      title: 'Container & Orchestration',
      icon: <Server className="h-8 w-8" />,
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Helm'],
      color: 'green'
    },
    {
      title: 'Infrastructure as Code',
      icon: <Code className="h-8 w-8" />,
      skills: ['Terraform', 'Ansible'],
      color: 'purple'
    },
    {
      title: 'CI/CD & Version Control',
      icon: <GitBranch className="h-8 w-8" />,
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Git'],
      color: 'orange'
    },
    {
      title: 'Monitoring & Logging',
      icon: <Database className="h-8 w-8" />,
      skills: ['Prometheus', 'Grafana', 'ELK Stack'],
      color: 'red'
    },
    {
      title: 'Security & Compliance',
      icon: <Shield className="h-8 w-8" />,
      skills: ['HashiCorp Vault', 'AWS IAM', 'OWASP'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
      red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
      indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive experience across the entire DevOps lifecycle, from infrastructure automation to deployment optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${getColorClasses(category.color)}`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <div
                          key={starIndex}
                          className={`w-2 h-2 rounded-full ${
                            starIndex < 4 
                              ? 'bg-yellow-400' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsSkills;