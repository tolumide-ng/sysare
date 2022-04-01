import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, IStoreActionProps } from "../../types";
import {
    FETCH_SEARCH_FAILURE,
    FETCH_SEARCH_PENDING,
    FETCH_SEARCH_SUCCESS,
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

export const fetchSearchSuccess = (result: []) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: {
        status: "success",
        error: null,
        result,
    },
});

export const fetchSearchAction =
    (props: IStoreActionProps): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchSearchPending());
            const response = await axiosCall(props);
            dispatch(fetchSearchSuccess(response?.data));
        } catch (error) {
            console.log("THE ERROR RESPONSE >>>>>>>>>>>>>>", error);
            dispatch(fetchSearchFailure(error as unknown as string));
        }
    };
