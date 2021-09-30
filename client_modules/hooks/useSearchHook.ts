import { useMutation } from "@apollo/client"
import { useState } from "react"
import { SEARCH_USER } from "../apollo_client/mutations/user"

export const useSearchHook = () => {

    const [results, setResults] = useState([])

    const [searchUsers] = useMutation(SEARCH_USER)


    const useSearch = async ( e: React.ChangeEvent<HTMLInputElement> ) => {
        if(e.target.value.length >= 3) {
            try {
                const array = await searchUsers({
                    variables: { "value": e.target.value }
                }) as any
                setResults(array.data.searchUsers)
            } catch(err) {
                setResults([])
            }
        } else {
            setResults([])
        }
    }

    return { useSearch, searchResult: results }

}