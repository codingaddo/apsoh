import React, { useEffect, useState } from "react"
const useScroll = () => {
    const [backtoTop,setBacktoTop]=useState(false)
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
          setBacktoTop(!backtoTop)
        }else{
          setBacktoTop(backtoTop)
        }
      })

    },[])

    const scrollUp = ()=>{
     window.scroll({
        top:0,
        behavior:'smooth'
      })
    }
  return [backtoTop,setBacktoTop,scrollUp]
   
  
}

export default useScroll