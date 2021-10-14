
// apollo 
import { ApolloError, useMutation } from '@apollo/client'
import { DELETE_USER, UPDATE_USER } from '../client_modules/apollo_client/mutations/user'

// react
import React, { useReducer, useRef, useState } from 'react'
import { formErrorReducer, initialFormErrorState } from '../client_modules/hooks/useFormErrorHook'
import { useGlobalState } from '../client_modules/hooks/useGlobalStateHook'

// compoenets
import NavDropDown from '../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../client_modules/components/Navbar/Navbar'
import Settings from '../client_modules/components/Settings/Settings'

// styles
import { AppLayout, AppLayOutItems, Card_Info_Top_Item, Card_Master, CenteredDiv } from '../client_modules/styled_components/aligment'
import { AvatarCircle, EditIcon, TrashIcon } from '../client_modules/styled_components/assets'
import { FormInput, FormLabel } from '../client_modules/styled_components/form'
import { CenterText } from '../client_modules/styled_components/text'
import UpdateUserImage from '../client_modules/components/UpdateUserImage/UpdateUserImage'
import { DeleteUserConfirmationInfo, updateUserConfirmationInfo } from '../client_modules/configs/importText'



export default function settings() {


    const [updateUser] = useMutation(UPDATE_USER);
    const [deleteUser] = useMutation(DELETE_USER);

    const { state, dispatch } = useGlobalState();
    const { user } = state;

    const [canDelete, setCanDelete] = useState(false);
    const [canUpdate, setCanUpdate] = useState(false);
    const [form, setForm] = useState({ username: '', password: '', email: '', confirmPassword: '', });
    const [ formErrorState, formErrorDispatch ] = useReducer(formErrorReducer, initialFormErrorState);

    const initialFormRef = useRef(form)

    const handleFormEvents = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        formErrorDispatch({ type: "EXIT_FORM_ERROR"})
    }

    const submitForm = async ({ submitType, state } : { submitType: "UPDATE" | "DELETE", state: typeof form }) => {

        if(!user) return false

        if(submitType === "UPDATE") {
            const passwordComparsion = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            const emailComparsion = /.+@.+\..+/;

            const endingMessage = "If you aren't please keep password field empty."

            if(form.password !== "" && !passwordComparsion.test(form.password) ) { 
    
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
                        "username": form.username === "" ? user.username : form.username, 
                        "password": form.password === "" ? "" : form.password, 
                        "email": form.email === "" ? user.email : form.email, 
                        "id": user.id ,
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
 
        if(submitType === "DELETE") {
            try {  
                await deleteUser({ variables: { "password": form.confirmPassword } })
            } catch(err) {
                const error = err as unknown as ApolloError
                console.log(error.message)
            }
        }
        
    }
    

    return (
        <>
            <title>Todo Settings</title>
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <link rel="icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Change your user's settings!"  />
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>

            <NavDropDown />
            <TodoDropDown />
            <Navbar />

            <AppLayout>
                <AppLayOutItems>
                <Settings/>
                </AppLayOutItems>
                <AppLayOutItems>
                <>
                    <CenterText>
                        To Change User Account Settings, only fill the field you desire and<br/>
                        the rest blank. Click the Update Icon to contiune.
                    </CenterText>
                    { formErrorState.isError && <CenterText>{formErrorState.errorMessage} </CenterText> }
                    <UpdateUserImage  />
                    <FormLabel>Username</FormLabel>
                    <FormInput  name="username" placeholder="Change Username Here" onChange={handleFormEvents} />
                    <FormLabel>Password</FormLabel>
                    <FormInput  name="password" placeholder="Change Password Here" onChange={handleFormEvents} />
                    <FormLabel>email</FormLabel>
                    <FormInput  name="email" placeholder="Change email Here" onChange={handleFormEvents} />
                </>
                <br/>
                <Card_Master>
                    <Card_Info_Top_Item>
                    { canUpdate ? "Click Again To Close Action" : "Update Settings" } <EditIcon onClick={() => {
                            setCanUpdate(state => !state)
                            canDelete && setCanDelete(state => !state)
                            setForm(initialFormRef.current)
                        }}/>
                    </Card_Info_Top_Item>
                    <Card_Info_Top_Item>
                        { canDelete ? "Click Again To Close Action" : "Delete User" } <TrashIcon onClick={() => {
                            setCanDelete(state => !state)
                            canUpdate && setCanUpdate(state => !state)
                            setForm(initialFormRef.current)
                        }} />
                    </Card_Info_Top_Item>
                </Card_Master>
                <br/>

                { canDelete && <CenterText>
                    { DeleteUserConfirmationInfo() }
                    <FormLabel>Verify Password</FormLabel>
                    <FormInput name="confirmPassword" placeholder="Verify Password Here" onChange={handleFormEvents} />
                    <br/>
                    <TrashIcon onClick={() => submitForm({ submitType: "UPDATE", state: form })} />
                </CenterText> }

                { canUpdate && <CenterText>
                    { updateUserConfirmationInfo() }
                    <FormLabel>Verify Password</FormLabel>
                    <FormInput  name="confirmPassword" placeholder="Verify Password Here" onChange={handleFormEvents} />
                    <br/>
                    <EditIcon onClick={() => submitForm({ submitType: "UPDATE", state: form })} />
                </CenterText> }

                </AppLayOutItems>
            </AppLayout>
        </>
    )
}
