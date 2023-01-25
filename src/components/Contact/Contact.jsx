import React from "react";
import styles from "./Contact.module.css";
import { SiWhatsapp } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <h2 className={styles.title}>C O N T A C T</h2>
      <hr />
      <div className={styles.imgContainer}>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5401161361408&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <SiWhatsapp className={styles.img} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSPFrLHFjTScGrbDzMBkrnmWcVkNbMjbXgDbbhMbNxCTCRMLlmZfwQNsbFwndhjFwBrwGZMR"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail className={styles.img} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
