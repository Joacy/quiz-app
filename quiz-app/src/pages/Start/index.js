import React from 'react';
import { Link } from 'react-router-dom';

import ButtonStart from '../../components/ButtonStart';

export default function Start () {
    return (
        <Link to='/quiz'>
            <ButtonStart />
        </Link>
    );
}