

import { ApolloError, useMutation } from '@apollo/client'
import React, { useReducer, useState } from 'react'
import { DELETE_USER, UPDATE_USER } from '../client_modules/apollo_client/mutations/user'
import NavDropDown from '../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../client_modules/components/Navbar/Navbar'
import Settings from '../client_modules/components/Settings/Settings'
import { formErrorReducer, initialFormErrorState } from '../client_modules/hooks/useFormErrorHook'
import { useGlobalState } from '../client_modules/hooks/useGlobalStateHook'
import { AppLayout, AppLayOutItems, Card_Info_Top_Item, CenteredDiv } from '../client_modules/styled_components/aligment'
import { EditIcon, TrashIcon } from '../client_modules/styled_components/assets'
import { FormContainer, FormInput, FormLabel } from '../client_modules/styled_components/form'
import { CenterText } from '../client_modules/styled_components/text'

export default function settings() {

    const [updateUser] = useMutation(UPDATE_USER);
    const [deleteUser] = useMutation(DELETE_USER);

    const { state, dispatch } = useGlobalState();
    const { user } = state;

    const [canDelete, setCanDelete] = useState(false);
    const [canUpdate, setCanUpdate] = useState(false);
    const [form, setForm] = useState({ username: '', password: '', email: '', confirmPassword: '' });
    const [ formErrorState, formErrorDispatch ] = useReducer(formErrorReducer, initialFormErrorState)

    const handleFormEvents = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        formErrorDispatch({ type: "EXIT_FORM_ERROR"})
    }

    const submitForm = async ( e:  React.MouseEvent<SVGElement, MouseEvent> ) => {

        const passwordComparsion = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const emailComparsion = /.+@.+\..+/;

        const endingMessage = "If you aren't please keep password field empty."

        if(form.password !== "" && !passwordComparsion.test(form.password) ) { 
            console.log(form)
            formErrorDispatch({ 
                type: "INIT_FORM_ERROR", 
                payload: `If you are changing your password, please use a stronger, or unique password ${endingMessage}.`
            })
            return false
        }

        if(form.email !== "" && !emailComparsion.test(form.email)) {
            console.log(form)
            formErrorDispatch({
                type: "INIT_FORM_ERROR",
                payload: `If you are changing your email address, please use a valid email ${endingMessage}.`
            })
            return false
        }

        if(form.username.length < 5) {
            formErrorDispatch({
                type: "INIT_FORM_ERROR",
                payload: `If you are changing your username, please use a stronger, or unique username ${endingMessage}.`
            })
            return false
        }

        if(form.confirmPassword.length < 0 || form.confirmPassword.length === 0 ) {
            formErrorDispatch({
                type: "INIT_FORM_ERROR",
                payload: `You must enter your password`
            })
            return false
        }

        try {
            await updateUser({
                variables: {
                    "username": form.username === "" ? user?.data?.username : form.username, 
                    "password": form.password === "" ? "" : form.password, 
                    "email": form.email === "" ? user?.data?.email : form.email, 
                    "id": user?.data?.id ,
                    "confirmPassword": form.confirmPassword
                }
            })
        } catch(err) {
            const error: ApolloError = err as unknown as ApolloError
            formErrorDispatch({ 
                type: 'INIT_FORM_ERROR',
                payload: error.message
            })
        }
        
    }
    

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
                <>
                    { formErrorState.isError && <CenterText>{formErrorState.errorMessage} </CenterText> }
                    <FormLabel>Username</FormLabel>
                    <FormInput  name="username" placeholder="Change Username Here" onChange={handleFormEvents} />
                    <FormLabel>Password</FormLabel>
                    <FormInput  name="password" type="password" placeholder="Change Password Here" onChange={handleFormEvents} />
                    <FormLabel>email</FormLabel>
                    <FormInput  name="email" placeholder="Change email Here" onChange={handleFormEvents} />
                </>
                <br/>
                <CenteredDiv>
                    <Card_Info_Top_Item>
                        Update Settings <EditIcon onClick={() => setCanUpdate(state => !state)}/>
                    </Card_Info_Top_Item>
                    <Card_Info_Top_Item>
                        Delete User <TrashIcon onClick={() => setCanDelete(state => !state)} />
                    </Card_Info_Top_Item>
                </CenteredDiv>
                <br/>

                { canDelete && <CenterText>
                    Are You Sure? <br/>
                    Confirming to delete your user account <br/>
                    will remove ALL ACCESS AND DATA with <br/>
                    this Account. If you wish to proceed, <br/>
                    enter your password and press the icon below <br/>
                    <br/>
                    <FormLabel>Verify Password</FormLabel>
                    <FormInput name="confirmPassword" type="password" placeholder="Verify Password Here" onChange={handleFormEvents} />
                    <br/>
                    <TrashIcon onClick={ async () => {
                        try {  
                            await deleteUser({ variables: { "password": form.confirmPassword } })
                            console.log('bet')
                        } catch(err) {
                            const error = err as unknown as ApolloError
                            console.log(error.message)
                        }
                    }} />
                </CenterText> }

                { canUpdate && <CenterText>
                    Before changing password or any account data, <br/>
                    please verify your old password. <br/>
                    Press the icon below when finished. <br/>

                    <br/>
                    <FormLabel>Verify Password</FormLabel>
                    <FormInput  name="confirmPassword" type="password" placeholder="Verify Password Here" onChange={handleFormEvents} />
                    <br/>
                    <EditIcon onClick={(e) => submitForm(e)} />
                </CenterText> }

                </AppLayOutItems>
            </AppLayout>
        </div>
    )
}
