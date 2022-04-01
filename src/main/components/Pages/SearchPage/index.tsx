import * as React from "react";
import { useParams } from "react-router";
import { useSearch } from "./index.hook";
import style from "./index.module.css";

export const Search = () => {
    const { search } = useParams();
    const {getSearch, appState} = useSearch();

    React.useMemo(() => {
        getSearch();
    }, [search]);


    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                tolumide
            </article>
        </article>
    );
};
