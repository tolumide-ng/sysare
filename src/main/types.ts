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
    last_login: string;
    name: string;
    online_status: string;
    picture: {
        comment: string;
        url: string;
    };
}

export interface ISearchUsers {
    cursor: {
        after: string;
    };
    total: number;
    items: ReadonlyArray<IUserSummary>
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