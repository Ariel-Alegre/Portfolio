import video from "../../video/about.mp4";
import styles from "./About.module.css";
import image from "../../image/cv-removebg-preview.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Me = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div>
          <video
            className={styles.video}
            src={video}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className={styles.me}>
          <Link to="/home">
            <button className={styles.button}>
              <IoMdArrowRoundBack />
            </button>
          </Link>
          <div className={styles.imgContainer}>
            <div>
              <img className={styles.img} src={image} alt="not found" />
            </div>
            <div className={styles.presentContainer}>
              <strong>
                <p className={styles.present}>
                  Me llamo Ariel Alegre tengo 24 años, me gusta mucho las
                  tecnologias, las computadoras, consolas, etc.., Me gusta tocar
                  instrumentos musicales como la guitarra, bateria y el piano.
                  Me gusta el futbol, soy muy curioso me gusta investigar.{" "}
                </p>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
