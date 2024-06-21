import { cn } from "@/utils/cn";
import React, { useState, useEffect } from "react";

// type ProjectParams = {
//   name: string;
// };

export function PopupGrid({ name }) {
  const [project, setProject] = useState<any[]>([]);

  useEffect(() => {
    const getProjects = async (name) => {
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
      <div className="mt-10 mb-12 overflow-y-hidden relative">
        {project.map((project, index) => (
            <div key={index} className="project-card flex items-center">
              {project.image && <img className="w-full mt-16 z-10 max-h-55 max-w-md object-cover rounded-md" src={project.image} alt={project.name}/>}
              <div className="translate-x-160 absolute top-0 mt-4">
                {project.name}
              </div>
            </div>
        ))}
      </div>
  );
}