import * as React from "react";
import { Link } from "react-router-dom";
import { LoadImg } from "../../atoms/LoadImg";
import { BasicInfo } from "../../molecules/BasicInfo";
import style from "./index.module.css";

interface IProps {
    image?: string;
    comment?: string;
    status: string;
    name: string;
    lastLogin: string;
    isPlus: boolean;
    id: number;
}

export const BasicUser = (props: IProps) => {
    return (
        <Link to={`/user/${props.id}`} className={style.bUser}>
            <figure className={""}>
                <LoadImg
                    loadImg={props.image ?? ""}
                    loadAlt={`${props.name}'s profile picture`}
                    loadClass={style.bUserImg}
                />

                <figcaption className={style.bUserCaption}>
                    <BasicInfo
                        name={props.name}
                        status={props.status}
                        lastLogin={props.lastLogin}
                    />
                </figcaption>
            </figure>
        </Link>
    );
};
