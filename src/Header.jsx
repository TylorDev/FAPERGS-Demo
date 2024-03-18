import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src="logo.png" alt="" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="nav__item">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="nav__item">
            <a href="#testimonial">Testimonial</a>
          </li>
          <li className="nav__item">
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
