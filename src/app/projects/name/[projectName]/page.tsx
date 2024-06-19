import { useParams } from "next/navigation"

const ProjectsByName = async ({params}:{params:any}) => {
    const projectName = params.projectName
    const project = await fetch(`https://test.byteccny.com/projects/name?name=${projectName}`)
    const projectDetails = await project.json()
    const projectDetailsJson = await projectDetails[0]
    console.log(projectDetailsJson)

    return (
        <>
            <p>{projectDetailsJson.name}</p>
            <p>{projectDetailsJson["long-description"]}</p>
            <img className = " h-72"src={projectDetailsJson.image} alt="project image" />
            {projectDetailsJson["team"].map((member: any) => (
                <p>{member}</p>
            ))}
            <p>{projectDetailsJson.cohort}</p>
            <p>{projectDetailsJson.link}</p>
            {projectDetailsJson["tech-stack"].map((skill: any) => (
                <p>{skill}</p>
            ))}


        </>
    )
}
export default ProjectsByName;