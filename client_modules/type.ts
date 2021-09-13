
// State Defs

export type State = {
    [index: string]: any
    menu: {
        [index: string]: any
        MENU_NAV: boolean,
        MENU_TODO: boolean,
        MENU_COMMENT: boolean,
        MENU_SEARCH: boolean
    }
    user: {
        user_data: any | null
    }
}

// Action Defs

export type ActionTypes = {

    // MENU TYPES
    MENU_SEARCH: boolean,
    MENU_NAV: boolean,
    MENU_COMMENT: boolean,
    MENU_TODO: boolean,

    // USER TYPES
    USER_LOGGED_IN: null,
    USER_LOGGED_OUT: any,
}

export type ActionMap = {
    type: keyof ActionTypes
    payload?: any
};


/**
 * @name ActionPayloadData
 * @description Type def for action payloads
 */



// Reducers

export type Reducer<S, A> = (state: S, action: A) => S;

