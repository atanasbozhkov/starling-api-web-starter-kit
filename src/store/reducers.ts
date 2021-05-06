import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import locationReducer from './location';
import { reducer as formReducer } from 'redux-form';
import { StarlingStore, StoreSchema } from "./createStore";

export const makeRootReducer = (asyncReducers?: ReducersMapObject) => {
  return combineReducers<StoreSchema>({
    form: formReducer,
    location: locationReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store: StarlingStore, { key, reducer }: {key: string, reducer: Reducer<StoreSchema>}) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
