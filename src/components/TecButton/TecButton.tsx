import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import "./TecButton.css";

function TecButton({
  toolTip,
  icon,
  color,
  onClick,
  disabled = false,
}: {
  toolTip: string;
  icon: ReactNode;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current || "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const normalizedColor = color.toLowerCase();
  let finalColor = normalizedColor;

  if (normalizedColor === "000000" && theme === "dark") {
    finalColor = "ffffff";
  } else if (normalizedColor === "ffffff" && theme === "light") {
    finalColor = "000000";
  }

  return (
    <div className="tec-button-wrapper">
      <button className="tec-button" style={{ border: `2px solid #${finalColor}` }} onClick={onClick} disabled={disabled}>
        {icon}
      </button>
      <p className="tec-button-custom-tooltip">{toolTip}</p>
    </div>
  );
}

export default TecButton;
