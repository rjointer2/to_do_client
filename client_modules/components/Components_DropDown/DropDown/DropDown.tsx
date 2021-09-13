

import React, { useEffect, useReducer } from 'react';


// components
import NavDropDown from '../NavDropDown/NavDropDown';
import TodoDropDown from '../TodoDropDown/TodoDropDown';
import SearchDropDown from '../SearchDropDown/SearchDropDown';
import CommentDropDown from '../CommentDropDown/CommentDropDown';

// styles
import { DropDownContainer} from './DropDownStyles';
import { useGlobalState } from '../../../state_mangement/globalState';



export const Dropdown: React.FC = () => {

    const { state } = useGlobalState();
    const { menu } = state;
    

    console.log(state)

    return (
        <div>
          
            <DropDownContainer isOpen={menu?.MENU_COMMENT}><CommentDropDown/></DropDownContainer>
        </div>
    )
}
