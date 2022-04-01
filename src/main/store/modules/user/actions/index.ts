import { IUser } from "../../../../types";
import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { IStoreActionProps, AppThunk } from "../../types";
import {
    FETCH_USER_FAILURE,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
} from "../actionTypes";

export const fetchUserPending = () => ({
    type: FETCH_USER_PENDING,
    payload: {
        status: "loading",
        error: null,
        result: null,
    },
});

export const fetchUserFailure = (error: string) => ({
    type: FETCH_USER_FAILURE,
    payload: {
        status: "failure",
        error,
        result: null,
    },
});

export const fetchUserSuccess = (result: IUser) => ({
    type: FETCH_USER_SUCCESS,
    payload: {
        status: "success",
        error: null,
        result,
    },
});

export const fetchUserAction =
    (props: IStoreActionProps): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchUserPending());
            const response = await axiosCall(props);
            dispatch(fetchUserSuccess(response?.data));
        } catch (err) {
            dispatch(fetchUserFailure(err as unknown as string));
        }
    };
