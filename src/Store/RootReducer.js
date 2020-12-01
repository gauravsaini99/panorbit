import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2  from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Reducer from './Reducer';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import * as actionTypes from './ActionTypes';


const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 , // see "Merge Process" section for details.
  whiteList: ['data']
};

const appReducer = combineReducers({data: Reducer});

const RootReducer = (state, action) => {
  if(action.type === actionTypes.CLEAR_STATE) {
    storage.removeItem('persist:root');
    state = undefined
  }
  return appReducer(state, action);
}

const pReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(pReducer, undefined, composeWithDevTools(applyMiddleware(logger, thunk)));
export const persistor = persistStore(store);

