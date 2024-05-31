import { useParams } from "next/navigation"

const ProjectsByName = async ({name}:{name:any}) => {
    const names = useParams()
    console.log(names)
    //const project = await fetch(`http://18.117.235.144/projects/name?name=${name}`)
    //console.log(name)
    //console.log(project)

    return (
        <>

        </>
    )
}
export default ProjectsByName;