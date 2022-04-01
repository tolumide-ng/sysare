import actionTypes from "../actionTypes";
import { searchResult as initialState } from "../index";
import { IFetchSearchState, TFetchSearch } from "../types";


const fetchSearchTypes = [...actionTypes];

export const fetchSearchReducer = (state = initialState, props: TFetchSearch): 
    IFetchSearchState  => ( 
        fetchSearchTypes.includes(props.type) ? {...state, ...props.payload} : state 
);