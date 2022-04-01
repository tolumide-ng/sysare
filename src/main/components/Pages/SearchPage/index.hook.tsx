import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { fetchSearchAction } from "../../../store/modules/search/actions";
import { IRootState } from "../../../store/modules/types";
import { IUserSummary, TStatus } from "../../../types";

interface IStateProps {
    status: TStatus;
    result: ReadonlyArray<IUserSummary> | [];
}

export const useSearch = () => {
    // dispatch for redux
    const dispatch = useDispatch();
    //  intersection observer hook
    const { createScrollObserver, converge, setConverge } =
        useIntersectionObserver();
    // search selector state on redux
    const searchSelector = useSelector(
        (state: IRootState) => state.fetchSearchReducer
    );
    // local application state
    const [appState, setAppState] = React.useState<IStateProps>({
        status: "rest",
        result: [],
    });
    // to acknowledge if the interesection observer is still needed
    const [stopFetching, setStopFetching] = React.useState(false);

    React.useEffect(() => {
        if (searchSelector.status === "loadmore") {
            return;
        }

        let result: Array<IUserSummary> = [];

        if (searchSelector.result?.items) {
            result = [...searchSelector.result.items];
        }
        setAppState((state) => ({
            ...state,
            status: searchSelector.status,
            result,
        }));

        if (
            searchSelector.status === "success" &&
            searchSelector.result?.items?.length ===
                searchSelector.result?.total
        ) {
            scrollObserver.current.disconnect();
            setStopFetching(true);
        }

        if (loadRef.current) {
            scrollObserver.current.observe(loadRef.current);
        }
    }, [searchSelector.status]);

    const loadRef = React.useRef<HTMLDivElement>(null);
    const scrollObserver = React.useRef(createScrollObserver());

    React.useEffect(() => {
        if (converge) {
            setConverge(false);
            if (!stopFetching && appState.result.length) {
                getSearch();
            }
        }
    }, [converge]);

    const getSearch = async () => {
        setAppState((state) => ({ ...state, status: "loading" }));
        const params: Record<string, number | string> = { length: 30 };

        if (appState.result.length) {
            params["cursor"] = searchSelector.result?.cursors?.after ?? "";
        }

        dispatch(
            fetchSearchAction(
                {
                    method: "GET",
                    path: "/search",
                    payload: {},
                    params,
                },
                appState.result
            )
        );
    };

    return {
        appState,
        getSearch,
        stopFetching,
        loadRef,
    };
};
