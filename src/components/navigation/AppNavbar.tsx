import { UseAppContext } from "../../context/Context";

export default function AppNavbar() {
  const { theme, swapTheme } = UseAppContext();
  return (
    <div className="flex flex-row bg-(--color-nav) border-b border-(--color-border) py-1 px-2 justify-between text-md font-light">
      <div>
        <h1 className="text-(--color-accent) font-semibold">{`<CL />`}</h1>
      </div>
      <div className="flex flex-row">
        <a
          className="flex flex-row items-center gap-2 hover:bg-(--color-border) cursor-pointer px-2 rounded transition duration-150 ease-in-out"
          href="https://www.linkedin.com/in/christian-lester-b71412239/"
          target="_blank"
        >
          LinkedIn
          <i className="fa-solid fa-arrow-up-right-from-square text-sm "></i>
        </a>
        <a
          className="flex flex-row items-center gap-2 hover:bg-(--color-border) cursor-pointer px-2 rounded transition duration-150 ease-in-out"
          href="https://github.com/Clester31"
          target="_blank"
        >
          GitHub
          <i className="fa-solid fa-arrow-up-right-from-square text-sm "></i>
        </a>
        <button
          onClick={() =>
            theme === "dark" ? swapTheme("light") : swapTheme("dark")
          }
          className="hover:bg-(--color-border) cursor-pointer px-2 rounded"
        >
          {theme === "dark" ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
    </div>
  );
}
