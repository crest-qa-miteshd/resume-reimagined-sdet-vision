
import { ChevronDown, TestTube, Bug, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334D399' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <TestTube className="text-emerald-400 animate-pulse" size={32} />
          <Bug className="text-orange-400 animate-bounce" size={28} />
          <Shield className="text-blue-400 animate-pulse" size={30} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          SDET Professional
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Software Development Engineer in Test
        </p>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Passionate about quality assurance, test automation, and building robust testing frameworks 
          that ensure exceptional software reliability and performance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-slate-400" />
      </div>
    </section>
  );
};
