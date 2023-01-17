/* eslint-disable jsx-a11y/label-has-associated-control */
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="section search-form">
      <form className="search-form__container">
        <fieldset className="search-form__field">
          <div className="search-form__icon" />
          <label className="search-form__input-wrapper" htmlFor="film">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              id="film"
              name="film"
            />
          </label>
          <button
            className="search-form__submit"
            type="submit"
            aria-label="Найти фильм"
          />
        </fieldset>
        {/* <fieldset> */}
        <div className="search-form__line" />
        <input
          className="search-form__checkbox"
          type="checkbox"
          id="short-films"
          name="short-films"
        />
        <label className="search-form__checkbox-label" htmlFor="short-films" />
        <p className="search-form__short-films-text">
          Короткометражки
        </p>
        {/* </fieldset> */}
      </form>
      <hr className="line" />
    </section>
  );
}

export default SearchForm;
