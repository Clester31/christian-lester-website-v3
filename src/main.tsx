import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppSidebar from "./components/navigation/AppSidebar.tsx";
import { AppContextProvider } from "./context/Context.tsx";
import AppNavbar from "./components/navigation/AppNavbar.tsx";

createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <StrictMode>
      <div className="flex flex-col h-screen overflow-hidden">
        <AppNavbar />
        <div className="flex flex-row h-screen overflow-hidden">
          <AppSidebar />
          <App />
        </div>
      </div>
    </StrictMode>
  </AppContextProvider>
);
