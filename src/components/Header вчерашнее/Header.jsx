import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
  // залогинен
    // <header className="section header header__logged-in">
    // незалогинен
    <header className="section header header__logged-out">
      <div className="header__body">
        <a className="header__logo link-animation" href="/">
          <img
            className="header__img"
            src={logo}
            alt="логотип"
          />
        </a>
        <div className="header__burger header__burger_active link-animation">
          <span className="header__burger-span" />
        </div>
        <Navigation />
        <span className="header__cover" />
      </div>
    </header>
  );
}

export default Header;
