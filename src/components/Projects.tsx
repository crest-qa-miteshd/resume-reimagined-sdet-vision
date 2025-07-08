
import { ExternalLink, Github, TestTube, Zap, Shield, BarChart3 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E2E Automation Framework",
      description: "Comprehensive test automation framework built with Playwright and TypeScript, supporting multi-browser testing with parallel execution and detailed reporting.",
      tech: ["Playwright", "TypeScript", "Docker", "GitHub Actions", "Allure"],
      icon: TestTube,
      color: "emerald",
      features: [
        "Cross-browser compatibility testing",
        "Parallel test execution",
        "Visual regression testing",
        "Custom reporting dashboard"
      ]
    },
    {
      title: "API Testing Suite",
      description: "Robust API testing framework with comprehensive coverage for REST and GraphQL endpoints, including contract testing and performance validation.",
      tech: ["REST Assured", "Java", "TestNG", "Maven", "Jenkins"],
      icon: Zap,
      color: "blue",
      features: [
        "Contract testing with Pact",
        "Performance benchmarking",
        "Data-driven test scenarios",
        "Automated CI/CD integration"
      ]
    },
    {
      title: "Security Testing Pipeline",
      description: "Automated security testing pipeline integrating SAST, DAST, and dependency scanning tools into the development workflow.",
      tech: ["OWASP ZAP", "SonarQube", "Snyk", "Docker", "Python"],
      icon: Shield,
      color: "purple",
      features: [
        "Vulnerability scanning",
        "Security regression testing",
        "Compliance reporting",
        "Risk assessment automation"
      ]
    },
    {
      title: "Quality Metrics Dashboard",
      description: "Real-time quality metrics dashboard providing insights into test coverage, defect trends, and release readiness indicators.",
      tech: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
      icon: BarChart3,
      color: "orange",
      features: [
        "Real-time test metrics",
        "Defect trend analysis",
        "Coverage visualization",
        "Release quality gates"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "border-emerald-400 text-emerald-400 hover:bg-emerald-400",
      blue: "border-blue-400 text-blue-400 hover:bg-blue-400",
      purple: "border-purple-400 text-purple-400 hover:bg-purple-400",
      orange: "border-orange-400 text-orange-400 hover:bg-orange-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Showcase of automation frameworks, testing tools, and quality assurance solutions I've built to improve software reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg border-2 ${getColorClasses(project.color)} mr-4 group-hover:text-slate-900 transition-colors duration-300`}>
                  <project.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-emerald-400 font-semibold mb-2">Key Features:</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                  <Github size={16} className="mr-2" />
                  <span>Code</span>
                </button>
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} className="mr-2" />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
