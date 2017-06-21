import api from 'api';

export const GET_HEROS_SEARCH_START = 'GET_HEROS_SEARCH_START';
export const GET_HEROS_SEARCH_ERROR = 'GET_HEROS_SEARCH_ERROR';
export const GET_HEROS_SEARCH_SUCCESS = 'GET_HEROS_SEARCH_SUCCESS';

// Async action example

function heroRequestStart() {
  return {
    type: GET_HEROS_SEARCH_START,
  };
}

function heroRequestSuccess(data) {
  return {
    type: GET_HEROS_SEARCH_SUCCESS,
    data,
  };
}

function heroRequestFail(error) {
  return {
    type: GET_HEROS_SEARCH_ERROR,
    error,
  };
}

export function getHerosSearch(value) {
  return function (dispatch) {
    dispatch(heroRequestStart());
  api.get("public/characters", {}, { nameStartsWith : value})
      .then(data => dispatch(heroRequestSuccess(data.data.data.results.map(item => item))))
      .catch(error => dispatch(heroRequestFail(error)));
  };
}

// Update