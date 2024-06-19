import GoToProject from "@/components/GoToProject";

const Projects = async () => {
  const projects = await fetch("https://test.byteccny.com/projects/get");
  const projectsJson = await projects.json();
  return (
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
    </>
  );
};

export default Projects;
