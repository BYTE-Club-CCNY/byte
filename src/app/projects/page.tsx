import GoToProject from "@/components/GoToProject";

const Projects = async () => {
  const projects = await fetch("http://18.117.235.144/projects");
  const projectsJson = await projects.json();
  <>
    <h1>Projects</h1>

    {projectsJson.map(
      (project: any) => (
        console.log(project.name),
        (
          <>
            <p>{project.name}</p>
            <GoToProject name={project.name} />
          </>
        )
      ),
    )}
  </>;
};

export default Projects;
