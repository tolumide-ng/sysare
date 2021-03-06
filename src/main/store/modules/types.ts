import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateDef } from ".";
import { ForAxiosDefs, IUser } from "../../types";
import { IFetchSearchState } from "./search/types";
import { IFetchUserState } from "./user/types";

export interface IRootState {
    dropDownReducer: {
        display: boolean;
    };
    fetchSearchReducer: IFetchSearchState;
    fetchUserReducer: IFetchUserState;
}

export interface IStoreActionProps {
    path: string;
    payload: {};
    method: ForAxiosDefs;
    params?: {};
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateDef,
    unknown,
    Action<string>
>;

export type TUserDict = Record<string, IUser> | null;
