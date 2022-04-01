import * as React from "react";
import { useUser } from "./index.hook";

export const UserPage = () => {
    const { getUser, appState } = useUser();

    React.useMemo(() => {
        getUser();
    }, []);

    return <></>;
};
