import React from "react"

export type Props = { 
    [index:string]: any
    isOpen: boolean
    z_index: number
    background: string
    show: boolean
    height: string
}

interface User {
    username: string
    id: string
    email: string
    todos: {
        id: string
        completed: boolean
        subject: string
        todo: object
        dueDate: string
        createdBy: {
            id: string
            username: string
        }
        likedBy: {
            id: string
            username: string
        }
        didUserLike: boolean
    }
}

type BaseState = {
    [index: string]: any
    user: {
        data: null | User
    }
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

