export const SUGGESTION_API_KEY = 'eadbc452286d23c7163b38989884d5ae40d08ade';

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
