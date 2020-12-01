import * as actionTypes from './ActionTypes';
import { REHYDRATE } from 'redux-persist'

const initialState = {
  loading: false,
  usersdata: [],
  error: '',
  currentPage: 0
}

const Reducer = (state = initialState, action) => {
  console.log('%cReducer.js line:10 action.payload', 'color: #007acc;', action.payload);
  switch(action.type) {
    case actionTypes.FETCH_DATA_SUCCEEDED: 
      return {
        ...state,
        loading: false,
        usersdata: action.payload,
        error: ''
      }

    case actionTypes.FETCH_DATA_ERRORED: 
      return {
        ...state,
        loading: false,
        usersdata: [],
        error: action.payload
      }

    case actionTypes.PAGE_CHANGE:
      return {
        ...state,
        currentPage: action.payload
      }

    default: return state; 
  }
}

export default Reducer;