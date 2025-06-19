import "./Proyect.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { Fade, Modal } from "@mui/material";

function Proyect({
  proyectTitle,
  proyectText,
  proyectRol,
  proyectRepository,
  proyectImages,
  technologies,
}: {
  proyectTitle: string;
  proyectText: string;
  proyectRol: string;
  proyectRepository?: string;
  proyectImages: string[];
  technologies: React.ReactNode[];
}) {
  const [imageSelected, setImageSelected] = useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <div className="proyect">
      <div className="proyect-text-container">
        <h2>{proyectTitle}</h2>
        <p>{proyectText}</p>
        <h3>Rol en el proyecto: {proyectRol}</h3>
        <h3>Tecnologias utilizadas</h3>
        <div className="technologies-container">{technologies}</div>
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
        {proyectRepository && <h3>Repositorio</h3>}
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
