import React from "react";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
    return<>
        
    <form className="register" action='register'>
        <h1>Register Page</h1>
        <label for='username'><b>Username</b></label>
        <input type='text' id='username' name='username' required />


        <label for='Email'><b>Email</b></label>
        <input type='email' id='email' name='email' required />

        <label for='password'><b>Password</b></label>
        <input type='password' id='password' name='password' required />

        <input type='submit' value='Register' />
        <p>Have an account already?<NavLink to='/login'>Login</NavLink></p> 
    </form>
</>
}

export default RegisterPage
