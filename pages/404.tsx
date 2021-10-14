
// next

// react
import React from 'react'

// component
import NavDropDown from '../client_modules/components/DropDowns/NavDropDown/NavDropDown'
import TodoDropDown from '../client_modules/components/DropDowns/TodoDropDown/TodoDropDown'
import Navbar from '../client_modules/components/Navbar/Navbar'
import { CenterText } from '../client_modules/styled_components/text'


export default function fallback() {
    return (
        <>
            <head>
            <title>Todo 404</title>
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <link rel="icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Oh no, not a bad request!"  />
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </head>

            <NavDropDown />
            <TodoDropDown />
            <Navbar />

            <br/><br/><br/>
            <CenterText>Oh no, a bad request has been made... :[</CenterText>
        </>
    )
}
