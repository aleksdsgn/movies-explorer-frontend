class MainApi {
  constructor(apiConfig) {
    this._baseUrl = apiConfig.baseUrl;
    this._headers = apiConfig.headers;
  }

  // _handleResponse(res) {
  //   return res.json().then((data) => {
  //     // console.log('в handleResponse:', data);
  //     if (res.ok) {
  //       return data;
  //     }
  //     return Promise.reject(new Error(data.message));
  //   });
  // }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  // установка токена
  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  // регистрация
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }

  // авторизация
  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  // запрос данных профиля
  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // запрос сохраненных пользователем фильмов
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // сохранение отредактированных данных профиля
  updateProfileInfo(name, email) {
    console.log('MainApi updateProfileInfo(name, email):', name, email);
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._handleResponse);
  }

  // создание и загрузка новой карточки фильма на сервер
  createMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  }

  // удаление фильма из сохраненных
  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
  // baseUrl: 'https://api.movies.aleksdsgn.nomoredomains.club',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});
