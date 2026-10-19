import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AiWorkflow from "@/components/AiWorkflow";
import ContactFooter from "@/components/ContactFooter";
import MotionLayer from "@/components/MotionLayer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main id="main-content" className="w-full bg-[var(--bg)] overflow-x-hidden">
        <MotionLayer />
        <Hero />
        <AboutBento />
        <ProjectsShowcase />
        <AiWorkflow />
        <ContactFooter />
      </main>
    </SmoothScrollProvider>
  );
}
