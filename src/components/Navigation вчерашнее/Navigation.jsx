import './Navigation.css';

function Navigation() {
  return (
  // незалогинен
    <nav className="header__menu">
      <ul className="header__list">
        <li className="header__list-item">
          <a
            className="
              header__link-logged-out
              header__link_type_signup
              link-animation"
            href="/signup"
          >
            Регистрация
          </a>
        </li>
        <li className="header__list-item">
          <a
            className="
              header__link-logged-out
              header__link_type_signin
              link-animation"
            href="/signin"
          >
            Войти
          </a>
        </li>
      </ul>
    </nav>

  // залогинен

  // <nav className="header__menu header__menu_active">
  //   <ul className="header__list">
  //     <li className="header__list-item">
  //       <a
  //         className="
  //           header__link-logged-in
  //           header__link_type_home
  //           link-animation"
  //         href="/movies"
  //       >
  //         Главная
  //       </a>
  //     </li>
  //     <li className="header__list-item">
  //       <a
  //         className="
  //           header__link-logged-in
  //           header__link-logged-in_active
  //           header__link_type_movies
  //           link-animation"
  //         href="/movies"
  //       >
  //         Фильмы
  //       </a>
  //     </li>
  //     <li className="header__list-item">
  //       <a
  //         className="
  //           header__link-logged-in
  //           header__link_type_saved-movies
  //           link-animation"
  //         href="/saved-movies"
  //       >
  //         Сохранённые фильмы
  //       </a>
  //     </li>
  //     <li className="header__list-item">
  //       <a
  //         className="
  //           header__link-logged-in
  //           header__link_type_profile
  //           link-animation"
  //         href="/profile"
  //       >
  //         Аккаунт
  //       </a>
  //     </li>
  //   </ul>
  // </nav>
  );
}

export default Navigation;
