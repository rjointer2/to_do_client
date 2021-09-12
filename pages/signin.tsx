
// next
import Link from 'next/link';

// react
import React, { useReducer, useState } from 'react';
import { formErrorReducer, initialFormErrorState } from '../client_modules/hooks/useFormErrorHook';

// apollo
import { SIGN } from '../client_modules/apollo_client/mutations/user';
import { ApolloError, useMutation } from '@apollo/client';

// components
import Loading from '../client_modules/components/Loading/Loading';

// styles
import { BtnLink, BtnWrapper } from '../client_modules/styled_components/button';
import { Form, FormContainer, FormFooter, FormHeader, FormInput, FormLabel, FormLink } from '../client_modules/styled_components/form';

export default function signin() {

    // local state
    const [ spinner, setSpinner ] = useState(false);
    const [ form, setForm ] = useState({ username: '', password: '' });
    const [ formErrorState, formErrorDsipatch ] = useReducer(formErrorReducer, initialFormErrorState)

    // apollo
    const [signIn] = useMutation(SIGN);

    const handleFormEvents = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        formErrorDsipatch({ type: "EXIT_FORM_ERROR"})
    }

    const submitForm = async ( e: React.FormEvent ) => {
        e.preventDefault();

        if( !form.password || !form.username) {
            formErrorDsipatch({ type: "INIT_FORM_ERROR", payload: "You must enter valid credentials" })
            return false
        }

        setSpinner(true);
        try {
            await signIn({
                variables: { "username": form.username, "password": form.password, "type": "sign_in" }
            });
            // directs users to the home page, then the home page authenticates user
            window.location.assign('/')
        } catch(error: any) {
            formErrorDsipatch({ type: "INIT_FORM_ERROR", payload: error.message });
            setSpinner(false);
        }
    }

    return (
        <>
            <FormContainer>
                <Form onSubmit={submitForm} >
                    <FormHeader> { formErrorState.isError ? formErrorState.errorMessage : "Welcome Back!" } </FormHeader>
                    <FormLabel>Username</FormLabel>
                    <FormInput onChange={handleFormEvents} name="username"/>
                    <FormLabel>Password</FormLabel>
                    <FormInput onChange={handleFormEvents} name="password" type="password" />
                    <FormFooter>
                        <Link href="/signup"><FormLink>Don't Have a Account?</FormLink></Link>
                        <Link href="/"><FormLink>Just Wanna Browse?</FormLink></Link>
                    </FormFooter>
                    <BtnWrapper>
                        { spinner ? <Loading/> : <BtnLink type="submit" >Sign In</BtnLink> }
                    </BtnWrapper>
                </Form>
            </FormContainer>
        </>
    )
}
