import image from "../../image/videosjuegos.png";
import country from "../../image/Countries.png";
import Astro from "../../image/Astro-Gamer.png";
import pokemon from '../../image/Pokemons.png'
import shop from '../../image/My-shop.png';

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
        <a href="https://astro-gamer.vercel.app/" target="_blank" rel="noreferrer">
          <img src={Astro} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Ariel-Alegre/Astro-Gamer"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
            <p>
            Repositorio
            </p>
          </a>
        </div>
      </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>My Shop</h3>
        <a href="https://my-shop-peach-six.vercel.app/" target="_blank" rel="noreferrer">
          <img src={shop} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Ariel-Alegre/My-shop"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
            <p>
            Repositorio
            </p>
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
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Ariel-Alegre/Videos-Juegos"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
            <p>
            Repositorio
            </p>
          </a>
        </div>
      </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>Pokemons</h3>
        <a href="https://pokemon-three-gamma.vercel.app/" target="_blank" rel="noreferrer">
          <img src={pokemon} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Ariel-Alegre/Pokemon"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
            <p>
            Repositorio
            </p>
          </a>
        </div>
      </div>

      <div className={styles.projects}>
        <h3 className={styles.title}>Countries</h3>
        <a
          href="https://countries-rosy-one.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={country} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Ariel-Alegre/Countries"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={styles.icons} />
            <p>
            Repositorio
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
