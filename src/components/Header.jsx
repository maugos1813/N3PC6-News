import React from 'react'
import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
        <img src={logo} alt="logo" />
        <Navbar/>
    </header>
  )
}
