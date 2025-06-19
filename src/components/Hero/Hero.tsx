import "./Hero.css";
import profile_photo from "../../assets/profile_photo.jpg";

function Hero() {
  return (
    <section className="hero" style={{ textAlign: "center" }}>
      <div className="image">
        <img src={profile_photo} alt="Foto perfil" />
      </div>
      <div className="info">
        <h2>Hola, mi nombre es Lucas!</h2>
        <h3>Ingeniero en Sistemas de Información</h3>
        <p>Apasionado por la tecnología, los desafíos y el aprendizaje continuo. Me gusta construir soluciones que sumen valor.</p>
      </div>
    </section>
  );
}

export default Hero;
