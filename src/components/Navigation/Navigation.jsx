import './Navigation.css';

function Navigation() {
  return (
  // незалогинен
  // залогинен
    <div className="navigation">
      <nav className="navigation__menu-logged-out navigation__menu_active">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a
              className="
                navigation__link-logged-out
                navigation__link_type_signup
                link-animation"
              href="/signup"
            >
              Регистрация
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              className="
                navigation__link-logged-out
                navigation__link_type_signin
                link-animation"
              href="/signin"
            >
              Войти
            </a>
          </li>
        </ul>
      </nav>

      {/* <div className="navigation__burger link-animation navigation__burger_active"> */}
      <div className="navigation__burger_active link-animation">
        <span className="navigation__burger-span" />
      </div>

      {/* <nav className="navigation__menu-logged-in navigation__menu_active"> */}
      {/* <nav className="navigation__menu-logged-in navigation__menu-logged-in_active">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a
              className="
                navigation__link-logged-in
                navigation__link_type_home
                link-animation"
              href="/movies"
            >
              Главная
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              className="
                navigation__link-logged-in
                navigation__link-logged-in_active
                navigation__link_type_movies
                link-animation"
              href="/movies"
            >
              Фильмы
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              className="
                navigation__link-logged-in
                navigation__link_type_saved-movies
                link-animation"
              href="/saved-movies"
            >
              Сохранённые фильмы
            </a>
          </li>
          <li className="navigation__list-item">
            <a
              className="
                navigation__link-logged-in
                navigation__link_type_profile
                link-animation"
              href="/profile"
            >
              Аккаунт
            </a>
          </li>
        </ul>
      </nav>
      <div className="navigation__cover navigation__cover_active" /> */}
    </div>
  );
}

export default Navigation;
