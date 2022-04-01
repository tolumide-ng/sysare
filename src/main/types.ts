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

export type TStatus = "rest" | "loading" | "failure" | "success" | "loadmore";

export interface IUserSummary {
    id: number;
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
    cursors: {
        after: string;
    };
    total: number;
    items: ReadonlyArray<IUserSummary>;
}

export interface ILocation {
    name: string;
    distance: number;
    area: string;
    city: string;
    country: string;
}

export interface IPersonality {
    age: number;
    body_hair: string;
    body_type: string;
    ethnicity: string;
    eye_color: string;
    height: {
        cm: number;
    };
    relationship: string;
    smoker: string;
    weight: {
        kg: number;
    };
}

export interface ISexual {
    anal_position: string;
    safer_sex: string;
    sm: string;
}

export interface IUser {
    id: string;
    is_plus: boolean;
    location: ILocation;
    headline: string;
    personal: IPersonality;
    sexual: ISexual;
}
