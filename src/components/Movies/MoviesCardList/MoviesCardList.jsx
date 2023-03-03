import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  cards,
  onClickUpdateMovie,
  searchWasDone,
}) {
  const { pathname } = useLocation();

  return (
    <div className="section movies-cards">
      <ul className="movies-cards__list">
        {cards.map((card) => (
          <MoviesCard
            key={card.id || card._id}
            card={card}
            onClickUpdateMovie={onClickUpdateMovie}
          />
        ))}
      </ul>

      {cards.length === 0 && searchWasDone && (
      <div>
        <span className="movies-cards__nothing">Ничего не найдено</span>
      </div>
      )}

      {pathname === '/movies'
        && (
        <div className="movies-cards__button-more-wrapper">
          <button
            className="movies-cards__button-more link-animation"
            aria-label="Подгрузить еще больше карточек"
            type="button"
          >
            Ещё
          </button>
        </div>
        )}
    </div>
  );
}

export default MoviesCardList;
