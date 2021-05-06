import { applyMiddleware, compose, createStore, Reducer, Store } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import { browserHistory } from 'react-router';
import makeRootReducer from './reducers';
// import { updateLocation } from './location';
export interface StoreSchema {
  sandbox?: any;
}

export interface StarlingStore extends Store<StoreSchema> {
  asyncReducers: Record<string, Reducer<StoreSchema>>;
}
export default (initialState = {}, history?: any) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, routerMiddleware(history)];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers: Array<Function> = [];

  let composeEnhancers = compose;

  if (process.env.__DEV__) {
    const composeWithDevToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const initialStore: Store<StoreSchema> = createStore<StoreSchema>(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  const store: StarlingStore = { ...initialStore, asyncReducers: {}};
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // (store as any).unsubscribeHistory = browserHistory.listen(updateLocation(store));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};
