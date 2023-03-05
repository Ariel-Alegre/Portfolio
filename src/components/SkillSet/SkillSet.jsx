/* eslint-disable jsx-a11y/alt-text */
import styles from "./SkillSet.module.css";
import Contact from "../Contact/Contact";

const SkillSet = () => {
  return (
    <div id="skill" className={styles.sekillContainer}>
      <div className={styles.boxSkill}>
        <h2 className={styles.titleSkill}>S K I L L S E T</h2>
        <hr className={styles.linea} />
        <div className={styles.skill}>
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original-wordmark.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original-wordmark.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original-wordmark.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg"
            target="_blank"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original-wordmark.svg"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jquery/jquery-original-wordmark.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg"
            height="50px"
            width="50px"
          />
          <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg"
            height="50px"
            width="50px"
          />
           <img
            className={styles.img}
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original-wordmark.svg"
            height="50px"
            width="50px"
          />
        </div>
        <hr className={styles.linea} />
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
