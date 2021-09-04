
type NAV_MENU = "NAV_MENY"
type TODO_MENU = "TODO_MENU"
type COMMENT_MENU = "COMMENT_MENU"
type SEARCH_MENU = "SEARCH_MENU"

type USER_IS_LOGGED_IN = { readonly type: "USER_IS_LOGGED_IN" };
type USER_NOT_LOGGED_OUT = { readonly type: "USER_NOT_LOGGED_OUT" };

export type MenuAction = NAV_MENU | TODO_MENU | COMMENT_MENU | SEARCH_MENU
export type UserAction = USER_IS_LOGGED_IN| USER_NOT_LOGGED_OUT

export interface MenuState {
    SEARCH_MENU: boolean;
    TODO_MENU: boolean;
    COMMENT_MENU: boolean;
    NAV_MENU: boolean;
}

export type UserState = {
  user: any
}

export interface InitialStateInterface {
  user: any | null
  menu: MenuState
}


// styled componenets interfaces and types

export type Props = {
  readonly isOpen: boolean;
}


/**
* Base type for state created from combined reducer
* This is unquie should this state doesn't match any objects
* 
* this is just to be seen different from plain js objecs
* We infer this as state
*/

declare const __NewState: unique symbol;

// do not use the new state as a prop ever, this is help define
// the difference of state versus regular objects
interface EmptyState {
  readonly [__NewState]?: undefined;
  [extraProps: string]: any
}


/**
* Actions are strings 
* @template T represents the type from the action to dispatch
* @template P represents the payload from the educer specifed
*/

export interface Action<T> {
  type: T
  payload?: any
}


export type NewState<S> = EmptyState & S;

/* Reducer Definitions */

/**
* reducers take 2 args templates
* @template S the state read
* @template A the action to specifed the state return 
*/


export interface Reducer<S, A> {
  ( state: S, action: A  ): S; 
  
}

export type ReducersMapObject<S, Action> = {
  [K in keyof S]: Reducer<S[K], Action>
}

type ReducerTree<S, A> = {
  // key in state and return a reducer
  [K in keyof S]: Reducer<S, A>
}

export type combineReducerFunc<S, A> = ( reducers: ReducerTree<NewState<S>, Action<A>> ) => Reducer<NewState<S>, Action<A>> 

const combineReducer: combineReducerFunc<UserState, UserAction> = ( reducers ) => {
  return ( state, action ) => {
    const newState = {} as NewState<NewState<UserState>>
    for(let key in reducers) {
      newState[key] = reducers[key](state[key], action) // Type 'number' cannot be used to index type 'NewState<S>'
    }
    return state
  }
}


const userReducer: Reducer<NewState<UserState>, Action<UserAction>> = (state) => {
  return state
}

combineReducer({ user: userReducer })


