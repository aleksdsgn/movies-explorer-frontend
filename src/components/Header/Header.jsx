import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
  // залогинен header__logged-in
  // незалогинен
    <header className="section header header__logged-in">
      <a className="header__logo link-animation" href="/">
        <img
          className="header__img"
          src={logo}
          alt="логотип"
        />
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
