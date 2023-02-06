import React from "react";
import styles from "./Whatsapp.module.css";
import { SiWhatsapp } from "react-icons/si";

const Whatsapp = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.imgContainer}>
        <h3>Whatsapp</h3>

        <a
          href="https://api.whatsapp.com/send/?phone=%2B5401161361408&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <SiWhatsapp className={styles.img} />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
