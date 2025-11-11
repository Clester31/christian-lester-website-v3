import { projects, type Project } from "../../data/data";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
  <div className="grid grid-cols-3 gap-4 mx-auto">
    {
        Object.values(projects).map((project: Project, index: number) => {
            return (
                <ProjectCard project={project} key={index} />
            )
        })
    }
    </div>
  );
}
