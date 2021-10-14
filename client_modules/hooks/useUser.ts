import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { USER_BY_ID } from "../apollo_client/querys/user";
import { User } from "../types";


export default function useUser ( id: string | string[] | undefined ) {

    const [user, setUser] = useState(undefined)

    const { data: userData } = useQuery(USER_BY_ID, {
        variables: { "id": id }
    });

    useEffect(() => {
        if(userData) for(let prop in userData) setUser(userData[prop])
    }, [userData])

    return { data: user as User | undefined }
}

