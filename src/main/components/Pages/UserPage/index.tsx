import * as React from "react";
import { Link } from "react-router-dom";
import { DetailedUser } from "../../UI/organisms/DetailedUser";
import { useUser } from "./index.hook";
import style from "./index.module.css";

export const UserPage = () => {
    const { getUser, appState } = useUser();

    React.useMemo(() => {
        getUser();
    }, []);

    return (
        <article className={style.up}>
            <Link to={"/"} className={style.upBack}>
                Go back
            </Link>
            {appState.user && appState.summary ? (
                <>
                    <DetailedUser
                        id={appState.summary.id}
                        lastLogin={appState.summary.last_login}
                        name={appState.summary.name}
                        picture={appState.summary.picture}
                        onlineStatus={appState.summary.online_status}
                        age={appState.user.personal?.age}
                        location={appState.user.location}
                        headline={appState.user.headline}
                    />
                </>
            ) : (
                <></>
            )}
        </article>
    );
};
