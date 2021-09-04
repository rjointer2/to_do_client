
import { useReducer } from "react";
import { Action, InitialStateInterface, MenuAction, MenuState, NewState, Reducer, ReducerMapState } from "../stateTypes";



























/**
* Takes a object with reducers as the value and the object the key and combines the reducer's into one state object.
* we set name of the function as a key and then set the reducer function as a
*/


/* function combineReducer<S>( reducers: ReducerMapState<S>): Reducer<NewState<S>> {
    return( state = {} as S, action ) => {
        const newState = {} as NewState<S>
        for(let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState 
    }
} 


const InitialState: InitialStateInterface = { 
    user: {
        data: null
    },
    menu: {
        NAV_MENU: false, 
        TODO_MENU: false, 
        SEARCH_MENU: false, 
        COMMENT_MENU: false
    }
};

const menuReducer: Reducer<MenuState, Action<MenuAction, any>> = ( state = InitialState.user, action ): NewState<MenuState> => {
    if(action.) {
        
    }
    return state
}
 */
/* const menuReducer: Reducer<InitialMenuStateInterface, Action<MenuAction, any>> = ( state = InitialState.menu, action:  ): NewState<InitialMenuStateInterface> => {
    if(action.type) {
        for(let values in state) if(values === action.type) state[values] = !state[values]
        return state;
    }
    return state;
} */
/* 
const useGlobalState = (): ContextInterface => {
    const [ state, dispatch ] = useReducer( combineReducer({
   
    }), InitialState );
    return { state, dispatch }
}


 */


/* const menuReducer: Reducer<InitialMenuStateInterface, MenuAction> = ( state = InitialState.menu, action: MenuAction ): NewState<InitialMenuStateInterface> => {
    if(action.type) {
        for(let values in state) if(values === action.type) state[values] = !state[values]
        return state;
    }
    return state;
}



const useGlobalState = (): ContextInterface => {
    const [ state, dispatch ] = useReducer( combineReducer({
        menu: menuReducer
    }), InitialState );
    return { state, dispatch }
}
 */
export default useGlobalState













/* 
import { InitialMenuStateInterface, InitialUserStateInterface, UserAction, MenuAction, InitialStateInterface } from "../types";

const InitialState: InitialStateInterface = { 
    user: {
        data: null
    },
    menu: {
        NAV_MENU: false, 
        TODO_MENU: false, 
        SEARCH_MENU: false, 
        COMMENT_MENU: false
    }

};

export const NAV_MENU = "NAV_MENU";
export const TODO_MENU = "TODO_MENU";
export const SEARCH_MENU = "SEARCH_MENU"; 
export const COMMENT_MENU = "COMMENT_MENU";


const menuReducer = ( 
    state: InitialMenuStateInterface = { 
        NAV_MENU: false, 
        TODO_MENU: false, 
        SEARCH_MENU: false, 
        COMMENT_MENU: false  }, 
        action: MenuAction ): InitialMenuStateInterface => {
    if(action.type) {
        for(let values in state) {
            if(values === action.type) state[values] = !state[values]
        }
        return state
    }
    return state
}   

const userReducer = (
    state: InitialUserStateInterface = {
        data: null
    },
    action: UserAction
): InitialUserStateInterface  => {
    if(action.type === "USER_LOGGED_IN") return { data: action.payload };
    if(action.type === "USER_LOGGED_OUT") return { data: null };
    return state
} */
