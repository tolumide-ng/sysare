import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { TUserDict, IStoreActionProps, AppThunk } from "../../types";
import {
    FETCH_USER_FAILURE,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_UPDATE,
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

export const fetchUserSuccess = (result: TUserDict) => ({
    type: FETCH_USER_SUCCESS,
    payload: {
        status: "success",
        error: null,
        result,
    },
});

export const fetchUpdateUsers = (result: TUserDict) => ({
    type: FETCH_USER_UPDATE,
    payload: {
        status: "",
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

export const fetchUserUpdateAction =
    (props: IStoreActionProps, users: TUserDict, userId: string): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchUpdateUsers(users));
            const response = await axiosCall(props);
            const allUsers: TUserDict = {
                ...users,
                [userId]: response?.data,
            };
            dispatch(fetchUserSuccess(allUsers));
        } catch (error) {
            console.log("the error", error);
            dispatch(fetchUserFailure(error as unknown as string));
        }
    };
