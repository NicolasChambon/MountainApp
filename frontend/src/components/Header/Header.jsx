import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const sections = ["Mountains", "Faunas", "Floras", "Regions", "Map"];

  return (
    <header className="Header">
      <nav className="Header-nav">
        <Link>
          <img
            className="Header-nav-logo"
            src="../../../public/mountain-app-logo.png"
            alt="mountain app logo"
          />
        </Link>
        <ul className="Header-nav-sections">
          <li className="Header-nav-section">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "Header-nav-link Header-nav-link--selected"
                  : "Header-nav-link"
              }
              to="/"
            >
              Welcome
            </NavLink>
          </li>
          {sections.map((section) => {
            return (
              <li key={section} className="Header-nav-section">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "Header-nav-link Header-nav-link--selected"
                      : "Header-nav-link"
                  }
                  to={`/${section}`}
                >
                  {section}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
