import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import Redes from "../Redes/Redes";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home">
          <div className={styles.imgContainer}>
            <Redes />
          </div>
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link>
              <Link to="/developer" className={styles.me}>
                About me
              </Link>
            </Nav.Link>
          </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
          <Nav className={styles.hability}>
            <Nav.Link className={styles.text} href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className={styles.text} href="#skill">
              Skill Set
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className={styles.text} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


