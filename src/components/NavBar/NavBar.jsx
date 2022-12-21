import styles from './NavBar.module.css';
import Redes from '../Redes/Redes';
import { SiWhatsapp } from 'react-icons/si'; 
import { AiOutlineMail } from 'react-icons/ai'; 
import { Link } from 'react-router-dom'; 



/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () => {
    return (
      <div className={styles.navbar}>
<nav class="navbar ">
<div class="container-fluid">
<div className={styles.imgContainer}>
    <Redes/>
    <a href="https://api.whatsapp.com/send/?phone=%2B5401161361408&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer">
      <SiWhatsapp className={styles.icons}/>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSPFrLHFjTScGrbDzMBkrnmWcVkNbMjbXgDbbhMbNxCTCRMLlmZfwQNsbFwndhjFwBrwGZMR" target='_blank' rel="noreferrer">
      <AiOutlineMail className={styles.icons}/>
           </a>
           </div> 
           <div>
            <Link to='/developer' className={styles.me}>
            About me
            </Link>
           </div>
           <div className={styles.direction}>
            <div>
            <a className={styles.text} href="#portfolio">Portfolio</a>
            </div>
            <div>
           <a  className={styles.text} href="#skill">Skill Set</a>
           </div>
           <div>
           <a  className={styles.text} href="#contact">Contact</a>
           </div>
           </div>

      </div>
     </nav>
    </div>
    )
};

export default NavBar;