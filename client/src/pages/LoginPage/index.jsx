import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    return<main>
        
        <form action='login'>
            <h1>Login Page</h1>
            <label for='username'>Username</label>
            <input type='text' id='username' name='username' required />
            <label for='password'>Password</label>
            <input type='password' id='password' name='password' required />
            <input type='submit' value='Login' />
            <p>Don't have an account?<NavLink to='/register'>Register</NavLink></p> 
        </form>
    </main>
}

export default LoginPage
