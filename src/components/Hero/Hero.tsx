import "./Hero.css";
import profile_photo from '../../assets/profile_photo.jpg';

function Hero() {
  return (
    <section className="hero" style={{ textAlign: "center" }}>
      <div className="info">
        <h2>Borgatta Lucas</h2>
        <h3>Ingeniero en Sistemas de Información</h3>
        <p>Apasionado por la tecnología, los desafíos y el aprendizaje continuo. Me gusta construir soluciones que sumen valor.</p>
      </div>
      <div className="image">
        <img src={profile_photo} alt="Foto perfil" />
      </div>
    </section>
  );
}

export default Hero;
