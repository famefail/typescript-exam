// src/app/reducers.ts

import { combineReducers } from 'redux';
import userData from '../page/exam2/setUserData';

const rootReducer = combineReducers({
  userData: userData,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
