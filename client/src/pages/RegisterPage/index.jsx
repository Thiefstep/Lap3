import React from "react";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
    return<div>
        
    <form action='login'>
        <h1>Login Page</h1>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' required />
        <input type='email' id='email' name='email' required />
        <input type='submit' value='Register' />
        <label for='password'>Password</label>
        <input type='password' id='password' name='password' required />
        <label for='Email'>Email</label>
        <p>Have an account already?<NavLink to='/login'>Login</NavLink></p> 
    </form>
</div>
}

export default RegisterPage
