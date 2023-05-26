import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages'

import './assets/app.css'

const App = () => {
    return
    <>
        <Routes> 
            <Route path='/' element={Pages.HomePage />}/>
            <Route path='/flashcard' element={Pages.Flashcard />}/>
            <Route path='login' element={Pages.LoginPage/>}/>
            <Route path='register' element={Pages.SignUpPage/>}/>
            <Route path='/*' element={Pages.NotFound/>}/>
        </Routes>
    </>
}
