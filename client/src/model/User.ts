import { types } from "mobx-state-tree";

export const User = types.model({
  firstName: "",
  lastName: "",
  email: "",
});
