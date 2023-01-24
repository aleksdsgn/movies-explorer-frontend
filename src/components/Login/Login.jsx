import { Link } from 'react-router-dom';
import '../Register/Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="sign">

      <form className="sign__form" name="register">
        <fieldset className="sign__fieldset">
          <Link to="/" className="sign__header link-animation" aria-label="На главную">
            <img
              className="header__img"
              src={logo}
              alt="логотип"
            />
          </Link>
          <h1 className="sign__title">
            Рады видеть!
          </h1>

          <label className="sign__form-label" htmlFor="email">
            E-mail
            <input
              required
              className="sign__form-input"
              type="email"
              placeholder="Ваш e-mail"
              id="email"
              name="email"
              aria-label="Введите ваш e-mail"
            />
            {/* <span className="sign__form-input-error">Что-то пошло не так...</span> */}
          </label>

          <label className="sign__form-label" htmlFor="password">
            Пароль
            <input
              required
              className="sign__form-input sign__form-input_type_error"
              type="password"
              placeholder="Ваш пароль"
              id="password"
              name="password"
              aria-label="Введите ваш пароль"
            />
            <span className="sign__form-input-error">Что-то пошло не так...</span>
          </label>
        </fieldset>

        <fieldset className="sign__fieldset">
          <button
            className="sign__form-button link-animation"
            type="submit"
            aria-label="Войти"
          >
            Войти
          </button>

          <p className="sign__text">
            Ещё не зарегистрированы?
            <Link
              to="/signup"
              className="sign__text-link link-animation"
              aria-label="На страницу регистрации"
            >
              Регистрация
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
