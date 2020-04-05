import React from 'react';

import './style.css';

function QuestionBlock () {
    return (
        <div className='block'>
            <p className='question'>Q{0} - Qual a resposta?</p>
            <ul className='answers'>
                <li className='answer'>
                    Resposta 1
                </li>
                <li className='answer'>
                    Resposta 2
                </li>
                <li className='answer'>
                    Resposta 3
                </li>
                <li className='answer'>
                    Resposta 4
                </li>
            </ul>
        </div>
    );
};

export default QuestionBlock;