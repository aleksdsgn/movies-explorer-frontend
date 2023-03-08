import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import { mainApi } from '../../utils/MainApi';
// import { moviesApi } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();

  // // захардкодил вход в аккаунт
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLoggedIn = () => {
  //   setLoggedIn(true);
  //   navigate('/movies');
  // };

  // const handleLoggedOut = () => {
  //   setLoggedIn(false);
  //   navigate('/');
  // };

  // --------------------------------------------- //
  // --------- Состояния для авторизации --------- //
  // --------------------------------------------- //

  // начальные данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  // залогинен или нет
  const [loggedIn, setLoggedIn] = useState(true);

  // ошибки форм в зависимости от статуса
  const [statusErrorProfile, setStatusErrorProfile] = useState(false);
  const [statusErrorLogin, setStatusErrorLogin] = useState(false);
  const [statusErrorRegister, setStatusErrorRegister] = useState(false);

  // --------------------------------------------- //
  // -------- Обработчики при авторизации -------- //
  // --------------------------------------------- //

  // проверка наличия токена в локальном хранилище
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    mainApi.setToken(jwt);
    if (jwt) {
      // в случае успеха подгружаем данные пользователя и логиним его
      mainApi.getProfileInfo()
        .then((userData) => {
          if (userData) {
            setCurrentUser(userData);
            setLoggedIn(true);
          } else {
            // в противном случае разлогиниваем и перебрасываем на главную страницу
            setLoggedIn(false);
            navigate('/');
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(`:(  Не валидный токен: ${err}`);
        });
    } else {
      setLoggedIn(false);
    }
  };

  // авторизация
  const handleLogin = (userEmail, userPassword) => {
    if (!userEmail || !userPassword) {
      return;
    }
    mainApi
      .login(userEmail, userPassword)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setStatusErrorLogin(err);
        console.log(`:( Ошибка авторизации: ${err}`);
      });
  };

  // регистрация
  const handleRegister = (userName, userEmail, userPassword) => {
    // console.log('запуск handleRegister');
    mainApi
      .register(userName, userEmail, userPassword)
      .then(() => {
        // console.log(userName, userEmail, userPassword);
        handleLogin(userEmail, userPassword);
        // if (res) {
        //   navigate('/signin');
        // }
      })
      .catch((err) => {
        setStatusErrorRegister(err);
        console.log(err);
        // console.log(err.case);
        // console.log(err.code);
      });
  };

  // обработка редактирования данных профиля
  const handleUpdateUser = (updatedData) => {
    mainApi
      .updateProfileInfo(updatedData.name, updatedData.email)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setStatusErrorProfile(200);
      })
      .catch((err) => {
        // eslint-disable-next-line no-unused-expressions
        // err.message;
        setStatusErrorProfile(err);
        console.log(`:( Ошибка обновления информации: ${err}`);
      });
  };

  // выход из аккаунта
  const handleLogout = () => {
    localStorage.clear();
    setCurrentUser({});
    navigate('/signin');
    setLoggedIn(false);
  };

  // при первичной загрузке проверка залогинен ли уже пользователь
  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          loggedIn={loggedIn}
        />

        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/movies"
            element={(
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>
          )}
          />

          <Route
            path="/saved-movies"
            element={(
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>
        )}
          />

          <Route
            path="/profile"
            element={(
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                // loggedIn={loggedIn}
                  onUpdateUser={handleUpdateUser}
                  statusErrorProfile={statusErrorProfile}
                  handleLogout={handleLogout}
                />
              </ProtectedRoute>
              )}
          />

          <Route
            path="/signin"
            element={(
              <Login
                handleLogin={handleLogin}
                statusErrorLogin={statusErrorLogin}
              />
            )}
          />

          <Route
            path="/signup"
            element={(
              <Register
                handleRegister={handleRegister}
                statusErrorRegister={statusErrorRegister}
              />
            )}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
