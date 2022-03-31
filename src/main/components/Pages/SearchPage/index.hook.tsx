import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../../hooks/useFetch";
import { fetchSearchAction } from "../../../store/modules/search/actions";

export const useSearch = () => {
    const dispatch = useDispatch();
    const searchSelector = useSelector((state: RootState))
    const [appState, setAppState] = React.useState({
        searchText: "",
        status: "",
        result: [],
    });


    const getSearch = async (text: string) => {
        setAppState(state => ({...state, status: "loading", result: [] }));
        useFetch({
            dispatch,
            request: fetchSearchAction,
            method: "GET",
            path: "",
            payload: {},
        });
    }

    const getMoreSearch = async () => {
        setAppState(state => ({...state, status: "loading" }));
    }

    useEffect(() => {}, [])


    return {
        appState,
        getSearch,
        getMoreSearch,
    }
}