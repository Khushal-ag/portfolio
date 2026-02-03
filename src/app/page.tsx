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
      <main>
        <Hero />
        <MarqueeStrip />
        <div className="bg-bg">
          <Summary />
        </div>
        <div className="bg-bg-elevated">
          <Skills />
        </div>
        <div className="bg-bg">
          <Experience />
        </div>
        <StickyBreak />
        <div className="bg-bg-elevated">
          <Projects />
        </div>
        <div className="bg-bg">
          <Testimonials />
        </div>
        <div className="bg-bg-elevated">
          <Achievements />
        </div>
        <Footer />
      </main>
    </div>
  );
}
