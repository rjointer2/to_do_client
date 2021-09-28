import { ApolloError } from "@apollo/client"
import { Dispatch } from "react"
import { ActionMap, User } from "../types"

export const dispatchUserState = ({ data, dispatch } : { data: any | null, dispatch: Dispatch<ActionMap> }) => data ? dispatch({ type: "USER_LOGGED_IN", payload: data.me }) : dispatch({ type: "USER_LOGGED_OUT", payload: null })
