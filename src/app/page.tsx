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
      <ScrollProgress />
      <Nav />
      <main className="relative md:pr-1.5">
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
