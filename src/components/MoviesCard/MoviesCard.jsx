import './MoviesCard.css';
import thumbnail from '../../images/thumbnail.jpg';

function MoviesCard() {
  return (
    <article className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне   33 слова о дизайне   33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        <button
          className="movies-card__button .movies-card__button_type_favorite-disabled movies-card__button_type_favorite-enabled link-animation"
          type="button"
          aria-label="Сохранить"
        />
      </div>
      <a className="movies-card__link-image link-animation">
        <img
          className="movies-card__image"
          src={thumbnail}
          alt="Описание картинки"
        />
      </a>
    </article>
  );
}

export default MoviesCard;
