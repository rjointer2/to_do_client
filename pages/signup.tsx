
import React, { useReducer, useState } from 'react'
import { formErrorReducer, initialFormErrorState } from '../client_modules/hooks/useFormErrorHook'

// apollo 
import { SIGN } from '../client_modules/apollo_client/mutations/user';
import { ApolloError, useMutation } from '@apollo/client';

// styles
import { Form, FormContainer, FormFooter, FormHeader, FormInput, FormLabel, FormLink } from '../client_modules/styled_components/form';
import Link from 'next/link';
import { BtnLink, BtnWrapper } from '../client_modules/styled_components/button';
import { CenterText } from '../client_modules/styled_components/text';

// components
import Loading from '../client_modules/components/Loading/Loading';



export default function signup() {

    // local state
    const [ formErrorState, formErrorDispatch ] = useReducer( formErrorReducer, initialFormErrorState );
    const [ form, setForm ] = useState({ username: '', password: '', confirmPassword: '', email: '' });
    const [ spinner, setSpinner ] = useState(false);

    // apollo
    const [sign] = useMutation(SIGN);

    // form helper functions

    const handleFormEvents = async ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        formErrorDispatch({ type: "EXIT_FORM_ERROR" });
    }

    const submitForm = async ( e: React.FormEvent) => {
        e.preventDefault();
        console.log('hello')

        const comparsion = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if( !comparsion.test(form.password) ) {
            formErrorDispatch({ type: "INIT_FORM_ERROR", payload: "Make sure password or username contain at least one number and one special character" })
            return false
        }

        if( form.password !== form.confirmPassword ) {
            formErrorDispatch({ type: "INIT_FORM_ERROR", payload: "Password incompatible" })
            console.log(form)
            return false
        }
    
        if( !form.username || !form.password || !form.confirmPassword || !form.email ) {
            formErrorDispatch({ type: "INIT_FORM_ERROR", payload: "Please submit form entirely" })
            return false
        }

        setSpinner(true);
        console.log(form)
        try {
            await sign({
                variables: { "username": form.username, "password": form.password, "email": form.email, "type": "sign_up" }
            });
            // directs users to the home page, then the home page authenticates user
            window.location.assign('/')
        } catch(err) {
            const error = err as ApolloError
            formErrorDispatch({ type: "INIT_FORM_ERROR", payload: error.message  });
            setSpinner(false)
        }
    }

    
    return (
        <>
            <head>
            <title>Todo Sign In</title>
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <link rel="icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Sign in to get all the features of the todo page!"  />
            </head>
            <FormContainer>
                <Form onSubmit={submitForm} >
                    { formErrorState.isError && <CenterText>{ formErrorState.errorMessage }!</CenterText> }
                    <FormHeader>Sign Up Today!</FormHeader>
                    <FormLabel>Username</FormLabel>
                    <FormInput placeholder="Username" onChange={handleFormEvents} name="username"/>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="Email" onChange={handleFormEvents}  name="email"/>
                    <FormLabel>Password</FormLabel>
                    <FormInput placeholder="Password" onChange={handleFormEvents} name="password" />
                    <FormLabel>Confirm Passord</FormLabel>
                    <FormInput placeholder="Confirm Password" onChange={handleFormEvents} name="confirmPassword" />
                    <FormFooter>
                        <Link href="/signin"><FormLink>Have an Account Already?</FormLink></Link>
                        <Link href="/"><FormLink>Just Wanna Browse?</FormLink></Link>
                    </FormFooter>
                    <BtnWrapper>
                        { spinner ? <Loading/> : <BtnLink type="submit" >Sign Up</BtnLink> }
                    </BtnWrapper>
                </Form>
            </FormContainer>
        </>
    )
}
