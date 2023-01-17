import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
  // незалогинен
  // <header className="section header header__type_logout">
  //   <a className="link-animation" href="/">
  //     <img
  //       className="header__img"
  //       src={logo}
  //       alt="логотип"
  //     />
  //   </a>
  //   <ul className="header__menu">
  //     <li className="header__menu-item">
  //       <a className="header__link header__link_type_signup link-animation" href="/signup">
  //         Регистрация
  //       </a>
  //     </li>
  //     <li className="header__menu-item">
  //       <a className="header__link header__link_type_signin link-animation" href="/signin">
  //         Войти
  //       </a>
  //     </li>
  //   </ul>
  // </header>

    // залогинен
    <header className="section header header__type_login">
      <a className="link-animation" href="/">
        <img
          className="header__img"
          src={logo}
          alt="логотип"
        />
      </a>
      <ul className="header__menu">
        <li className="header__menu-item">
          <a className="header__link header__link-logged-in header__link-logged-in_active header__link_type_movies link-animation" href="/movies">
            Фильмы
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__link header__link-logged-in header__link_type_saved-movies link-animation" href="/saved-movies">
            Сохранённые фильмы
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__link header__link-logged-in header__link_type_profile link-animation" href="/profile">
            Аккаунт
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
