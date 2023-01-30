class MoviesApi {
  constructor(apiConfig) {
    this._url = apiConfig.baseUrl;
    this._headers = apiConfig.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  async getMovies() {
    const res = await fetch(`${this._url}`, {
      headers: this._headers,
    });
    return this._handleResponse(res);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});
