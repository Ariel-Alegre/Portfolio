import image from "../../image/videosjuegos.png";
import country from "../../image/Countries.png";
import Astro from "../../image/Astro-Gamer.png";
import pokemon from '../../image/Pokemons.png'
import styles from "./Project.module.css";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <div class="col-xs-12">
        <h2 id="portfolio" className={styles.titlePortfolio}>
          P O R T F O L I O
        </h2>
        <hr className={styles.linea} />
      </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>Astro Gamer</h3>
        <a href="https://p-grupal.vercel.app/" target="_blank" rel="noreferrer">
          <img src={Astro} className={styles.img} alt="not found" />
        </a>
        <div className="">
          <a
            href="https://github.com/Ariel-Alegre/Astro-Gamers"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
          </a>
        </div>
      </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>Videos Games</h3>
        <a
          href="https://videos-juegos.vercel.app/home"
          target="_blank"
          rel="noreferrer"
        >
          <img src={image} className={styles.img} alt="not found" />
        </a>
        <div className="">
          <a
            href="https://github.com/Ariel-Alegre/Videos-Juegos"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
          </a>
        </div>
      </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>Pokemons</h3>
        <a href="https://pokemon-chi-pied.vercel.app/home" target="_blank" rel="noreferrer">
          <img src={pokemon} className={styles.img} alt="not found" />
        </a>
        <div className="">
          <a
            href="https://github.com/Ariel-Alegre/Pokemon"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
          </a>
        </div>
      </div>

      <div className={styles.projects}>
        <h3 className={styles.title}>Countries</h3>
        <a
          href="https://countries-odezfvq49-ariel-alegre.vercel.app/home"
          target="_blank"
          rel="noreferrer"
        >
          <img src={country} className={styles.img} alt="not found" />
        </a>
        <div className="">
          <a
            href="https://github.com/Ariel-Alegre/Countries"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
