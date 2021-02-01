// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import PersonalAccessRoute from './PersonalAccess';
import OAuthRoute from './OAuth';
import SandboxRoute from './Sandbox';
import { Store } from "redux";
import { StoreSchema } from "../store/createStore";

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store: Store<StoreSchema>) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    PersonalAccessRoute(store),
    OAuthRoute(store),
    SandboxRoute(store)
  ]
});

export default createRoutes;
