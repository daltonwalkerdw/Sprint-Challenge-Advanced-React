import React, {useState, useEffect} from 'react'


import { UseLocalStorage } from "./UseLocalStorage"

export const useDarkMode = () => {
 const [element, setElement] = UseLocalStorage("enabled", false)
 
 useEffect(() => {
     const domBody = document.getElementsByTagName("body")[0]
   element ? domBody.classList.add("dark-mode") : domBody.classList.remove('dark-mode')
 }, [element])

 return [element, setElement]
}