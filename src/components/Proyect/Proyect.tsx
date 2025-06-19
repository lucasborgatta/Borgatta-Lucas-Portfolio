import "./Proyect.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { Fade, Modal } from "@mui/material";

function Proyect({ proyectTitle, proyectText, proyectImages }: { proyectTitle: string; proyectText: string; proyectImages: string[] }) {
  const [imageSelected, setImageSelected] = useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <div className="proyect">
      <div className="proyect-text-container">
        <h2>{proyectTitle}</h2>
        <p>{proyectText}</p>
      </div>
      <div className="proyect-image-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows
          infiniteLoop
          autoPlay={!open}
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
          <img src={imageSelected} alt="Error al cargar la imagen" style={{ maxHeight: "90%", maxWidth: "90%", display: "flex" }} />
        </Fade>
      </Modal>
    </div>
  );
}

export default Proyect;
