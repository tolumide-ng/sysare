import * as React from "react";
import { useParams } from "react-router";
import { BasicUser } from "../../UI/organisms/BasicUser";
import { useSearch } from "./index.hook";
import style from "./index.module.css";

export const Search = () => {
    const { getSearch, appState } = useSearch();

    React.useMemo(() => {
        getSearch();
    }, []);

    return (
        <article className={style.home}>
            <article className={style.homeCont}>
                {appState.result?.map(
                    ({
                        id,
                        is_plus,
                        last_login,
                        name,
                        online_status,
                        picture,
                    }) => (
                        <BasicUser
                            key={id}
                            image={picture?.url}
                            comment={picture?.comment}
                            status={online_status}
                            lastLogin={last_login}
                            id={id}
                            name={name}
                            isPlus={is_plus}
                        />
                    )
                )}
            </article>
        </article>
    );
};
