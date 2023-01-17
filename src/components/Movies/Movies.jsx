import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';

function Movies() {
  return (
    <div>
      <Header />
      <SearchForm />
      {/* <Preloader /> */}
      <Footer />
    </div>
  );
}

export default Movies;
