import { Tooltip } from "@mui/material";
import type { ReactNode } from "react";
import "./TecButton.css";

function TecButton({ toolTip, icon, color }: { toolTip: string; icon: ReactNode; color: string }) {
  return (
    <div className="tec-button-wrapper">
      <button className="tec-button" style={{ border: `2px solid #${color}` }}>
        {icon}
      </button>
      <p className="tec-button-custom-tooltip">{toolTip}</p>
    </div>
  );
}

export default TecButton;
