import { AUTHENTICATE } from "../types";

export const reauthenticate = (user) => {
  return { type: AUTHENTICATE, user };
};
