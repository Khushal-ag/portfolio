import { workExperience } from "@/data";

import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple"> work Experiences</span>
      </h1>
      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            className="flex-1 border-neutral-200 text-black dark:border-slate-800 dark:text-white"
            duration={Math.floor(Math.random() * 10000) + 10000}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 text-start font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
