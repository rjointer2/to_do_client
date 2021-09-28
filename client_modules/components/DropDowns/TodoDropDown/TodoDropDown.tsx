
import React, { useReducer, useState, } from 'react'
import { useGlobalState } from '../../../hooks/useGlobalStateHook'

// styles
import { AvatarCircle } from '../../../styled_components/assets';
import { primary } from '../../../styled_components/palette';

// components
import { BaseDropDown } from '../../../styled_components/dropdown'
import { Card_Context, Card_Info_Top_Item, Card_Info_Top_Master, Card_Master, Card_TextArea, Forum_Assest_Header, Forum_Heading, Forum_Items } from '../../../styled_components/aligment';
import { CloseButton, SubmitBtn } from '../../../styled_components/button';

// apollo
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../../../apollo_client/mutations/todo';

import { formErrorReducer, initialFormErrorState } from '../../../hooks/useFormErrorHook';
import { Select } from '../../../styled_components/form';
import getDates from '../../../lib/getDate';


export default function TodoDropDown() {

    // global state
    const { state, dispatch } = useGlobalState();
    const { menu, user } = state;

    // apollo
    const [ addTodo ] = useMutation(ADD_TODO);

    // local state 
    const [date, setDate] = useState(getDates().getToday());
    const [form, setForm] = useState({ subject: '', todo: '', dueDate: getDates().getToday()});
    const [spinner, setSpinner] = useState(false);

    const [ formErrorState, formErrorDispatch ] = useReducer(formErrorReducer, initialFormErrorState)

    const handleFormEvents = async ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(formErrorState.isError)
        if(formErrorState.isError) formErrorDispatch({ type: "EXIT_FORM_ERROR" });
    }

    console.log(form)
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!form.subject || !form.todo || !date) {
            formErrorDispatch({ type: "INIT_FORM_ERROR", payload: "You must fully complete this form..." })
            return false
        }

        setSpinner(true);

        try{ 
            await addTodo({
                variables: { "subject": form.subject, "todo": form.todo, "dueDate": form.dueDate }
            })
            dispatch({ type: "MENU_TODO", payload: menu?.MENU_TODO })
        } catch(error) {
            const message = error as string
            formErrorDispatch({ type: "INIT_FORM_ERROR", payload: JSON.stringify(message) })
            setSpinner(false)
        }
     }

 
    return (
        <BaseDropDown isOpen={menu?.MENU_TODO} >
            <Forum_Assest_Header>
                <Forum_Items>
                    <Forum_Heading>
                        Post Todo!
                    </Forum_Heading>
                    <CloseButton onClick={() => dispatch({ type: "MENU_TODO", payload: menu?.MENU_TODO })} />
                </Forum_Items>
            </Forum_Assest_Header>
            <div>
            { formErrorState.isError && formErrorState.errorMessage as string }
            </div>
            <Card_Master>
                <AvatarCircle src='/placeholder.png' alt="Cat" />
                <Card_Context>
                    <Card_Info_Top_Master>
                        <Card_Info_Top_Item>
                            { user?.data && user?.data.username.substring(0, 20) }
                        </Card_Info_Top_Item>
                        <Card_Info_Top_Item>
                            { getDates().getToday() }
                        </Card_Info_Top_Item>
                    </Card_Info_Top_Master>
                    <Card_TextArea placeholder="Subject" height={"20px"} onChange={handleFormEvents} name="subject" />
                    <Card_TextArea placeholder="Write Something Great Here..." height={"150px"} onChange={handleFormEvents} name="todo" />
                </Card_Context>
            </Card_Master>
            <Forum_Assest_Header>
                <Forum_Items>
                    <Select onChange={(e) => setDate(e.target.value) } >
                        { getDates().getWeek().map((day, index) => <option key={index} value={day} >{day}</option>) }
                    </Select>
                    <SubmitBtn onClick={(e) => handleSubmit(e)}>
                        Submit
                    </SubmitBtn>
                </Forum_Items>
            </Forum_Assest_Header>
        </BaseDropDown>
    )
}
