import React, { useEffect, useState } from "react"
const useScroll = () =>{
    const [top,setTop] = useState(false)
    useEffect(()=>{
        if(window.scrollY>100){
            setTop(!top)
        }else{
            setTop(top)
        }
    },[top])

    return [top,setTop]
}
export default useScroll