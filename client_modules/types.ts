
export type Props = { 
    [index:string]: any
    isOpen: boolean
    z_index: number
    background: string
    show: boolean
    height: string
}

export interface CreatedBy {
    id: string
    username: string
    picture: string
}

export interface Comment {
    id: string
    createdBy: CreatedBy
    comment: string
    createdAt: string

}

export interface LikedBy {
    id: string
    username: string
}

export interface Todo {
    id: string
    completed: boolean
    subject: string
    todo: string
    dueDate: string
    createdBy: CreatedBy
    likedBy: [LikedBy]
    comments: [Comment]
    didUserLike: boolean
    createdAt: string
}

export interface Me {
    me: User
}

export interface User {
    username: string
    id: string
    email: string
    todos: [Todo]
    loading: boolean
    picture: string
}

type BaseState = {
    [index: string]: any
    user: User | null
    menu: {
        MENU_NAV: boolean
        MENU_TODO: boolean
        MENU_COMMENT: boolean
        MENU_SEARCH: boolean
    }
}

export type State = Partial<BaseState>

// Action Defs

export type ActionTypes = {

    // MENU TYPES
    MENU_SEARCH: boolean,
    MENU_NAV: boolean,
    MENU_COMMENT: boolean,
    MENU_TODO: boolean,

    // USER TYPES
    USER_LOGGED_IN: null | User,
    USER_LOGGED_OUT: null,
    USER_AUTHENICATING: null
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

export type combineReducersType<S, A> = (
    reducers: { [P in keyof S]: Reducer<S, A> }
) => Reducer<S, A>;


