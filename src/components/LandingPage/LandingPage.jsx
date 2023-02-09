import { Link } from "react-router-dom";
import image from "../../image/cv-removebg-preview.png";
import styles from "./LandingPage.module.css";
import video from "../../video/handle.mp4";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} src={video} autoPlay loop muted></video>
      <div className={styles.content}>
        <img src={image} className={styles.img} alt="Not found" />
        <h1 className={styles.title}>
          Hola me llamo Ariel Alegre y soy Full Stack Developer
        </h1>
        <Link to="/home">
          <button className={styles.btn}>ingresar</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
