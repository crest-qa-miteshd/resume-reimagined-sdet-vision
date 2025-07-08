
import { Calendar, MapPin, CheckCircle } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior SDET",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      achievements: [
        "Led test automation strategy for 3 major product releases, reducing manual testing time by 70%",
        "Implemented comprehensive CI/CD pipeline with automated testing, improving deployment frequency by 300%",
        "Mentored team of 5 junior SDETs in automation best practices and framework development",
        "Designed and built microservices testing framework using Docker and Kubernetes",
        "Established quality gates that prevented 150+ critical bugs from reaching production"
      ]
    },
    {
      title: "SDET II",
      company: "Digital Innovations Corp",
      location: "Austin, TX",
      period: "2020 - 2022",
      achievements: [
        "Developed cross-platform automation framework supporting Web, Mobile, and API testing",
        "Integrated security testing tools (OWASP ZAP) into CI/CD pipeline, identifying 50+ vulnerabilities",
        "Created comprehensive test documentation and training materials for development teams",
        "Implemented performance testing strategy using JMeter, optimizing application response times by 40%",
        "Collaborated with Product Management to define acceptance criteria and testing strategies"
      ]
    },
    {
      title: "Software Test Engineer",
      company: "StartUp Ventures",
      location: "Remote",
      period: "2019 - 2020",
      achievements: [
        "Built automated test suites from scratch for web and mobile applications",
        "Established quality metrics and reporting dashboards using Allure and custom tools",
        "Performed manual testing for complex user workflows and edge cases",
        "Contributed to code reviews with focus on testability and quality standards",
        "Reduced regression testing cycle from 2 weeks to 3 days through automation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-slate-700 rounded-lg p-8 border border-slate-600 hover:border-emerald-400 transition-all duration-300 transform hover:scale-102"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-white mb-2">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end">
                  <div className="flex items-center text-slate-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed">{achievement}</p>
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
