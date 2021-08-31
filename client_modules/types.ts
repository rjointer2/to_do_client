

// styled componenets interfaces and types

export type Props = {
    readonly isOpen: boolean;
}


export interface InitialMenuStateInterface {
    SEARCH_MENU: boolean;
    TODO_MENU: boolean;
    COMMENT_MENU: boolean;
    NAV_MENU: boolean;
    [state: number]: boolean
}

type NAV_MENU =  { readonly type: "NAV_MENU" };
type TODO_MENU = { readonly type: "TODO_MENU" };
type COMMENT_MENU = { readonly type: "COMMENT_MENU" };
type SEARCH_MENU = { readonly type: "SEARCH_MENU" };

export type MenuAction = NAV_MENU | TODO_MENU | COMMENT_MENU | SEARCH_MENU






// menus

/* 

    const func ( state <= object of menus as menuState  )

    nav drop down
    search
    create to do 
    create comment


    if a drop down isn't active, the drop can 


    state of objects { a: boolean, b: boolean... etc }

    if "type"  === state.prop => state.props { a: false, b: true, c: false }

    default return all state as false

*/