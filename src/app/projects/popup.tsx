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
      <>
        <div className="mt-10 mb-12 overflow-hidden">
          {project.map((project, index) => (
              <div
                  key={index}
                  className="project-card flex flex-row justify-center items-center space-x-4"
              >
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="text-4xl font-sans font-semibold text-black">
                    {project.name}
                  </div>
                  <div className="text-base text-black text-ellipsis whitespace-normal mb-4">
                    {project["long-desc"]}
                  </div>
                  <div className="flex flex-row space-x-4">
                    <div className="border-dark rounded-lg p-4 bg-white shadow">
                      <strong>Cohort:</strong> {project.cohort}
                    </div>
                    <div className="border-dark rounded-lg p-4 bg-white shadow">
                      <strong>Team:</strong> {project.team.join(", ")}
                    </div>
                    <div className="border-dark rounded-lg p-4 bg-white shadow">
                      <strong>Tech-Stack:</strong> {project["tech-stack"].join(", ")}
                    </div>
                    <div className="border-dark rounded-lg p-4 bg-white shadow">
                      <strong>Topic:</strong> {project.topic.join(", ")}
                    </div>
                  </div>
                </div>
                <div className="max-h-55 max-w-md object-cover rounded-md">
                  {project.image && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="aspect-ratio">
                        <img
                            className="rounded-md aspect-ratio"
                            src={project.image}
                            alt={project.name}
                        />
                      </a>
                  )}
                </div>
              </div>
          ))}
        </div>
      </>
  );
}
