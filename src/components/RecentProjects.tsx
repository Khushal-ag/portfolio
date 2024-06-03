import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map((project) => (
          <div key={project.id}>{project.title}</div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
