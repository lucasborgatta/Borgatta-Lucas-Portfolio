import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // o cualquier ícono que te guste
import './ButtonScrollTop.css'

function ButtonScrollTop() {
  const [visible, setVisible] = useState(false);

  // Mostrar el botón solo cuando se scrollea hacia abajo
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200); // mostrar si bajaste más de 200px
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowUp size={20} />
    </button>
  ) : null;
}

export default ButtonScrollTop;
