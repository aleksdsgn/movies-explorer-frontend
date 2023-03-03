import { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { mainApi } from '../../../utils/MainApi';

function SavedMovies() {
  // состояние исходных фильмов
  const [sourceMovies, setSourceMovies] = useState([]);
  // состояние отфильтрованных фильмов
  const [filteredMovies, setFilteredMovies] = useState([]);
  // состояние показа прелоудера
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  // состояние выполненого поиска
  const [searchWasDone, setSearchWasDone] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    mainApi.setToken(jwt);
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies') || '[]');
    if (savedMovies.length === 0) {
      setIsShowPreloader(true);
      mainApi.getSavedMovies()
        .then((serverMovies) => {
          localStorage.setItem('saved-movies', JSON.stringify(serverMovies.data));
          setSourceMovies(serverMovies.data);
          setFilteredMovies(serverMovies.data);
          setIsShowPreloader(false);
        });
    } else {
      setSourceMovies(savedMovies);
      setFilteredMovies(savedMovies);
    }
  }, []);

  const filterMovies = (search) => {
    setSearchWasDone(true);
    setFilteredMovies(sourceMovies.filter((movie) => {
      const isName = movie.nameRU.toLowerCase().includes(search.name.toLowerCase());
      const isShorts = search.isShorts ? movie.duration <= 40 : true;
      return isName && isShorts;
    }));
  };

  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setFilteredMovies((savedMovies) => {
          const localMovies = JSON.parse(localStorage.getItem('local-movies') || '[]');
          const updatedLocalMovies = localMovies.map((localMovie) => {
            if (localMovie.id === movie.movieId) {
              localMovie.saved = false;
            }
            return localMovie;
          });
          localStorage.setItem('local-movies', JSON.stringify(updatedLocalMovies));
          const filteredSavedMovies = savedMovies.filter((savedMovie) => savedMovie._id !== movie._id);
          localStorage.setItem('saved-movies', JSON.stringify(filteredSavedMovies));
          return filteredSavedMovies;
        });
      });
  };

  return (
    <main>
      <SearchForm
        filterMovies={filterMovies}
        required={false}
        page="saved-movies"
      />

      {isShowPreloader
        && (
        <div className="movies__preloader-container">
          <Preloader />
        </div>
        )}

      <MoviesCardList
        cards={filteredMovies}
        onClickUpdateMovie={handleDeleteMovie}
        searchWasDone={searchWasDone}
      />
    </main>
  );
}

export default SavedMovies;
