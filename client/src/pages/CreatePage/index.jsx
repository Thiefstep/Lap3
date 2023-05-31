import React from "react";

const CreatePage = () =>{
    return<>
        <form className="register">
            <h1>Create Your Flashcard</h1>
            <label htmlFor='question'><b>Questions</b></label>
            <input type='text' id='question' name='question' required/>

            <label htmlFor='answer'><b>Answers</b></label>
            <textarea id='answer' name='answer' rows='5' cols='50' required/>

            <button>Create</button>
        </form>
    </>
}

export default CreatePage
