import actionTypes from "../actionTypes";
import { userResult as initialState } from "../index";
import { IFetchUserState, TFetchUser } from "../types";

const fetchUserTypes = [...actionTypes];

export const fetchUserReducer = (
    state = initialState,
    props: TFetchUser
): IFetchUserState =>
    fetchUserTypes.includes(props.type)
        ? { ...state, ...props.payload }
        : state;
