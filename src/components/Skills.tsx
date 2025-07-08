
import { Code, Database, Settings, Globe, TestTube, GitBranch } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: TestTube,
      title: "Test Automation",
      skills: ["Selenium WebDriver", "Cypress", "Playwright", "TestNG", "JUnit", "Pytest", "Robot Framework"]
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C#", "SQL", "Bash/Shell"]
    },
    {
      icon: GitBranch,
      title: "CI/CD & DevOps",
      skills: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Azure DevOps", "GitLab CI"]
    },
    {
      icon: Database,
      title: "Testing Tools",
      skills: ["Postman", "REST Assured", "JMeter", "OWASP ZAP", "SonarQube", "Allure Reports"]
    },
    {
      icon: Settings,
      title: "Frameworks",
      skills: ["Spring Boot", "React", "Node.js", "Express", "FastAPI", "Cucumber", "SpecFlow"]
    },
    {
      icon: Globe,
      title: "Methodologies",
      skills: ["Agile/Scrum", "TDD", "BDD", "Risk-Based Testing", "Shift-Left Testing", "API Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise in modern testing technologies, automation frameworks, and quality assurance methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <category.icon className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm hover:bg-emerald-400 hover:text-slate-900 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
