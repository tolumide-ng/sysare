import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { IRootState, TUserDict } from "../../../store/modules/types";
import { fetchUserAction } from "../../../store/modules/user/actions";
import { IUser, IUserSummary, TStatus } from "../../../types";

interface IStateProps {
    status: TStatus;
    user: IUser | null;
    summary: IUserSummary | null;
}

export const useUser = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const profileSelector = useSelector(
        (state: IRootState) => state.fetchUserReducer
    );

    const searchSelector = useSelector(
        (state: IRootState) => state.fetchSearchReducer
    );

    const [appState, setAppState] = React.useState<IStateProps>({
        status: "rest",
        user: null,
        summary: null,
    });

    const getUser = () => {
        if (id) {
            setAppState((state) => ({ ...state, status: "loading" }));
            dispatch(
                fetchUserAction({
                    method: "GET",
                    path: "/profiles",
                    payload: {},
                    params: { ids: id },
                })
            );
        }
    };

    React.useEffect(() => {
        let summary: IUserSummary | null = null;

        if (profileSelector.status === "success") {
            summary =
                searchSelector.result?.items.find((user) => user.id === id) ??
                null;
        }

        setAppState((state) => ({
            ...state,
            status: profileSelector.status,
            user: profileSelector.result,
            summary,
        }));
    }, [profileSelector.status]);

    return {
        appState,
        getUser,
    };
};
