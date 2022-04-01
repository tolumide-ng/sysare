import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchSearchReducer } from "./search/reducer";
import { fetchUserReducer } from "./user/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchSearchReducer,
    fetchUserReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
