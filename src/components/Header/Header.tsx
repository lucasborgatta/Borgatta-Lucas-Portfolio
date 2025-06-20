import type { Dispatch, SetStateAction } from "react";
import sun_icon from "./../../assets/sun_icon.svg";
import moon_icon from "./../../assets/moon_icon.svg";
import cv from "./../../assets/Borgatta Lucas CV.pdf";
import "./Header.css";
import { Tooltip, useMediaQuery } from "@mui/material";
import SideBar from "../SideBar/SideBar";

// src/components/Header.jsx
function Header({
  darkMode,
  setDarkMode,
  onScrollTo,
}: {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  onScrollTo: (section: "proyectos" | "contacto" | "sobreMi") => void;
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function downloadFileFromPublic() {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Borgatta Lucas CV";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <header>
      {isMobile ? (
        <>
          <SideBar onScrollTo={onScrollTo}></SideBar>
          <h1>Borgatta Lucas</h1>
          <div className="header-container">
            <Tooltip title={darkMode ? "Modo claro" : "Modo oscuro"} placement="left">
              <button className="dark-mode-button" onClick={() => setDarkMode((prev) => !prev)}>
                {darkMode ? <img src={sun_icon} width={18} height={18} color="#fff" /> : <img src={moon_icon} width={18} height={18} color="#fff" />}
              </button>
            </Tooltip>
          </div>
        </>
      ) : (
        <>
          <h1>Borgatta Lucas</h1>
          <div className="header-container">
            <Tooltip title={darkMode ? "Modo claro" : "Modo oscuro"} placement="left">
              <button className="dark-mode-button button" onClick={() => setDarkMode((prev) => !prev)}>
                {darkMode ? <img src={sun_icon} width={18} height={18} color="#fff" /> : <img src={moon_icon} width={18} height={18} color="#fff" />}
              </button>
            </Tooltip>
            <button
              className="button"
              onClick={() => {
                onScrollTo("sobreMi");
              }}
            >
              Sobre mí
            </button>
            <button
              className="button"
              onClick={() => {
                onScrollTo("proyectos");
              }}
            >
              Proyectos
            </button>
            <button
              className="button"
              onClick={() => {
                onScrollTo("contacto");
              }}
            >
              Contacto
            </button>
            <button className="button" onClick={downloadFileFromPublic}>
              Descargar CV
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
