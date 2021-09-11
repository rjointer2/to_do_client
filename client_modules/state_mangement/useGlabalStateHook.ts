
import { useReducer } from "react";

import { ActionPayloadData, ActionsTypes, Reducer, State } from "../type"

const initialState: State = {
    user: {
        user_data: null
    },
    menu: {
        menu_nav: false,
        menu_todo: false,
        menu_comemnt: false,
        menu_search: false
    }
}

const userReducer: Reducer<State, ActionPayloadData> = ( state, action ) => {
    switch(action.type) {
        case ActionsTypes.MENU_COMMENT: 
        return {
            ...state,
            
        }
        default: return state
    }
}

const menuReducer: Reducer<State, ActionPayloadData> = ( state, action ) => {
    for( let key in state.menu ) {
        if( key === action.type ) state.menu[key] = !state.menu[key]
    }
    return state
}

type reduceReducers<S, A> = (
    reducers: { [P in keyof State]: Reducer<S, A> }
) => Reducer<S, A>;

const combineReducers: reduceReducers<State, ActionPayloadData> = (slices) => (state, action) =>
  Object.keys(slices).reduce( // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );


export const useGlobalState = () => {
    const [ state, dispatch ] = useReducer( combineReducers({ 
        user: userReducer, menu: menuReducer 
    }), initialState );

    return { state, dispatch }
}
