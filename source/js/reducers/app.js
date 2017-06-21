import { Map } from 'immutable';

import {
  GET_HEROS_START,
  GET_HEROS_ERROR,
  GET_HEROS_SUCCESS,
  SAVE_FAVORITE,
  SLICE_FAVORITE,
} from 'actions/app';

import {
  GET_HEROS_SEARCH_START,
  GET_HEROS_SEARCH_ERROR,
  GET_HEROS_SEARCH_SUCCESS,
} from 'actions/appBarSearch';

import {
  GET_COMIC_START,
  GET_COMIC_ERROR,
  GET_COMIC_SUCCESS,
  SHOW_MODAL,
  HIDE_MODAL
} from 'actions/appModalData';

const initialState = Map({
  asyncLoading: false,
  asyncError: null,
  asyncData: [],
  asyncSearchLoading: false,
  asyncSearchError: null,
  asyncSearchData: [],
  asyncComicLoading:false,
  asyncComicError:null,
  asyncComicData:[],
  modal: false,
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
});

const actionsMap = {

  // Async action
  [GET_HEROS_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [GET_HEROS_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_HEROS_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncData: action.data,
    });
  },
  [GET_HEROS_SEARCH_START]: (state) => {
    return state.merge({
      asyncSearchLoading: true,
      asyncSearchError: null,
    });
  },
  [GET_HEROS_SEARCH_ERROR]: (state, action) => {
    return state.merge({
      asyncSearchLoading: false,
      asyncSearchError: action.data,
    });
  },
  [GET_HEROS_SEARCH_SUCCESS]: (state, action) => {
    return state.merge({
      asyncSearchLoading: false,
      asyncSearchData: action.data,
    });
  },
  [GET_COMIC_START]: (state) => {
    return state.merge({
      asyncComicLoading: true,
      asyncComicError: null,
    });
  },
  [GET_COMIC_ERROR]: (state, action) => {
    return state.merge({
      asyncComicLoading: false,
      asyncComicError: action.data,
    });
  },
  [GET_COMIC_SUCCESS]: (state, action) => {
    return state.merge({
      asyncComicLoading: false,
      asyncComicData: action.data,
    });
  },
  [SAVE_FAVORITE]: (state, action) => {
    localStorage.setItem("favorites", JSON.stringify([...state.get("favorites"), action.comic]))
    return state.merge({
      favorites: [...state.get("favorites"), action.comic]
    })
  },
  [SLICE_FAVORITE]: (state, action) => {
    localStorage.setItem("favorites",
     JSON.stringify(state.get("favorites").filter(item => item.get("id") !== action.comic.get("id"))))
    return state.merge({
      favorites: [...state.get("favorites"), action.comic]
    })
  },
  [SHOW_MODAL]: (state, action) => {
    return state.merge({
      modal: true
    })
  },
  [HIDE_MODAL]: (state, action) => {
    return state.merge({
      modal: false
    })
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}