import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Proyect from "./components/Proyect/Proyect";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const imagesGMS = import.meta.glob("/src/assets/GMS/*.png", {
    eager: true,
  });

  const imageArrayGMS = Object.values(imagesGMS).map((mod: any) => mod.default);
  console.log(imagesGMS)
  console.log(imageArrayGMS)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Proyect
        proyectText="Proyecto Final de la carrera de Ingenieria en Sitemas de Información. Plataforma de gestión para la ONG Módulo Sanitario. Permite la planificación, análisis, asignación, construcción y control de módulos sanitarios para familias de bajos recursos de la ciudad de Córdoba. Incluyendo la generación de formularios, reportes, métricas para la toma de decisiones gestión de agenda y mapa interactivo."
        proyectTitle="Gestión de Módulo Sanitario - GMS"
        proyectImages={imageArrayGMS}
      ></Proyect>
    </>
  );
}

export default App;
