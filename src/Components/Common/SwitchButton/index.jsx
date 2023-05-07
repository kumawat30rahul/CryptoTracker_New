import React, { useContext, useState } from 'react'
import Switch from '@mui/material/Switch';
import './styles.css'
import { DarkModeProvider } from '../../../App';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
                     
function SwitchComponent() {
    const {darkMode , setDarkMode} = useContext(DarkModeProvider)
    
  const handleSwitchChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Switch {...label} onChange={handleSwitchChange}/>
  )
}

export default SwitchComponent
