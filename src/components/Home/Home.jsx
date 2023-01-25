import Projects from "../Projects/Projects";
import SkillSet from "../SkillSet/SkillSet";
import User from "../User/User";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <div>
        <User />
      </div>
      <div>
        <NavBar />
      </div>
      <div className={styles.portfolio}>
        <Projects />
      </div>
      <div>
        <SkillSet />
      </div>
    </div>
  );
};

export default Home;
