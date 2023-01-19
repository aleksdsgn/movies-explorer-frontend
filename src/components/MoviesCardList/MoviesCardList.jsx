import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="section movies-cards">
      <ul className="movies-cards__list">
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
        <li className="movies-cards__item">
          <MoviesCard />
        </li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
