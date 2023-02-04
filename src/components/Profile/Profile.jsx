import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import useFormValidation from '../../hooks/useFormValidation';

function Profile({
  onUpdateUser,
  statusErrorProfile,
  handleLogout,
}) {
  // подписка на контекст
  const currentUser = useContext(CurrentUserContext);
  // console.log('Что в currentUser:', currentUser);
  // обновлена ли информация пользователя
  const [isUserInfoEdited, setIsUserInfoEdited] = useState(false);

  // передача данных в хук для валидации формы
  const {
    values, errors, isValid, handleChange, resetFrom,
  } = useFormValidation();

  // значения в инпутах
  const { name, email } = values;

  // содержимое сообщения об ошибке api в форме
  const [formError, setFormError] = useState('');

  // показ сообщений при ошибках на сервере
  function handleApiStatusErrors() {
    if (statusErrorProfile) {
      switch (statusErrorProfile) {
        case 200:
          setFormError('Информация успешно обновлена');
          break;
        case 409:
          setFormError('Пользователь с таким email уже есть');
          break;
        case 500:
          setFormError('Ошибка на сервере. Иногда такое бывает :( Попробуйте позже');
          break;
        default:
          setFormError('Ошибочка вышла. Со всеми бывает :( Попробуйте позже');
          break;
      }
    }
  }

  // установка данных текущего пользователя при загрузке страницы
  useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, [currentUser.name, currentUser.email]);

  // подписка на обновление контекста
  useEffect(() => {
    setIsUserInfoEdited((values.name !== currentUser.name) || (values.email !== currentUser.email));
  }, [values.name, values.email]);

  // проверка наличия ошибок из api
  useEffect(() => {
    handleApiStatusErrors();
  }, [statusErrorProfile]);

  // обработка сабмита формы
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // передача во внешний обработчик
      onUpdateUser(name, email);
      console.log('во время сабмита currentUser:', currentUser.name, currentUser.email);
      console.log('во время сабмита name, email:', name, email);
      resetFrom();
    }
  };

  return (
    <section className="profile">

      <form className="profile__form" name="profile" onSubmit={handleSubmit}>

        <fieldset className="profile__fieldset">
          <h1 className="profile__title">
            Привет,
            {' '}
            {email}
            !
          </h1>

          <label className="profile__form-label" htmlFor="name">
            Имя
            <input
              className="profile__form-input"
              onChange={handleChange}
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
            <span className="sign__form-error sign__form-error_type_input">
              {errors.name}
            </span>
          </label>

          <hr className="line profile__line" />

          <label className="profile__form-label" htmlFor="email">
            E-mail
            <input
              className="profile__form-input"
              onChange={handleChange}
              value={email || ''}
              aria-label="Введите ваш e-mail"
              id="email"
              name="email"
              // pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              placeholder="Ваш e-mail"
              type="email"
              required
            />
            <span className="sign__form-error sign__form-error_type_input">
              {errors.email}
            </span>
          </label>

        </fieldset>

        <fieldset className="profile__fieldset">
          <span className="profile__form-error">{formError}</span>
          <button
            className="profile__button button-animation"
            // disabled={!isValid}
            disabled={!isValid || !isUserInfoEdited}
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
