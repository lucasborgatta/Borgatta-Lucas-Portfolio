import { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Proyect from "./components/Proyect/Proyect";
import TecButton from "./components/TecButton/TecButton";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloudstorage } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import Contact from "./components/Contact/Contact";
import ButtonScrollTop from "./components/ButtonScrollTop/ButtonScrollTop";
import ParticlesBackground from "./components/Particles/ParticlesBackground";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const sectionRefs = {
    sobreMi: useRef<HTMLDivElement>(null),
    proyectos: useRef<HTMLDivElement>(null),
    contacto: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    const ref = sectionRefs[section];
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 80; // offset si tenés navbar fija
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const imagesGMS = import.meta.glob("/src/assets/GMS/*.png", {
    eager: true,
  });

  const imageArrayGMS = Object.values(imagesGMS).map((mod: any) => mod.default);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <ParticlesBackground />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} onScrollTo={scrollToSection} />
      <Hero />
      <About ref={sectionRefs.sobreMi} />
      <h1 ref={sectionRefs.proyectos}>Proyectos</h1>
      <Proyect
        proyectTitle="Gestión de Módulo Sanitario - GMS"
        proyectText="Proyecto Final de la carrera de Ingenieria en Sitemas de Información. Plataforma de gestión para la ONG Módulo Sanitario. Permite la planificación, análisis, asignación, construcción y control de módulos sanitarios para familias de bajos recursos de la ciudad de Córdoba. Incluyendo la generación de formularios, reportes, métricas para la toma de decisiones gestión de agenda y mapa interactivo."
        proyectImages={imageArrayGMS}
        proyectRol="Desarrollador Front-End, Scrum Master, Tester."
        technologies={[
          <>
            <TecButton toolTip="React" icon={<SiReact size={32} color="61DAFB" />} color="61DAFB"></TecButton>
            <TecButton toolTip="SCSS" icon={<FaSass size={32} color="cf6c9c" />} color="cf6c9c"></TecButton>
            <TecButton toolTip="TypeScript" icon={<SiTypescript size={32} color="3178c6" />} color="3178c6"></TecButton>
            <TecButton toolTip="NestJs" icon={<SiNestjs size={32} color="d9224c" />} color="d9224c"></TecButton>
            <TecButton toolTip="Auth0" icon={<SiAuth0 size={32} color="e45123" />} color="e45123"></TecButton>
            <TecButton toolTip="AWS" icon={<FaAws size={32} color="f69306" />} color="f69306"></TecButton>
            <TecButton toolTip="Google Cloud Storage" icon={<SiGooglecloudstorage size={32} color="4a8af8" />} color="4a8af8"></TecButton>
            <TecButton toolTip="Material UI" icon={<SiMui size={32} color="0a8cd2" />} color="0a8cd2"></TecButton>
            <TecButton toolTip="MongoDB" icon={<SiMongodb size={32} color="54b345" />} color="54b345"></TecButton>
            <TecButton toolTip="MariaDB" icon={<SiMariadb size={32} color="1e819f" />} color="1e819f"></TecButton>
            <TecButton toolTip="Vercel" icon={<IoLogoVercel size={32} />} color="ffffff"></TecButton>
          </>,
        ]}
      />
      <Proyect
        proyectTitle="Portfolio personal"
        proyectText="Mi portfolio personal desarrollado para poder documentar y registrar mis proyectos y experiencias."
        proyectRol="Desarrollador Front-End"
        proyectRepository="https://github.com/lucasborgatta/Borgatta-Lucas-Portfolio"
        proyectLink="https://borgattalucas-portfolio.vercel.app/"
        technologies={[
          <>
            <TecButton toolTip="React" icon={<SiReact size={32} color="61DAFB" />} color="61DAFB"></TecButton>
            <TecButton toolTip="TypeScript" icon={<SiTypescript size={32} color="3178c6" />} color="3178c6"></TecButton>
            <TecButton toolTip="Material UI" icon={<SiMui size={32} color="0a8cd2" />} color="0a8cd2"></TecButton>
            <TecButton toolTip="Vercel" icon={<IoLogoVercel size={32} />} color="ffffff"></TecButton>
          </>,
        ]}
      />
      <h1>Contacto</h1>
      <Contact ref={sectionRefs.contacto}></Contact>
      <ButtonScrollTop />
    </>
  );
}

export default App;
