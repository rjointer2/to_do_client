

import React from 'react'
import { Forum_Action_Items } from '../../styled_components/aligment'
import { CommentBubble } from '../../styled_components/assets'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Todo } from '../../types';

export default function CommentIcon({ todo } : { todo: Todo }) {

    const route = useRouter();
    const pathname = route.pathname

    console.log(pathname)

    return (
        <>
            {  
                pathname.includes("todo") ?
                <Forum_Action_Items>
                    { todo.comments.length } Comments <CommentBubble />
                </Forum_Action_Items> :
                <Link href={`/todo/${todo.id}`}>
                    <Forum_Action_Items>
                        { todo.comments.length } Comments <CommentBubble />
                    </Forum_Action_Items>
                </Link>
                
            }
        </>
    )
}
