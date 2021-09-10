
// State Defs

export type State = {
    [index: string]: any
    menu: {
        [index: string]: any
        menu_nav: boolean,
        menu_todo: boolean,
        menu_comemnt: boolean,
        menu_search: boolean
    }
    user: {
        user_data: any | null
    }
}

// Action Defs

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        };
  };

export enum ActionsTypes {

    // MENU TYPES
    MENU_SEARCH = `MENU_SEARCH`,
    MENU_NAV = `MENU_NAV`,
    MENU_COMMENT = `MENU_COMMENT`,
    MENU_TODO = `MENU_TODO`,

    // USER TYPES
    USER_LOGGED_IN = `USER_LOGGED_IN`,
    USER_LOGGED_OUT = `USER_LOGGED_OUT`,
}

/**
 * @name ActionPayload
 * @description Type def for action payloads
 */

type ActionPayload = {
    [ActionsTypes.MENU_COMMENT]: {
        menu_comment: boolean
    }
    [ActionsTypes.MENU_NAV]: {
        menu_nav: boolean
    }
    [ActionsTypes.MENU_SEARCH]: {
        menu_search: boolean
    }
    [ActionsTypes.MENU_TODO]: {
        menu_to: boolean
    }
    [ActionsTypes.USER_LOGGED_IN]: {
        data: any
    }
    [ActionsTypes.USER_LOGGED_OUT]: {
        data: null
    }
}

/**
 * @name ActionPayloadData
 * @description Type def for action payloads
 */

export type ActionPayloadData = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];


// Reducers

export type Reducer<S, A> = (state: S, action: A) => S;




























/* 
type A<T> =  T extends Array<infer Mem> ? Mem : T

type test = A<string[]>
type test1 = A<State>



type State = {
    user: null
    menu: "damn"
}

const ur: Reducer<State> = (s, a) => {


    return s
}

const mr: Reducer<State> = (s, a) => {
    return s
}

const he = () => {}




  
type Action = {
    type: string;
 };
  
type Reducer<S> = (state: S, action: Action) => S;
  

type reduceReducers<S> = (
    ...reducers: Reducer<S>[]
) => Reducer<S>;

const c: reduceReducers<State> = (...reducers) => (state, action) =>
reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

c(ur, mr) */