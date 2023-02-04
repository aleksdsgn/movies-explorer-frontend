import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile({
  onUpdateUser,
  // statusErrorProfile,
  handleLogout,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // Подстановка в инпуты загруженных данных пользователя из API
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  // Обработчик изменения значения в инпуте имени
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // Обработчик изменения значения в инпуте описания
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // Обработчик сабмита
  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    console.log('Передаю во внешний обработчик:', name, email);
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      email,
    });
  };

  return (
    <section className="profile">

      <form className="profile__form" name="profile" onSubmit={handleSubmit}>

        <fieldset className="profile__fieldset">
          <h1 className="profile__title">{`Привет ${name}!`}</h1>

          <label className="profile__form-label" htmlFor="name">
            Имя
            <input
              className="profile__form-input"
              onChange={handleChangeName}
              value={name || ''}
              aria-label="Введите ваше имя"
              id="name"
              minLength="2"
              maxLength="30"
              name="name"
              placeholder="Ваше имя"
              type="text"
              required
            />
          </label>

          <hr className="line profile__line" />

          <label className="profile__form-label" htmlFor="email">
            E-mail
            <input
              className="profile__form-input"
              onChange={handleChangeEmail}
              value={email || ''}
              aria-label="Введите ваш e-mail"
              id="email"
              name="email"
              // pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              placeholder="Ваш e-mail"
              type="email"
              required
            />
          </label>

        </fieldset>

        <fieldset className="profile__fieldset">
          {/* <span className="profile__form-error">{formError}</span> */}
          <button
            className="profile__button button-animation"
            // disabled={!isValid}
            // disabled={!isValid || !isUserInfoEdited}
            aria-label="Редактировать профиль"
            type="submit"
          >
            Редактировать
          </button>

          <button
            className="profile__button profile__button_type_logout link-animation"
            aria-label="Выйти из аккаунта"
            type="button"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </fieldset>

      </form>

    </section>
  );
}

export default Profile;
