import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import style from "./index.module.css";
dayjs.extend(relativeTime);

interface IProps {
    name: string;
    status: string;
    lastLogin: string;
}

const Component = (props: IProps) => {
    console.log("mounted || rerendered?");

    const isOnline = React.useCallback(
        () => props.status.toLocaleLowerCase() === "online",
        []
    );

    const userStatus = React.useCallback(() => {
        // sometimes the value of status is neither online nor offline, there are scenarios where the value is `date`
        let value = props.status.toLowerCase();
        if (!["online", "offline"].includes(props.status.toLowerCase())) {
            value = "offline";
        }
        return `${value[0].toUpperCase()}${value.slice(1)}`;
    }, []);

    return (
        <div className={style.biInfo}>
            <p className={style.biUser}>{props.name}</p>
            <div className={style.biDetail}>
                <div className={isOnline() ? style.biOnline : style.biOffline}>
                    {userStatus()}
                </div>
                <p className={style.biTime}>
                    {dayjs(props.lastLogin).fromNow()}
                </p>
            </div>
        </div>
    );
};

export const BasicInfo = React.memo(Component);
