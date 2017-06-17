import api from 'api';

export const GET_HEROS_START = 'GET_HEROS_START';
export const GET_HEROS_ERROR = 'GET_HEROS_ERROR';
export const GET_HEROS_SUCCESS = 'GET_HEROS_SUCCESS';

// Async action example

function heroRequestStart() {
  return {
    type: GET_HEROS_START,
  };
}

function heroRequestSuccess(data) {
  return {
    type: GET_HEROS_SUCCESS,
    data,
  };
}

function heroRequestFail(error) {
  return {
    type: GET_HEROS_ERROR,
    error,
  };
}

export function getHeros() {
  return function (dispatch) {
    dispatch(heroRequestStart());

  api.get("public/characters")
      .then(data => dispatch(heroRequestSuccess(data.data.data.results.map(item => item))))
      .catch(error => dispatch(heroRequestFail(error)));
  };
}

// Update