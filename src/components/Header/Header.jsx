import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="section header header__type_logout">
      <a className="link-animation" href="/">
        <img
          className="header__img"
          src={logo}
          alt="логотип"
        />
      </a>
      <ul className="header__menu">
        <li className="header__menu-item">
          <a className="header__link header__link_type_signup link-animation" href="/signup">
            Регистрация
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__link header__link_type_signin link-animation" href="/signin">
            Войти
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
