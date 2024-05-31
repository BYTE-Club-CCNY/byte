import { redirect } from "next/navigation"


export function goToProject (projectName: string) {
    redirect(`/projects/name/${projectName}`)
}