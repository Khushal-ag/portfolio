import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import StickyBreak from "@/components/StickyBreak";
import Summary from "@/components/Summary";
import Testimonials from "@/components/Testimonials";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <a
        href="#main-content"
        className="bg-accent text-bg fixed top-4 left-4 z-[calc(var(--z-nav)+2)] rounded-md px-3 py-2 text-sm font-medium opacity-0 focus:opacity-100 focus:ring-2 focus:ring-white focus:outline-none"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main className="relative md:pr-1.5" id="main-content">
        <Hero />
        <MarqueeStrip />
        <Summary />
        <Skills />
        <Experience />
        <StickyBreak />
        <Projects />
        <Testimonials />
        <Achievements />
        <Footer />
      </main>
    </div>
  );
}
