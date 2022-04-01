import { IUser, TStatus } from "../../../types";
import {
    FETCH_USER_FAILURE,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
} from "./actionTypes";

export interface IFetchUserState {
    readonly error: string | null;
    readonly status: TStatus;
    readonly result: Record<string, IUser> | null; // we would be caching a profile if it has been fetched earlier and the page has not been refreshed
}

export interface IFetchUserPendingAction {
    type: typeof FETCH_USER_PENDING;
    payload: IFetchUserState;
}

export interface IFetchUserFailureAction {
    type: typeof FETCH_USER_FAILURE;
    payload: IFetchUserState;
}

export interface IFetchUserSuccessAction {
    type: typeof FETCH_USER_SUCCESS;
    payload: IFetchUserState;
}

export type TFetchUser =
    | IFetchUserFailureAction
    | IFetchUserPendingAction
    | IFetchUserSuccessAction;
