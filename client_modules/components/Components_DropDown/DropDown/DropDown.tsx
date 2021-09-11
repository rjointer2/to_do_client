

import React, { useReducer } from 'react';

// components
import NavDropDown from '../NavDropDown/NavDropDown';
import TodoDropDown from '../TodoDropDown/TodoDropDown';
import SearchDropDown from '../SearchDropDown/SearchDropDown';
import CommentDropDown from '../CommentDropDown/CommentDropDown';


// styles
import { DropDownContainer} from './DropDownStyles';



export const Dropdown: React.FC = () => {

    //const [ menuState, menuDispatch ] = useReducer<React.Reducer<InitialMenuStateInterface, MenuAction>>( useMenuReducerHook, initialMenuState );

    return (
        <div>
            <DropDownContainer isOpen={true}><NavDropDown/></DropDownContainer>
            <DropDownContainer isOpen={false} ><SearchDropDown/></DropDownContainer>
            <DropDownContainer isOpen={false} ><TodoDropDown/></DropDownContainer>
            <DropDownContainer isOpen={false} ><CommentDropDown/></DropDownContainer>
        </div>
    )
}
