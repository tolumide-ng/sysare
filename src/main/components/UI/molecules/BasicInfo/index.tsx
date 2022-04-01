import React from "react";

import style from "./index.module.css";
import {
    formatLoginStatus,
    isOnline,
    lastSeen,
} from "../../../../utilities/common";

interface IProps {
    name: string;
    status: string;
    lastLogin: string;
}

const Component = (props: IProps) => {
    return (
        <div className={style.biInfo}>
            <p className={style.biUser}>{props.name}</p>
            <div className={style.biDetail}>
                <div
                    className={
                        isOnline(props.status)
                            ? style.biOnline
                            : style.biOffline
                    }
                >
                    {formatLoginStatus(props.status)}
                </div>
                <p className={style.biTime}>{lastSeen(props.lastLogin)}</p>
            </div>
        </div>
    );
};

export const BasicInfo = React.memo(Component);
