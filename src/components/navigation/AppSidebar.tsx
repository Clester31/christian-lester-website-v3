import { useState } from "react";
import { UseAppContext } from "../../context/Context";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

export default function AppSidebar() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const { setSection } = UseAppContext();

  return (
    <div
      className={`sidebar h-screen flex flex-col bg-(--color-card) text-(--color-text) 
        transition-[width] duration-300 ease-in-out overflow-hidden 
        ${openSidebar ? "w-48" : "w-12"}`}
    >
      <div className="sidebar-header flex justify-between items-center w-24 ">
        <i
          className="fa-solid fa-bars cursor-pointer py-2"
          onClick={() => setOpenSidebar(!openSidebar)}
          style={{ width: "32px", scale: "1.2" }}
        ></i>
      </div>

      <div
        className={`sidebar-content flex flex-col gap-2 mt-4 transition-opacity duration-200 text-xl ${
          openSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="sidebar-item hover:text-(--color-accent) cursor-pointer truncate"
          onClick={() =>
            setSection({
              sectionName: "about me",
              sectionTitle: "Christian Lester",
              sectionDescription: "Frontend Developer / Software Developer",
              sectionComponent: <AboutMe />,
            })
          }
        >
          About Me
        </div>
        <div
          className="sidebar-item hover:text-(--color-accent) cursor-pointer truncate"
          onClick={() =>
            setSection({
              sectionName: "skills",
              sectionTitle: "Skills",
              sectionDescription: "Tech Stack / Technologies",
              sectionComponent: <Skills />,
            })
          }
        >
          Skills
        </div>
        <div
          className="sidebar-item hover:text-(--color-accent) cursor-pointer truncate"
          onClick={() =>
            setSection({
              sectionName: "projects",
              sectionTitle: "Projects",
              sectionDescription: "Click on a project to view it in GitHub",
              sectionComponent: <Projects />,
            })
          }
        >
          Projects
        </div>
        <div
          className="sidebar-item hover:text-(--color-accent) cursor-pointer truncate"
          onClick={() =>
            setSection({
              sectionName: "resume",
              sectionTitle: "Resume",
              sectionDescription: "View and download my latest resume",
              sectionComponent: <Resume />,
            })
          }
        >
          Resume
        </div>
        <div
          className="sidebar-item hover:text-(--color-accent) cursor-pointer truncate"
          onClick={() =>
            setSection({
              sectionName: "contact",
              sectionTitle: "Contact",
              sectionDescription: "Reach out",
              sectionComponent: <Contact />,
            })
          }
        >
          Contact
        </div>
      </div>

      <div className="sidebar-footer mt-auto p-2"></div>
    </div>
  );
}
