import React from "react";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
    return<main>
        
    <form action='login'>
        <h1>Login Page</h1>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' required /
        ><label for='Email'>Email</label>
        <input type='email' id='email' name='email' required />
        <label for='password'>Password</label>
        <input type='password' id='password' name='password' required />
        <input type='submit' value='Register' />
        <p>Have an account already?<NavLink to='/login'>Login</NavLink></p> 
    </form>
</main>
}

export default RegisterPage
