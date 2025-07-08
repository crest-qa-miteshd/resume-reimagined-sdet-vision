
import { Award, Users, Zap, Target } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Target, label: "Tests Automated", value: "1000+" },
    { icon: Zap, label: "Bugs Prevented", value: "500+" },
    { icon: Users, label: "Teams Supported", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
              Quality-Driven SDET Professional
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              As a dedicated Software Development Engineer in Test, I specialize in creating comprehensive 
              testing strategies that bridge the gap between development and quality assurance. My expertise 
              lies in building scalable test automation frameworks, implementing CI/CD pipelines, and 
              ensuring robust software quality.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm passionate about leveraging cutting-edge testing tools and methodologies to deliver 
              high-quality software products. My approach combines technical expertise with strategic 
              thinking to identify potential issues early in the development cycle.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not automating tests or debugging issues, I enjoy contributing to open-source 
              testing frameworks and mentoring junior team members in best testing practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <stat.icon className="text-emerald-400 mx-auto mb-4" size={32} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
