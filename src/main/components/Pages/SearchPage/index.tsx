import * as React from "react";
import { useParams } from "react-router";
import { useSearch } from "./index.hook";
import "./index.css";

export const Search = () => {
    const {search} = useParams();
    const {} = useSearch();
    console.log("the search params");
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
            </article>
        </article>
    );
};
