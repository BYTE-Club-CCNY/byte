"use client";

import { useRouter } from "next/navigation";

const GoToProject = ({name}: {name: any}) => {
    const router = useRouter();
    const NavigateToProject = () => {
        router.push(`/projects/name/${name}`);

    }


    return (
        <button onClick={NavigateToProject}>View More details</button>
    );
}

export default GoToProject;