/* eslint-disable jsx-a11y/alt-text */
import styles from './SkillSet.module.css';
import Contact from '../Contact/Contact';



const SkillSet = () => {

    return(
<div id='skill' className={styles.sekillContainer}>     
    <h2 className={styles.titleSkill}>S K I L L S E T</h2>
    <hr className={styles.linea} />
    <div  className={styles.skill}>       
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg' height='50px' width='50px'/>
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg' height='50px' width='50px'/>
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg' height='50px' width='50px'/>
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' height='50px' width='50px'/>
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg' height='50px' width='50px'/>
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg' height='50px' width='50px'/>
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg' height='50px' width='50px'/>
<img className={styles.img} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original.svg' height='50px' width='50px'/>
    </div>
    <hr className={styles.linea}/>
     <div>    
    <Contact/>
    </div>
</div>   
    )
};

export default SkillSet;