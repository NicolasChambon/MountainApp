import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <nav className="Header-nav">
        <img
          className="Header-nav-logo"
          src="../../../public/mountain-app-logo.png"
          alt=""
        />
        <ul className="Header-nav-sections">
          <li className="Header-nav-section">
            <a className="Header-nav-link" href="">
              Welcome
            </a>
          </li>
          <li className="Header-nav-section">
            <a className="Header-nav-link" href="">
              Mountains
            </a>
          </li>
          <li className="Header-nav-section">
            <a className="Header-nav-link" href="">
              Faunas
            </a>
          </li>
          <li className="Header-nav-section">
            <a className="Header-nav-link" href="">
              Floras
            </a>
          </li>
          <li className="Header-nav-section">
            <a className="Header-nav-link" href="">
              Regions
            </a>
          </li>
          <li className="Header-nav-section">
            <a className="Header-nav-link" href="">
              Map
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
