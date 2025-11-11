import { UseAppContext } from "../../context/Context";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";

interface NavListProps {
    direction: 'row' | 'col'
    isOpen?: boolean;
}

export default function NavList({ direction, isOpen = true }: NavListProps) {
    
  const { setSection } = UseAppContext();
  
  const flexDirectionClass = direction === 'col' ? 'flex-col' : 'flex-row';
  
  const containerClasses = direction === 'col' 
    ? 'mt-4 gap-2' 
    : 'items-center gap-1 text-sm sm:text-md';
  
  const wrapperClass = direction === 'col' 
    ? 'sidebar-content' 
    : 'sidebar-content-horizontal';
  
  const itemClasses = direction === 'col'
    ? 'sidebar-item cursor-pointer truncate'
    : 'sidebar-item-small cursor-pointer';
  
  const textSizeClass = direction === 'col' ? 'text-xl' : 'text-sm';
  
  return (
    <div
      className={`${wrapperClass} flex ${flexDirectionClass} ${containerClasses} transition-opacity duration-200 ${textSizeClass} ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={itemClasses}
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
        className={itemClasses}
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
        className={itemClasses}
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
        className={itemClasses}
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
        className={itemClasses}
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
  );
}
