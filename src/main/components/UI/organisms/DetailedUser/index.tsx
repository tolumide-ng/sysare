import * as React from "react";
import { ILocation } from "../../../../types";
import { lastSeen } from "../../../../utilities/common";
import { LoadImg } from "../../atoms/LoadImg";
import style from "./index.module.css";

interface IProps {
    id: number;
    lastLogin: string;
    name: string;
    picture?: {
        comment: string;
        url: string;
    };
    onlineStatus: string;
    age: number;
    location: ILocation;
    headline: string;
}

export const DetailedUser = (props: IProps) => {
    const {
        name,
        picture,
        age,
        location: { area = "", city = "", country = "", distance = "" },
        lastLogin,
        headline,
    } = props;
    return (
        <article className={style.du}>
            <figure className={style.duFig}>
                <LoadImg
                    loadImg={picture?.url ?? ""}
                    loadAlt={`${name}'s picture on the profile page`}
                    loadClass={style.duImg}
                />
                <figcaption className={style.duFigCap}>
                    <div className={style.duFigCapName}>{props.name}</div>
                    <div className={style.duFigCapAge}>
                        Age: {props.age} years
                    </div>
                    <div
                        className={style.duFigCapAddress}
                    >{`${area} ${city}, ${country}`}</div>
                    <div className={style.duFigCapTime}>{`last seen ${lastSeen(
                        lastLogin
                    )}`}</div>
                    <div
                        className={style.duFigCapDistance}
                    >{`${distance} miles away`}</div>
                    <div className={style.duFigCapHeadline}>{headline}</div>
                </figcaption>
            </figure>
        </article>
    );
};
