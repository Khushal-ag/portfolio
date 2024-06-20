import { companies, testimonials } from "@/data";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Testimonial = () => {
  return (
    <section className="pb-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="mt-16 flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <img src={img} alt={name} className="w-5 md:w-10" />
              <img src={nameImg} alt={name} className="w-24 md:w-28" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
