import { ForAxiosDefs } from "../types";
import { IStoreActionProps } from "../store/modules/types";

interface IProps {
    dispatch: any;
    request: (props: IStoreActionProps) => void;
    method: ForAxiosDefs;
    path: string;
    payload: {};
    params?: {};
};


export const useFetch = async (props: IProps) => {
    const {path, method, payload, params = {}, } = props;
    await props.dispatch(
        props.request({path, method, payload, params,})
    )
}