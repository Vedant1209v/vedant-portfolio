import { Navbar } from "@/components/sections/navbar";
import { ScrollProgressBar } from "@/components/sections/scroll-progress-bar";
import { LoadingScreen } from "@/components/sections/loading-screen";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Experience } from "@/components/sections/experience";
import { GithubSection } from "@/components/sections/github-stats";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
