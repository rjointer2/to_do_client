
import { useEffect, useRef } from "react"

export const useTrackRenders = () => {

    const ref = useRef(0);
    
    useEffect(() => {
        ref.current = ref.current + 1
        console.log(ref.current)
    }, [])

}