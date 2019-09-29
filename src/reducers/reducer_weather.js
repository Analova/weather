import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  if (action.error) {
    alert("City not found! Check city spelling.");
    return state;
  }
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}
