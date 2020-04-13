import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './style';

export default function Start () {
    return (
        <>
            <Link to='/quiz'>
                <Button>
                    Start Quiz
                </Button>
            </Link>
        </>
    );
}