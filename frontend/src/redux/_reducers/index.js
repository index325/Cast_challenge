import { combineReducers } from "redux";

import info from "./info";
import security from "./security";
import course from "./course";

const rootReducer = combineReducers({
  info,
  security,
  course,
});

export default rootReducer;
