export type ForAxiosDefs =
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;

export type TStatus = "rest" | "loading" | "failure" | "success";

export interface IUserSummary {
    id: string;
    is_plus: boolean;
    last_login: string; // top right (minutes/days/e.t.c ago)
    name: string; // right after the online status on (top left)
    online_status: string; // top left
    picture?: {
        comment: string; // right under the image
        url: string; // main item
    };
}

export interface ISearchUsers {
    cursor: {
        after: string;
    };
    total: number;
    items: ReadonlyArray<IUserSummary>;
}

export interface IUser {
    id: string;
    location: {
        name: string;
        distance: number;
    };
    headline: string;
    personal: {
        age: number;
        // ...
    };
    sexual: {
        anal_position: string;
    };
}
