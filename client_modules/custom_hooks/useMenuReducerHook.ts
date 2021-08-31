import { InitialMenuStateInterface, MenuAction } from "../types";

export const initialMenuState = { NAV_MENU: false, TODO_MENU: false, SEARCH_MENU: false, COMMENT_MENU: false };

export const NAV_MENU = "NAV_MENU";
export const TODO_MENU = "TODO_MENU";
export const SEARCH_MENU = "SEARCH_MENU"; 
export const COMMENT_MENU = "COMMENT_MENU";


export const useMenuReducerHook = ( state: InitialMenuStateInterface, action: MenuAction): InitialMenuStateInterface => {
    if(action.type) {
        for(let values in state) {
            if(values === action.type) state[values] = !state[values]
        }
        return state
    }
    return state

}   