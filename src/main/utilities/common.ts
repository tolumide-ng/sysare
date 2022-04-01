import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const isOnline = (status: string): boolean =>
    status.toLowerCase() === "online";

export const formatLoginStatus = (status: string): "Online" | "Offline" => {
    // sometimes the value of status is neither online nor offline, there are scenarios where the value is `date`
    let value = status.toLowerCase();
    if (value === "online") {
        return "Online";
    }
    return "Offline";
};

export const lastSeen = (date: string): string => dayjs(date).fromNow();
