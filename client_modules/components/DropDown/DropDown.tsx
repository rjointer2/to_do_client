

import React, { useReducer } from 'react';

// components
import NavDropDown from '../Components_DropDown/NavDropDown/NavDropDown';
import TodoDropDown from '../Components_DropDown/TodoDropDown/TodoDropDown';
import SearchDropDown from '../Components_DropDown/SearchDropDown/SearchDropDown';
import CommentDropDown from '../Components_DropDown/CommentDropDown/CommentDropDown';


// styles
import { DropDownContainer} from './DropDownStyles';
import { initialMenuState, useMenuReducerHook } from '../../custom_hooks/useMenuReducerHook';
import { InitialMenuStateInterface, MenuAction } from '../../types';


/* 

    we need to locally update state to open the right menu

*/


export const Dropdown: React.FC = () => {

    const [ menuState, menuDispatch ] = useReducer<React.Reducer<InitialMenuStateInterface, MenuAction>>( useMenuReducerHook, initialMenuState );

    return (
        <div>
            <DropDownContainer isOpen={menuState.NAV_MENU}><NavDropDown/></DropDownContainer>
            <DropDownContainer isOpen={menuState.SEARCH_MENU} ><SearchDropDown/></DropDownContainer>
            <DropDownContainer isOpen={menuState.TODO_MENU} ><TodoDropDown/></DropDownContainer>
            <DropDownContainer isOpen={menuState.COMMENT_MENU} ><CommentDropDown/></DropDownContainer>
        </div>
    )
}
