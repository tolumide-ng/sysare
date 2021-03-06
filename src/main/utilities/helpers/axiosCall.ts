import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from "axios";
import { ForAxiosDefs } from "../../types";

interface AxiosProps {
    path: string;
    payload: {};
    contentType?: string;
    params?: {};
    method: ForAxiosDefs;
}

interface Config extends AxiosRequestConfig {
    contentType?: string;
    data: {};
    json: boolean;
}

interface ReturnAxiosDef extends AxiosResponse {
    data: any;
}

function LocalErrorHandler(message: string | {}) {
    return message;
}

export const axiosCall = async (props: AxiosProps) => {
    const headers: AxiosRequestHeaders = {
        "Content-Type": props.contentType || "application/json",
    };

    const url = `${process.env.BASE_URL}${props.path}`;

    console.log("the url>>>>>>>>>>>>>", url);

    const axiosData: Config = {
        method: props.method,
        data: props.payload,
        params: props.params ?? {},
        json: true,
        url,
        headers,
        // withCredentials: false,
    };

    try {
        const response = await axios(axiosData);
        return response;
    } catch (err) {
        const error = err as Error | AxiosError;
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errResponse = error.response.data;

                throw LocalErrorHandler(errResponse);
            }
        }
        // throw LocalErrorHandler(err.);
    }
};
