import React from "react";

const CreatePage = () =>{
    return<>
        <form className="create" onSubmit={handleSubmit}>
            <h1>Create Your Flashcard</h1>
            <label htmlFor='question'><b>Questions</b></label>
            <input type='text' id='question' name='question' required/>

            <label htmlFor='answer'><b>Answers</b></label>
            <input type='text' id='answer' name='answer' required/>

            <input type="submit" value="Create" />
        </form>
    </>
}

export default CreatePage
