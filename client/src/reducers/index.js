import { combineReducers } from "redux";
import posts from "./posts";
import users from "./users";
import txs from "./tx";

export default combineReducers({
  posts,
  users,
  txs,
});
