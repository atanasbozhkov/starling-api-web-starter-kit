import { injectReducer } from '../../store/reducers';
import { StoreSchema } from "../../store/createStore";
import { Store } from "redux";

export default (store: Store<StoreSchema>) => ({
  getComponent (_nextState: StoreSchema, cb: Function) {
    require.ensure([], (require) => {
      const HomeContainer = require('./containers/HomeContainer').default;

      const reducer = require('./modules/home').default;
      injectReducer(store, { key: 'home', reducer });

      cb(null, HomeContainer);
    }, 'home');
  }
});
