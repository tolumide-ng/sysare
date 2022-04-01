import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../../hooks/useFetch";
import { fetchSearchAction } from "../../../store/modules/search/actions";
import { IRootState } from "../../../store/modules/types";
import { ISearchUsers, TStatus } from "../../../types";

interface IStateProps {
    searchText: string;
    status: TStatus;
    result: ISearchUsers | [];
    fetchMore: boolean;
}

export const useSearch = () => {
    const dispatch = useDispatch();
    const searchSelector = useSelector((state: IRootState) => state.fetchSearchReducer);
    const [appState, setAppState] = React.useState<IStateProps>({
        searchText: "",
        status: "rest",
        result: [],
        fetchMore: false,
    });


    const getSearch = async (text: string) => {
        setAppState(state => ({...state, status: "loading", result: [], fetchMore: false }));
        useFetch({
            dispatch,
            request: fetchSearchAction,
            method: "GET",
            path: "/search",
            payload: {},
            params: {
                length: 30,
            },
        });
    }

    const getMoreSearch = async () => {
        setAppState(state => ({...state, status: "loading", fetchMore: true }));

        useFetch({
            dispatch,
            request: fetchSearchAction,
            method: "GET",
            path: "/search",
            payload: {},
        });
    }

    useEffect(() => {
        if(appState.result) {
            setAppState(state => ({...state, status: searchSelector.status, result: searchSelector.result}));
        }
    }, [searchSelector.status]);


    return {
        appState,
        getSearch,
        getMoreSearch,
    }
}