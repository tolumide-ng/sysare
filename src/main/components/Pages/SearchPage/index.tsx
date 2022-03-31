import * as React from "react";
import { useParams } from "react-router";
import { useSearch } from "./index.hook";
import style from "./index.module.css";

export const Search = () => {
    const {search} = useParams();
    const {} = useSearch();
    console.log("the search params");
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                tolumide
            </article>
        </article>
    );
};
