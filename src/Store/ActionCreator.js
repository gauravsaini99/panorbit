import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const fetchData = () => {
  return (dispatch) => {
    axios.get('https://panorbit.in/api/users.json').then(response => {
      const usersdata = response.data.users;
      dispatch(fetchDataSuccess(usersdata));
    }).catch(error => {
      dispatch(fetchDataError(error.message));
    })
  }
}

export const fetchDataSuccess = (usersdata) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCEEDED,
    payload: usersdata
  }
}

export const fetchDataError = (error) => {
  return {
    type: actionTypes.FETCH_DATA_ERRORED,
    payload: error
  }
}

export const clearState = () => {
  return {
      type: actionTypes.CLEAR_STATE
  }
}

export const changePage = (id) => {
  console.log('%cActionCreator.js line:36 id in actions', 'color: #007acc;');
  return {
    type: actionTypes.PAGE_CHANGE,
    payload: id
  }
}