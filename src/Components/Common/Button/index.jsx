import React, { useContext } from 'react'
import './style.css'
import { DarkModeProvider } from '../../../App'

function Button({outlined,text,onClick}) {

  const {darkMode} = useContext(DarkModeProvider)
  return (
    <div 
        className={outlined ? `outlined-btn ${darkMode ? 'dark' : 'light'}`  : 'btn'}
        onClick={()=>onClick()}    
    >
      {text}
    </div>
  )
}

export default Button
