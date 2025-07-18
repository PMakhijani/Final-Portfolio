import Project from "../Components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative c-space section-spacing min-h-screen pt-24 scroll-mt-24"
    >
      <h2 className="text-heading">Featured Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;

