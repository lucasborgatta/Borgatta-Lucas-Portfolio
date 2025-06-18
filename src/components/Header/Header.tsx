import type { Dispatch, SetStateAction } from "react";
import sun_icon from "./../../assets/sun_icon.svg"
import moon_icon from "./../../assets/moon_icon.svg"
import "./Header.css";

// src/components/Header.jsx
function Header({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: Dispatch<SetStateAction<boolean>> }) {
  return (
    <header>
      <h1 style={{}}>Borgatta Lucas</h1>
      <div className="header-container">
        <button>Proyectos</button>
        <button>Sobre mí</button>
        <button>Contacto</button>
        <button className="dark-mode-button" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? (
            <img src={sun_icon} width={18} height={18} color="#fff" />
          ) : (
            <img src={moon_icon} width={18} height={18} color="#fff" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
