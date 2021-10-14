
// next

// components
import Navbar from '../client_modules/components/Navbar/Navbar';
import NavDropDown from '../client_modules/components/DropDowns/NavDropDown/NavDropDown';
import { AppLayout, AppLayOutItems } from '../client_modules/styled_components/aligment';
import Settings from '../client_modules/components/Settings/Settings';
import ActionButton from '../client_modules/components/ActionButton/ActionButton';
import TodoDropDown from '../client_modules/components/DropDowns/TodoDropDown/TodoDropDown';
import Todos from '../client_modules/components/Todo/Todo';

// react
import React, { useState } from 'react';
import { useGlobalState } from '../client_modules/hooks/useGlobalStateHook';


// apollo
import useTodos from '../client_modules/hooks/useTodos';
import { useTrackRenders } from '../client_modules/hooks/useTrackRenders';
import { CenterText } from '../client_modules/styled_components/text';
import Loading from '../client_modules/components/Loading/Loading';
import { Waypoint } from 'react-waypoint';




export default function Home() {

  let offset = 0
  let limit = 10

  const { state, dispatch } = useGlobalState();
  const { menu, user } = state;

  const { todos, fetchMoreTodos } = useTodos();

  const showTodos = () => {
    return todos.map(( todo, index ) => (
      <React.Fragment key={index}>
        <Todos todo={todo} userID={user?.id || ""} />
        { index === todos.length - 5 && (
          <Waypoint onEnter={() => {
            console.log('hi');
            fetchMoreTodos({ variables: { "offset": todos.length, "limit": todos.length + 10 } })
          }}/>
        ) }
      </React.Fragment>
     )
    )
  }


  return (
    <>
      <head>
      <title>Todo Home</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <link rel="icon" href="/icon.png"></link>
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Explore and See Everyone's Todos!"  />
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </head>

      <NavDropDown />
      <TodoDropDown />
      <Navbar />


      <AppLayout>
        <AppLayOutItems>
          <Settings/>
        </AppLayOutItems>
        <AppLayOutItems>
        <CenterText>All Todos</CenterText><br/>
          { user && <ActionButton /> }
          { showTodos() }
          <Loading />
        </AppLayOutItems>
      </AppLayout>
      
      
    </>
  )
}
