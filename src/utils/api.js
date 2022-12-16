class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCnpj(cnpj) {
    return fetch(`${this._baseUrl}/${cnpj}`, this._headers).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
  }
}

const api = new Api({
  baseUrl: 'https://brasilapi.com.br/api/cnpj/v1',
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
