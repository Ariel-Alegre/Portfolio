import React from "react";
import MyEmail from "./Email/Email";
import Data from "./Data/Data";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <h2 className={styles.title}>C O N T A C T</h2>
  <hr className={styles.linea}/>
      <MyEmail/>
  <hr className={styles.linea}/>

      <Data/>

    </div>
  );
};

export default Contact;
