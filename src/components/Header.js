import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// import "../Css/header.css";
// import "../Css/global.css";

import { Link } from "react-router-dom";
import { Navbar, Icon } from "react-materialize"
export default function Header() {
  const { toggle, theme, dark } = useContext(ThemeContext);

  return (
    <div>

      <Navbar className="menu"
        alignLinks="right"
        brand={<span className="brand-logo"> Film Cards </span>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}>
        <ul>
          <li>
            <Link to="/"><Icon left>home</Icon>Movies</Link>
          </li>
          <li>
            <Link to="/about"><Icon left>info_outline</Icon>About</Link>

          </li>
          <li>
            <Link to="/news"><Icon left>info_outline</Icon>News</Link>

          </li>
          <li>
            <Link to="/contact"><Icon left>contacts</Icon>Contact</Link>

          </li>
        </ul>
      </Navbar>
      <div style={{ position: "relative" }}>

        <div className="header">FILMS COLLECTION</div>

        <a
          className="switch-mode"
          href="#"
          onClick={toggle}
          style={{
            color: theme.color,
            outline: "none",
            textDecoration: "none",
            backgroundColor: "#fabd72",
            padding: "1rem 1rem",
          }}
          data-testid="toggle-theme-btn"
        >
          {!dark ? "Dark" : "Light"}
        </a>
      </div>
    </div>
  );
}
