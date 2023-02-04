class MainApi {
  constructor(apiConfig) {
    this._baseUrl = apiConfig.baseUrl;
    this._headers = apiConfig.headers;
  }

  _handleResponse(res) {
    return res.json().then((data) => {
      console.log('в handleResponse:', data);
      if (res.ok) {
        return data;
      }
      return Promise.reject(new Error(data.message));
    });
  }

  // установка токена
  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  // регистрация
  async register(name, email, password) {
    const res = await fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
    return this._handleResponse(res);
  }

  // авторизация
  async login(email, password) {
    const res = await fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
    return this._handleResponse(res);
  }

  // запрос данных профиля
  async getProfileInfo() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._handleResponse(res);
  }

  // запрос сохраненных пользователем фильмов
  async getSavedMovies() {
    const res = await fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._handleResponse(res);
  }

  // сохранение отредактированных данных профиля
  async updateProfileInfo(name, email) {
    console.log('данные приходящие в MainApi:', name, email);
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    });
    return this._handleResponse(res);
  }

  // создание и загрузка новой карточки фильма на сервер
  async createMovie(data) {
    const res = await fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
    return this._handleResponse(res);
  }

  // удаление фильма из сохраненных
  async deleteMovie(id) {
    const res = await fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
    return this._handleResponse(res);
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
