
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AvatarCircle } from '../../styled_components/assets'

export default function UserAvatar({ url } : { url: string }) {

    const [image, setImage] = useState('/placeholder.png')
    
    const showImage = async () => {
        const res = await fetch(url)
        if(res.status === 200) {
            setImage(url)
            return false
        }
        setImage('/placeholder.png')
    }

    showImage()

    return (
        <Link href={`/user/${url.split('/')[5]}`}>
            <AvatarCircle src={image} alt={`${url}'s profile profile`}/>
        </Link>
    )
}
