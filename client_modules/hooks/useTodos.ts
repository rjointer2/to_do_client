import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { GET_TODO_BY_ID, TODOS } from "../apollo_client/querys/todos";

type useTodosType = { (id?: string): any }

const useTodos: useTodosType = (id) => {

    const [ todos, setTodos ] = useState(undefined)

    const { data } = useQuery( id ? GET_TODO_BY_ID : TODOS, {
        variables: id ?  { "id": id } : { "limit": 10, "offset": 0 }
    })

    useEffect(() => {
        if(data) for( let prop in data ) setTodos(data[prop])
    }, [data])

    return { todos: todos }

    

}

export default useTodos