import notesReducer from "./notes";
import { combineReducers } from "redux"

const rootReducers = combineReducers({ notes: notesReducer });

export default rootReducers;