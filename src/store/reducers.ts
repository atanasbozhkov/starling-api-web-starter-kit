import { combineReducers, ReducersMapObject, Store } from 'redux';
import locationReducer from './location';
import { reducer as formReducer } from 'redux-form';
import { StoreSchema } from "./createStore";

export const makeRootReducer = (asyncReducers?: ReducersMapObject) => {
  return combineReducers({
    form: formReducer,
    location: locationReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store: Store<StoreSchema>, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
