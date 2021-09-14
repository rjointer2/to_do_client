
// next
import { useRouter } from 'next/router';


import React from 'react'
import { useGlobalState } from '../../hooks/useGlobalStateHook'

// styles
import { ActionBtn } from './ActionButtonStyles'

export default function ActionButton() {

    const router = useRouter()
    const { pathname } = router

    const { state, dispatch } = useGlobalState();
    const { user, menu } = state;

    const dispatchMenu = () => {

        console.log(pathname)

        return pathname === '/' ? dispatch({
            type: "MENU_TODO", payload: menu?.MENU_TODO
        }) : dispatch({
            type: "MENU_COMMENT", payload: menu?.MENU_COMMENT
        })
    }

    return (
       <ActionBtn onClick={() => dispatchMenu()} />
    )
}
