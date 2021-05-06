// ------------------------------------
// Constants
// ------------------------------------
import { Action, AnyAction, Dispatch } from "redux";

export interface PayloadAction extends AnyAction {
  payload: any; // TODO: type this so that PayloadAction can be generic
}

export const LOCATION_CHANGE = "LOCATION_CHANGE";

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange(location = "/") {
  return {
    type: LOCATION_CHANGE,
    payload: location,
  };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }: { dispatch: Dispatch<any> }) => {
  return (nextLocation: string) => dispatch(locationChange(nextLocation));
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null;
export default function locationReducer(
  state = initialState,
  action: AnyAction
) {
  return action.type === LOCATION_CHANGE ? action.payload : state;
}
