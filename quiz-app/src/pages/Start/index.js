import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';

export default function Start () {
    return (
        <>
            <Header />
            <Link className='start' to='/quiz'>
                Start Quiz
            </Link>
            <Footer />
        </>
    );
}