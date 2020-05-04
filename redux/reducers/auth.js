import { AUTHENTICATE } from "../types";

export default function auth(
  state = { user: null, loggedIn: false },
  { type, user }
) {
  switch (type) {
    case AUTHENTICATE:
      return { ...state, loggedIn: !!user, user };
    default:
      return state;
  }
}
