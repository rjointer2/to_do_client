
import { useRouter } from 'next/router'
import React from 'react'
import NavDropDown from '../../client_modules/components/DropDowns/NavDropDown/NavDropDown';
import TodoDropDown from '../../client_modules/components/DropDowns/TodoDropDown/TodoDropDown';
import Navbar from '../../client_modules/components/Navbar/Navbar';
import Settings from '../../client_modules/components/Settings/Settings';
import Todos from '../../client_modules/components/Todos/Todos';
import useTodos from '../../client_modules/hooks/useTodos';
import { AppLayout, AppLayOutItems } from '../../client_modules/styled_components/aligment';

export default function todoPage() {

    const route = useRouter();
    const { id } = route.query;

    const { todos } = useTodos(id as string)
    console.log(todos);

    
    return (

        
        <div>
            <NavDropDown />
            <TodoDropDown />
            <Navbar />

            <AppLayout>
                <AppLayOutItems>
                <Settings/>
                </AppLayOutItems>
                <AppLayOutItems>
                { todos && <Todos todo={todos}/> }
                </AppLayOutItems>
            </AppLayout>
        </div>
    )
}
