
import { ReactNode, useContext, useReducer } from "react";
import { ActionMap, Reducer, combineReducersType, State } from "../types";
import { createContext } from 'react';


const initialState: State = {
    user: null,
    menu: {
        MENU_NAV: false,
        MENU_TODO: false,
        MENU_COMMENT: false,
        MENU_SEARCH: false
    }
}

const userReducer: Reducer<State, ActionMap> = ( state, action ) => {
    switch(action.type) {
        case "USER_LOGGED_IN": 
        return action.payload 
        case "USER_LOGGED_OUT": 
        return null
        default: return state
    }
}

const menuReducer: Reducer<State, ActionMap> = ( state, action ) => {
    state[action.type] = !action.payload
    return state
}

const combineReducers: combineReducersType<State, ActionMap> = (reducers) => (state, action) =>
  Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action),
    }),
    state
);

export const Context = createContext({ state: initialState, dispatch: ({ type, payload } : ActionMap) => {} }) 

export function GlobalState({ children } : { children: ReactNode }) {
    const [ state, dispatch ] = useReducer( combineReducers({ 
        user: userReducer, menu: menuReducer 
    }), initialState );

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalState = () => {
    return useContext(Context)
}
