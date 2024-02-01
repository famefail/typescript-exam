import { configureStore } from '@reduxjs/toolkit'
import userData, { IState } from '../page/exam2/setUserData'
import localStorageMiddleware from './middleware'
const userDataFromLocalStorage: IState[] = JSON.parse(localStorage.getItem('userData') || '[]');

const store = configureStore({
    reducer: userData,
    preloadedState: {
        userData: userDataFromLocalStorage,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

