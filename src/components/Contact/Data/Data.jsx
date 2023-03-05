import React from "react";
import styles from "./Data.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";

const Data = () => {
  return (
    <div id="contact">
        <div className={styles.imgContainer}>
          <a
            href="https://github.com/Ariel-Alegre?tab=repositories"
            target="_blanck"
            rel="noreferrer"
          >
            <h1>
              <BsGithub />
            </h1>
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-alegre-84526a186/"
            target="_blanck"
            rel="noreferrer"
          >
            <h1>
              <BsLinkedin />
            </h1>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5401161361408&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <h1>
              <IoLogoWhatsapp />
            </h1>
          </a>
    
        </div>
        <hr className={styles.linea}/>
        <div className={styles.contactDirect}>
            <p>
              <FcPhoneAndroid />: +541161361408
            </p>
            <p>
              <AiOutlineMail />: arielalegre98@gmail.com
            </p>
          </div>
      </div>
  );
};

export default Data;
