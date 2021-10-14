import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { GET_TODO_BY_ID, TODOS } from "../apollo_client/querys/todos";
import { Todo } from "../types";


const useTodos = () => {

    const [ todos, setTodos ] = useState<[] | [Todo]>([])

    const { data, fetchMore } = useQuery( TODOS, {
        variables: { "limit": 10, "offset": 0 },
    })

    useEffect(() => {
        if(data) for( let prop in data ) setTodos(data[prop])
    }, [data])

    return { todos, fetchMoreTodos: fetchMore } 

}

export default useTodos

