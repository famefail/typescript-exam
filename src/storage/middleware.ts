import { Middleware } from 'redux';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('userData', JSON.stringify(store.getState().userData));
    return result;
};

export default localStorageMiddleware;
