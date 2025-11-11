import type { Project } from "../../data/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-(--color-card) border border-(--color-border) text-md hover:border-(--color-accent) transition-all duration-150 ease-in-out cursor-pointer">
      <a href={project.link} target="_blank">
        <div className="flex flex-row gap-2">
          <h1>{project.name}</h1>
          <h2 className="text-(--color-text-muted)">{project.year}</h2>
        </div>
        <div className="border border-(--color-border) my-1" />
        <div className="flex flex-col">
          <h2>{project.description}</h2>
          <div className="border border-(--color-border) my-1" />
          <ul className="ml-4">
            {project.notes.map((n, index) => {
              return (
                <li
                  className="text-(--color-text-muted) text-sm"
                  style={{ listStyle: "inside" }}
                  key={index}
                >
                  {n}
                </li>
              );
            })}
          </ul>
        </div>
      </a>
    </div>
  );
}
