import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Start () {
    return (
        <Link className='start' to='/quiz'>
            Start Quiz
        </Link>
    );
}