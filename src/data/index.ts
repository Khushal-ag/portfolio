export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on backend with Golang",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Eventloop - Event Management Web App",
    des: "Event creation & management at ease, with features like user authentication, ticket purchase along with Stripe integration",
    img: "/p1.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/c.svg",
      "/ts.svg",
      "/stripe-icon.svg",
    ],
    siteLink: "https://eventloop.khushalagarwal.me/",
    githubLink: "https://github.com/Khushal-ag/eventloop",
  },
  {
    id: 2,
    title: "Sealog - Hotel Management system",
    des: "Simplify your hotel management with Sealog, provides a comprehensive set of features for hotel employees to efficiently manage cabins/rooms, bookings, and guest information.",
    img: "/p2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/supabase-icon.png",
      "/js.svg",
      "/react-query.svg",
    ],
    siteLink: "https://sealog.khushalagarwal.me",
    githubLink: "https://github.com/Khushal-ag/sealog",
  },
  {
    id: 3,
    title: "Infinitunes - Music Streaming Platform",
    des: "A web-based music streaming platform that allows users to listen to their favorite songs, create playlists, and discover new music.",
    img: "/p6.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/supabase-icon.png",
      "/ts.svg",
      "/vercel-light.png",
    ],
    siteLink: "https://infinitunes.khushalagarwal.me/",
    githubLink: "https://github.com/Khushal-ag/infinitunes",
  },
  {
    id: 4,
    title: "MixR - A Community first Marketplace",
    des: "A community-first e-commerce platform that allow members to buy products at discounted prices.",
    img: "/p4.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/supabase-icon.png",
      "/ts.svg",
      "/golang.svg",
    ],
    siteLink: "https://prod.mixr.gg/",
    githubLink: "https://github.com/MixR-gg",
  },
  {
    id: 5,
    title: "Triphive - Hotel Review Website",
    des: "A hotel review website that allows users to find hotels and leave reviews for them & in return users will get rewarded for their valuable reviews.",
    img: "/p3.png",
    iconLists: [
      "/nodejs.svg",
      "/mongodb-icon.svg",
      "/js.svg",
      "/passport.svg",
      "/vercel-light.png",
    ],
    siteLink: "https://triphive.khushalagarwal.me/",
    githubLink: "https://github.com/Khushal-ag/TripHive",
  },
  {
    id: 6,
    title: "NextJS Template - Starter Template",
    des: "A starter template for NextJS with TailwindCSS, TypeScript, prettier & eslint pre-configured. Get started with your next project in minutes.",
    img: "/p5.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/nodejs.svg",
      "/ts.svg",
      "/vercel-light.png",
    ],
    siteLink: "https://nextjs-template.khushalagarwal.me/",
    githubLink: "https://github.com/Khushal-ag/nextjs-template",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Khushal as our backend developer was a transformative experience. His technical expertise and meticulous approach ensured that our systems were both robust and scalable. Throughout the project, Khushal demonstrated an impressive ability to solve complex problems quickly and efficiently. His clear communication and reliable delivery made a significant impact on our project's success. I highly recommend Khushal for any backend development needs.",
    name: "Justin Martinez",
    title: "MixR.gg",
  },
  {
    quote:
      "Participating in a hackathon with Khushal as our team leader was an inspiring experience. His leadership and organizational skills were key to our team's success. Khushal motivated us to push our boundaries, and his innovative thinking brought fresh perspectives to our project. His ability to coordinate tasks and foster a collaborative environment made the intense hours of the hackathon enjoyable and productive. If you're looking for a dynamic and effective leader, Khushal is the person you need.",
    name: "Dev Busters",
    title: "HackCBS 6.0",
  },
  {
    quote:
      "Having Khushal on board as our full stack developer was a game-changer for our project. His comprehensive understanding of both front-end and back-end technologies allowed us to create a seamless and user-friendly application. Khushal's attention to detail and proactive approach ensured that we met all our milestones on time. His enthusiasm for development and commitment to excellence were evident in every aspect of his work. I would highly recommend Khushal to anyone looking for a top-notch full stack developer.",
    name: "Hemant Rajput",
    title: "Infinitunes",
  },
  {
    quote:
      "Collaborating with Khushal on our backend infrastructure was a decision we’re proud of. His in-depth knowledge of database management, server-side logic, and API integrations played a crucial role in enhancing our platform's performance and security. Khushal's professionalism and dedication to quality were evident from the outset, and his problem-solving skills were instrumental in overcoming several technical challenges. For anyone in need of a backend developer who delivers outstanding results, Khushal is an excellent choice.",
    name: "Yash Goyal",
    title: "MixR.gg",
  },
];

export const companies = [
  {
    id: 1,
    name: "NextJs",
    img: "/next.svg",
    nameImg: "/nextname.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Vercel",
    img: "/vercel-light.png",
    nameImg: "/vercelname.svg",
  },
  {
    id: 4,
    name: "supabase",
    img: "/supabase-icon.png",
    nameImg: "/supaname.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - Infinitunes",
    desc: "Assisted in the development of a web-based music streaming platform using Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JOVAC",
    desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Team Leader - HackCBS 5.0 & 6.0",
    desc: "Led the development of a full-stack project, ensuring timely delivery and high-quality standards during the hackathon.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Developer - MixR-gg",
    desc: "Designed and implemented backend services and APIs, ensuring robust and scalable solutions. Collaborated with frontend developers to integrate user-facing features seamlessly.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Khushal-ag",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/starkhush5",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/khushal-agarwal/",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://www.instagram.com/starkhush/",
  },
];
