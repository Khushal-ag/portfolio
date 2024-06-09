import { projects } from "@/data";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-5" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, title, des, img, iconLists, siteLink, githubLink }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer
                title="Github"
                href={githubLink}
                icon={<FaGithub />}
              >
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative size-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10"
                  />
                </div>
                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>
                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>
                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="flex size-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:size-10"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-purple flex text-sm md:text-xs lg:text-xl">
                      <a href={siteLink} target={"_blank"}>
                        Visit Site
                      </a>
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
