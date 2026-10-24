import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050505]" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black 15%, transparent 68%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 15%, transparent 68%)",
          }}
        />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,255,74,0.16),transparent_68%)] blur-2xl" />
        <div className="absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.12),transparent_70%)] blur-3xl" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
