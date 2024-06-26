import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { Divider } from "@nextui-org/divider";
import { IoClose } from "react-icons/io5";

interface PopupGridProps {
  name: string;
  onClose: () => void; // Add this line
}

interface Project {
  name: string;
  ["long-desc"]: string;
  cohort: string;
  team: string[];
  ["tech-stack"]: string[];
  topic: string[];
  link: string;
  image?: string;
}

export function PopupGrid({ name, onClose }: PopupGridProps) {
  // Update this line
  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async (name: string) => {
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
    console.log(project);
    if (name) {
      getProjects(name);
    }
  }, [name]);

  return (
    <>
      <div className="mt-1 mb-1 overflow-hidden relative">
        <button onClick={onClose} className="absolute -top-2 -right-2 p-1">
          <IoClose size={24} />
        </button>
        {project.map((project, index) => (
          <div
            key={index}
            className="pl-2 project-card flex flex-row items-center justify-evenly mb-8 "
          >
            <div className="flex flex-col items-center justify-center flex-1 ">
              <div className="text-4xl font-sans font-semibold text-black mb-3">
                {project.name}
              </div>
              <div className="text-base text-black text-ellipsis whitespace-normal mb-4">
                {project["long-desc"]}
              </div>
              <Divider orientation="horizontal" className="my-1 bg-black" />
              <div className="flex flex-row w-full">
                <div className="flex-2 flex flex-col p-4 items-center text-black bg-white shadow mx-2 rounded-lg space-y-2 w-1/4 h-36">
                  <strong>Cohort:</strong>
                  <button className="text-black border-2 border-gray-500 p-1">
                    {project.cohort}
                  </button>
                </div>
                <div className="flex flex-col p-4 items-center text-black bg-white shadow mx-2 rounded-lg w-1/4 h-36">
                  <strong>Team:</strong>
                  <div className="flex flex-wrap items-center justify-center overflow-scroll">
                    {project.team.map((member, index) => (
                      <button
                        className="text-black border-2 m-auto border-gray-500 mx-1 mb-2 p-1"
                        key={index}
                      >
                        {member}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col p-4 items-center text-black bg-white shadow mx-2 rounded-lg w-1/4 h-36">
                  <strong>Tech-Stack:</strong>
                  <div className="flex flex-wrap items-center justify-center overflow-scroll">
                    {project["tech-stack"].map((member, index) => (
                      <button
                        className="text-black border-2 border-gray-500 m-auto mb-2 p-1"
                        key={index}
                      >
                        {member}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-2 flex flex-col p-4 items-center text-black bg-white shadow mx-2 rounded-lg space-y-2 h-36 w-1/4">
                  <strong>Topic:</strong>
                  <div className="flex flex-wrap items-center justify-center overflow-scroll">
                    {project.topic.map((member, index) => (
                      <button
                        className="text-black border-2 border-gray-500 m-auto mx-2 my-2 p-1"
                        key={index}
                      >
                        {member}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center space-x-2 text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
                    <IoLogoGithub className="h-6 w-6" />
                    <span>View on GitHub</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="pl-8 pr-4 max-h-55 max-w-md object-cover rounded-md drop-shadow-[0_35px_15px_rgba(0.50,0.50,0.50,0.15)]">
              {project.image && (
                <img
                  className="rounded-md aspect-ratio"
                  src={project.image}
                  alt={project.name}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
