import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="mb-[60px] w-full pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 my-5 text-center md:mt-10">
          Reach out to me Today! Let&apos; build something amazing together ❤️.
        </p>
        <a href="mailto:starkhush5@gmail.com" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Khushal
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="bg-black-200 bg-opacity/75 border-black-300 flex size-10 cursor-pointer items-center justify-center rounded-lg border saturate-150 backdrop-blur-lg"
            >
              <a href={profile.link} target="_blank">
                <img
                  src={profile.img}
                  alt={`${profile.id}`}
                  height={20}
                  width={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
