import api from 'api';

export const GET_COMIC_START = 'GET_COMIC_START';
export const GET_COMIC_ERROR = 'GET_COMIC_ERROR';
export const GET_COMIC_SUCCESS = 'GET_COMIC_SUCCESS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

// Async action example

function comicRequestStart() {
  return {
    type: GET_COMIC_START,
  };
}

function comicRequestSuccess(data) {
  return {
    type: GET_COMIC_SUCCESS,
    data,
  };
}

function comicRequestFail(error) {
  return {
    type: GET_COMIC_ERROR,
    error,
  };
}
function showModal() {
  return {
    type: SHOW_MODAL
  };  
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };  
}``
export function getComic(url) {
  return function (dispatch) {
    dispatch(comicRequestStart());
  api.getComic(url)
      .then(data => {
        dispatch(comicRequestSuccess(data.data.data.results.map(item => item)))
        dispatch(showModal())
      })
      .catch(error => dispatch(comicRequestFail(error)));
  };
}

// Update