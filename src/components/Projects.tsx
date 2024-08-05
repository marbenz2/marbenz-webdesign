import projects from "../data/projects.json";
import { ProjectDetails } from "./ProjectDetails";

const Projects = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg md:text-2xl font-semibold ">Projects</h2>
      <div className="flex flex-wrap gap-2">
        {projects.map((project) => (
          <ProjectDetails key={project.id + project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
