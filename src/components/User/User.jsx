import image from "../../image/cv-removebg-preview.png";
import styles from "./User.module.css";
import video from "../../video/handle.mp4";

const User = () => {
  return (
    <div className={styles.userContainer}>
      <video className={styles.video} src={video} autoPlay loop muted></video>
      <div className={styles.boxUser}>
        <div className={styles.imgContainer}>
          <img src={image} className={styles.img} alt="not found" />
        </div>

        <div align="center" class="card-body">
          <h1 class="card-title">Ariel Alegre</h1>
          <hr className={styles.linea} />
          <p class="card-text">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default User;
