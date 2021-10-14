
import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { GET_TODO_BY_ID, TODOS } from "../apollo_client/querys/todos";
import { Todo } from "../types";


const useTodo = ( id: string | string[] | undefined ) => {

    const [ todo, setTodo ] = useState<Todo | undefined>(undefined)

    const { data } : { data: Todo | undefined } = useQuery( GET_TODO_BY_ID, {
        variables: { "id": id }
    })

    useEffect(() => {
        if(data && "getTodoById" in data) setTodo(data["getTodoById"])
    }, [data])

    return todo
    

}

export default useTodo

