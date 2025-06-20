import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [color, setColor] = useState("#000000");
  const [lineColor, setLineColor] = useState("#000000");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const updateColors = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      if (theme === "dark") {
        setColor("#ffffff");
        setLineColor("#ffffff");
      } else {
        setColor("#000000");
        setLineColor("#000000");
      }
    };

    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: { value: "transparent" },
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: { value: color },
        links: {
          enable: true,
          color: lineColor,
          distance: 150,
          opacity: 0.3,
          width: 1,
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.08,
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none" as MoveDirection,
          outModes: {
            default: "out" as OutMode,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
            mode: "repulse",
          },
          onClick: {
            enable: false,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    [color, lineColor]
  );

  if (!init) return null;

  return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
};

export default ParticlesBackground;
