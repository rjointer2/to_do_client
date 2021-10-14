
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import { Dispatch, useEffect, useMemo } from "react"
import { ME } from "../apollo_client/querys/user";
import { ActionMap, Me } from "../types"
import { useGlobalState } from "./useGlobalStateHook";

export const useAuthenticateUser = () => {
    
    const route = useRouter();
    const { dispatch, } = useGlobalState();

    const { data, loading } = useQuery<Me>(ME);

    useEffect(() => {
        if(data) {
            dispatch({ type: "USER_LOGGED_IN", payload: data.me });
        } else {
            dispatch({ type: "USER_LOGGED_OUT", payload: null });
            if(loading === false && route.pathname === "/settings" ) {
                route.push('404')
            }
        }
    }, [data, loading])

}

