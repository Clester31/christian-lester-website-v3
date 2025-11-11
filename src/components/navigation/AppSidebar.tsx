import { useState } from "react";
import NavList from "./NavList";

export default function AppSidebar() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  return (
    <div
      className={`hidden sm:flex sidebar h-screen flex-col bg-(--color-card) text-(--color-text) 
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
      <NavList direction="col" isOpen={openSidebar} />
      <div className="sidebar-footer mt-auto p-2"></div>
    </div>
  );
}
