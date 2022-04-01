import { ISearchUsers, TStatus } from "../../../types";
import {FETCH_SEARCH_PENDING, FETCH_SEARCH_FAILURE, FETCH_SEARCH_SUCCESS} from "./actionTypes";

export interface IFetchSearchState {
    readonly error: string | null;
    readonly status: TStatus;
    readonly result: ISearchUsers | null;
}

export interface IFetchSearchPendingAction {
    type: typeof FETCH_SEARCH_PENDING;
    payload: IFetchSearchState;
}

export interface IFetchSearchFailureAction {
    type: typeof FETCH_SEARCH_FAILURE;
    payload: IFetchSearchState;
}

export interface IFetchSearchSuccessAction {
    type: typeof FETCH_SEARCH_SUCCESS;
    payload: IFetchSearchState
}


export type TFetchSearch = IFetchSearchFailureAction | IFetchSearchPendingAction | IFetchSearchSuccessAction;