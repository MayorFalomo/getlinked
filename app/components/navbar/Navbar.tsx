'use client'
import React from 'react'
import { NavStyle } from './Navbar.styled'


const Navbar = () => {
  return (
      <NavStyle>
            <nav>
                <h1>get<span>linked</span> </h1>
                <ul>
                    <li  className="hover-underline-animation" >Timeline </li>
                    <li  className="hover-underline-animation" >Overview </li>
                    <li  className="hover-underline-animation" >FAQS </li>
                    <li  className="hover-underline-animation" >Contact </li>
                </ul>
                <a>Register </a>
            </nav>
        </NavStyle>
  )
}

export default Navbar