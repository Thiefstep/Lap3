import React from 'react';
import { useEffect, useState } from 'react'

const Flashcard = ({front, back}) => {

    return(
        <div className="flashcard">
            <div className='card'>
                <div className='front'>
                    <p>{front}</p>
                </div>
                <div className='back'>
                    <p>{back}</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard
