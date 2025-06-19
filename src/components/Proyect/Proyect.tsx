import "./Proyect.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Divider, Fade, Modal } from "@mui/material";
import TecButton from "../TecButton/TecButton";

function Proyect({
  proyectTitle,
  proyectText,
  proyectRol,
  proyectRepository,
  proyectLink,
  proyectImages,
  technologies,
}: {
  proyectTitle: string;
  proyectText: string;
  proyectRol: string;
  proyectRepository?: string;
  proyectLink?: string;
  proyectImages?: string[];
  technologies: React.ReactNode[];
}) {
  const [imageSelected, setImageSelected] = useState<string>("");
  const [open, setOpen] = useState(false);

  const openRepository = () => {
    const url = proyectRepository;
    window.open(url, "_blank");
  };

  const openLink = () => {
    const url = proyectLink;
    window.open(url, "_blank");
  };

  return (
    <div className="proyect">
      <div className="proyect-text-container">
        <h2>{proyectTitle}</h2>
        <p>{proyectText}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ margin: 0 }}>Rol en el proyecto:</h3>
          <p style={{ margin: 0 }}>{proyectRol}</p>
        </div>
        <h3>Tecnologias utilizadas</h3>
        <div className="technologies-container" style={proyectImages === undefined ? { marginBottom: "0px" } : {}}>
          {technologies}
        </div>
      </div>
      <div>
        <div className="proyect-image-container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows
            swipeable
            infiniteLoop
            autoPlay={!open}
            interval={4500}
            transitionTime={800}
            onClickItem={(index) => {
              const selected = proyectImages ? proyectImages[index] : "";
              setImageSelected(selected);
              setOpen(true);
            }}
          >
            {proyectImages?.map((imageURL, index) => (
              <img src={imageURL} alt={`Imagen ${index + 1}`} />
            ))}
          </Carousel>
        </div>
        {(proyectRepository || proyectLink) && (
          <>
            <h3>Repositorio</h3>
            <div className="technologies-container">
              <TecButton toolTip="Demo/Página" icon={<TbWorldWww size={32} />} color="ffffff" disabled={!proyectLink} onClick={openLink}></TecButton>
              <TecButton
                toolTip="Github"
                icon={<FaGithub size={32} />}
                color="ffffff"
                disabled={!proyectRepository}
                onClick={openRepository}
              ></TecButton>
            </div>
          </>
        )}
        <Divider></Divider>
      </div>

      <Modal
        className={"modal-image-fullScreen"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeAfterTransition
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Fade in={open} timeout={500} className={"image-full-screen"}>
          <img
            src={imageSelected}
            alt="Error al cargar la imagen"
            style={{ maxHeight: "90%", maxWidth: "90%", display: "flex", borderRadius: "15px" }}
          />
        </Fade>
      </Modal>
    </div>
  );
}

export default Proyect;
