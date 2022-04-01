import { ISearchUsers, IUserSummary } from "../../../../types";
import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, IStoreActionProps } from "../../types";
import {
    FETCH_SEARCH_FAILURE,
    FETCH_SEARCH_PENDING,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_UPDATE,
} from "../actionTypes";

export const fetchSearchPending = () => ({
    type: FETCH_SEARCH_PENDING,
    payload: {
        status: "loading",
        error: null,
        result: [],
    },
});

export const fetchSearchFailure = (error: string) => ({
    type: FETCH_SEARCH_FAILURE,
    payload: {
        status: "failure",
        error,
        result: [],
    },
});

export const fetchSearchSuccess = (result: ISearchUsers) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: {
        status: "success",
        error: null,
        result,
    },
});

const fetchSearchUpdate = () => ({
    type: FETCH_SEARCH_UPDATE,
    payload: {
        // components MUST not dispatch this action directly, this is internal to state management for this module
        status: "loadmore",
        error: null,
        result: [],
    },
});

export const fetchSearchAction =
    (
        props: IStoreActionProps,
        result: ReadonlyArray<IUserSummary> | null
    ): AppThunk =>
    async (dispatch) => {
        try {
            if (result) {
                dispatch(fetchSearchUpdate());
            } else {
                dispatch(fetchSearchPending());
            }

            const response = await axiosCall(props);
            const data = response?.data as unknown as ISearchUsers;

            if (result) {
                data["items"] = [...result, ...data.items];
            }

            dispatch(fetchSearchSuccess(data));
        } catch (error) {
            dispatch(fetchSearchFailure(error as unknown as string));
        }
    };
