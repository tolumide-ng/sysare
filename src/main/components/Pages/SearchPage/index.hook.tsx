import React from "react";
import { useDispatch } from "react-redux";

export const useSearch = () => {
    const [appState, setAppState] = React.useState({
        searchText: '',
    });

    const dispatch = useDispatch();

    const fetchSearch = async (text: string) => {}


    return {
        appState,
    }
}