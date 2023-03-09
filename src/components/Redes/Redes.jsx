import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Redes.module.css";
import { BsGithub } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";


const Redes = () => {
  return (
    <div className={styles.redesContainer}>
      <a
        href="https://www.linkedin.com/in/ariel-alegre-84526a186/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn className={styles.icons} />
      </a>
      <a
        href="https://github.com/Ariel-Alegre?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className={styles.icons} />
      </a>
      <a
                  href="https://api.whatsapp.com/send/?phone=%2B5401161361408&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiWhatsapp className={styles.icons} />
                </a>
    </div>
  );
};

export default Redes;
