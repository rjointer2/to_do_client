

import React, { useReducer } from 'react';

// components
import NavDropDown from '../Components_DropDown/NavDropDown/NavDropDown';
import TodoDropDown from '../Components_DropDown/TodoDropDown/TodoDropDown';
import SearchDropDown from '../Components_DropDown/SearchDropDown/SearchDropDown';
import CommentDropDown from '../Components_DropDown/CommentDropDown/CommentDropDown';


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
