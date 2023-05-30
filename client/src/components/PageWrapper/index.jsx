import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const style = ({ isActive }) => ({ color: isActive ? '#2B061E': '#875053'})

const PageWrapper = () =>{
    return<>
    <header>
        <nav>
            <NavLink to='/' styles={style}>Home</NavLink>
            <NavLink to='/flashcard' styles={style}>FlashCard</NavLink>
            <NavLink to='/register' styles={style}>Register</NavLink>
            <NavLink to='/login' styles={style}>Login</NavLink>
        </nav>
        <Outlet />
    </header>
    </>
}

export default PageWrapper
