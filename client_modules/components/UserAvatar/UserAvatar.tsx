
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AvatarCircle } from '../../styled_components/assets'

export default function UserAvatar({ url } : { url: string }) {

    const [image, setImage] = useState('/placeholder.png')
    
    const validiateImage = () => {
        let req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.send();
        req.onload = () => {
            let ok = req.status;
            ok === 200 ? 
            setImage(url)
            :
            setImage('/placeholder.png')
        }

    }

    validiateImage()

    return (
        <Link href={`/user/${url.split('/')[5]}`}>
            <AvatarCircle src={image} alt={`${url}'s profile profile`}/>
        </Link>
    )
}
