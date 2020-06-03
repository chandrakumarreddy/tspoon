import { HEADER_HEIGHT } from "../types";

const initialState = { headerHeight: 0 };

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case HEADER_HEIGHT:
      return { ...state, headerHeight: action.height };
    default:
      return state;
  }
}
