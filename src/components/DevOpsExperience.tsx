import React from 'react';
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

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Over 3+ years of experience building and scaling infrastructure for high-growth companies
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsExperience;