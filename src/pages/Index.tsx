
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
