/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useState,
  // useEffect,
} from 'react';
import './SearchForm.css';

function SearchForm() {
  // содержимое строки поиска
  const [valueSearch, setValueSearch] = useState('');
  // валидация формы поиска
  const [searchIsValid, setSearchIsValid] = useState(false);

  // обработчик содержимого строки поиска
  const handleValueSearch = (e) => {
    // убрать ошибку если есть хотя бы 1 символ
    if (e.target.value.length > 0) {
      setSearchIsValid(true);
      // console.log('Прячу ошибку setShowError(false)');
    }

    // запомнить значение поиска
    setValueSearch(e.target.value);
    // console.log('Показываю значение поиска', e.target.value);
    // console.log('Что находится в valueSearch:', valueSearch);
  };

  // обработчик сабмита
  const handleSubmit = (e) => {
    // отключить перезагрузку страницы
    e.preventDefault();
    // console.log('Что находится в valueSearch:', valueSearch, 'и его длину:', valueSearch.length);
    // проверка количества символов в запросе
    if (valueSearch.length < 1) {
      setSearchIsValid(false);
      // console.log('Показываю ошибку setShowError(true)');
    }
  };

  return (
    <div className="section search-form">
      <form
        className="search-form__container"
        name="search-films"
        onSubmit={handleSubmit}
      >
        <fieldset className="search-form__field search-form__field-input">
          <div className="search-form__icon" />
          <label className="search-form__input-wrapper" htmlFor="film">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              id="film"
              name="film"
              value={valueSearch}
              // required
              onChange={handleValueSearch}
            />
          </label>
          <button
            className={`search-form__submit ${searchIsValid ? 'search-form__submit_active link-animation' : ''}`}
            // className="search-form__submit link-animation"
            type="submit"
            aria-label="Найти фильм"
            disabled={!searchIsValid}
          />
        </fieldset>
        <fieldset className="search-form__field search-form__field-short-films">
          <div className="search-form__line" />
          <label className="search-form__checkbox-label" htmlFor="short-films">
            <input
              className="search-form__checkbox"
              type="checkbox"
              id="short-films"
              name="short-films"
              // checked
            />
            <span className="search-form__checkbox-switch" />
          </label>
          <p className="search-form__short-films-text">
            Короткометражки
          </p>
        </fieldset>
      </form>
      <span className={`search-form__error ${!searchIsValid ? 'search-form__error_active' : ''}`}>
        Ну хоть одну буковку введите
        {/* Нужно ввести ключевое слово */}
      </span>
      <hr className="line search-form__hr-line" />
    </div>
  );
}

export default SearchForm;
