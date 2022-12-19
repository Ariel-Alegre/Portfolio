import { FaLinkedinIn } from 'react-icons/fa'; 
import styles from './Redes.module.css';
import { BsGithub } from 'react-icons/bs'; 


const Redes = () => {
    return (
        <div className={styles.redesContainer}>
            <a href='https://www.linkedin.com/in/ariel-alegre-84526a186/' target='_blank' rel="noreferrer">
                <FaLinkedinIn className={styles.icons}/>
                </a>
                <a href='https://github.com/Ariel-Alegre'  target='_blank' rel="noreferrer">
                    <BsGithub className={styles.icons}/>
                </a>
        </div>
    )
};

export default Redes;