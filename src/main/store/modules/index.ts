import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchSearchReducer } from "./search/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchSearchReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
