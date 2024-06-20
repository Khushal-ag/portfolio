import { FaLocationArrow } from "react-icons/fa";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-10 pt-[116px]">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="dark:bg-black-100 dark:bg-grid-white/[0.06] bg-grid-black-100/[0.2] absolute left-0 top-0
       flex h-screen w-full items-center justify-center bg-white"
      >
        <div
          className="dark:bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="relative z-10 mb-10 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          {/* Photo container */}
          <div className="mb-6 flex justify-center">
            <div className="size-24 overflow-hidden rounded-full border-2 border-gray-300 md:size-32 lg:size-40">
              {/* Replace the src with your photo URL */}
              <img
                src="/github-profile.png"
                alt="Khushal's Photo"
                className="size-full object-cover"
              />
            </div>
          </div>
          <h2 className="max-w-80 text-center text-lg uppercase tracking-widest text-blue-100">
            Khushal&apos;s Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m Khushal, a Next.js Developer from India. I specialize
            in building Full-stack web apps with a focus on performance and user
            experience.
          </p>
          <a href="#projects">
            <MagicButton
              title="Glance of my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
