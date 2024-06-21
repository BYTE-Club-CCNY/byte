import { cn } from "@/utils/cn";
import React, { useState, useEffect } from "react";

// type ProjectParams = {
//   name: string;
// };

// @ts-ignore
export function PopupGrid({ name }) {
  const [project, setProject] = useState<any[]>([]);

  useEffect(() => {
    const getProjects = async (name: any) => {
      try {
        const response = await fetch(
          `https://test.byteccny.com/projects/get?name=${name}`,
        );
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    if (name) {
      getProjects(name);
    }
  }, [name]);

  return (
      <div className="mt-10 mb-12 overflow-hidden relative">
        {project.map((project, index) => (
            <div key={index} className="project-card flex items-center space-x-4">
              {project.image && (<img className="mt-16 z-10 max-h-55 max-w-md object-cover rounded-md" src={project.image} alt={project.name}/>)}
              <div className="flex-1 mt-4">
              <div className="translate-x-50 absolute top-0 text-3xl font-sans font-semibold">
                {project.name}
                <div className="-ml-40 mr-50 text-base text-ellipsis whitespace-normal">
                  {project["long-desc"]}
                </div>
              </div>
              </div>
            </div>
        ))}
      </div>
  );
}