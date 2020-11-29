export const SUGGESTION_API_KEY = 'eadbc452286d23c7163b38989884d5ae40d08ade';
export const API_URL = __DEV__
  ? 'http://localhost:21080'
  : 'https://app.vegfood.delivery';
// export const API_URL = 'https://app.vegfood.delivery';
// export const API_URL = 'https://31.31.201.107';
export const suggestionFetchOptions = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + SUGGESTION_API_KEY,
  },
  body: '',
};
