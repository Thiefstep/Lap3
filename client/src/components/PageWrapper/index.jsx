import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const style = ({ isActive }) => ({ color: isActive ? '#2B061E': '#875053'})

const PageWrapper = () =>{
    return<>
    <header >
        <ul className='nav-list'>
            <li>
                <NavLink to='/' className='nav-item' styles={style}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/flashcard' className='nav-item' styles={style}>FlashCard</NavLink>
            </li>

            <ul className='nav-right'>
                <li>
                    <NavLink to='/register' className='nav-item' styles={style}>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/login' className='nav-item' styles={style}>Login</NavLink>
                </li>
            </ul>
        </ul>
    </header>
    <article>
        <Outlet />
    </article>
    </>
}

export default PageWrapper
