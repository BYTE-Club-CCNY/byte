import { cn } from "@/utils/cn";
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// type ProjectParams = {
//   name: string;
// };

export function BentoGridDemo({ name }) {
  const [project, setProject] = useState<any[]>([]);

  useEffect(() => {
    const getProjects = async (name) => {
      try {
        const response = await fetch(
          `http://18.117.235.144/projects/get?name=${name}`,
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
    <BentoGrid className="max-w-4xl mx-auto">
      {project.map((project: any) => (
        <BentoGridItem
          //key={i}
          title={project.name}
          description={project["short-desc"]}
          header={project.image}
          //className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "The Digital Revolution",
  //   description: "Dive into the transformative power of technology.",
  //   header: <Skeleton />,
  //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Art of Design",
  //   description: "Discover the beauty of thoughtful and functional design.",
  //   header: <Skeleton />,
  //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Pursuit of Knowledge",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: <Skeleton />,
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  // },
];
