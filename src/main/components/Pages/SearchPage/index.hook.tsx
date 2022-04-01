import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../../hooks/useFetch";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { fetchSearchAction } from "../../../store/modules/search/actions";
import { IRootState } from "../../../store/modules/types";
import { IUserSummary, TStatus } from "../../../types";

interface IStateProps {
    status: TStatus;
    result: ReadonlyArray<IUserSummary> | [];
}

export const useSearch = () => {
    const dispatch = useDispatch();

    const { createScrollObserver, converge, setConverge } =
        useIntersectionObserver();

    const searchSelector = useSelector(
        (state: IRootState) => state.fetchSearchReducer
    );

    const [appState, setAppState] = React.useState<IStateProps>({
        status: "rest",
        result: [],
    });

    const [stopFetching, setStopFetching] = React.useState(false);

    React.useEffect(() => {
        setAppState((state) => ({
            ...state,
            status: searchSelector.status,
            result: searchSelector.result ? searchSelector.result.items : [],
        }));
    }, [searchSelector.status]);

    const loadRef = React.useRef<HTMLDivElement>(null);
    const scrollObserver = React.useRef(createScrollObserver());

    React.useEffect(() => {
        if (converge && !stopFetching && appState.result.length) {
            getSearch();
        }
    }, [converge]);

    const getSearch = async () => {
        setAppState((state) => ({ ...state, status: "loading" }));
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
    };

    return {
        appState,
        getSearch,
    };
};
