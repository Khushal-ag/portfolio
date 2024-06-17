import { navItems } from "@/data";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import FloatingNav from "@/components/FloatingNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonial />
        <Experience />
        <Approach />
      </div>
    </main>
  );
};

export default Home;
