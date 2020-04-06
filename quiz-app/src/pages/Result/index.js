import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';

export default function Result () {
    const history = useHistory();

    return (
        <>
            <Header />
            <div className="results">
                <h2>Results of Quiz</h2>
                <h3>During Time: <span>{0}</span></h3>
                <h3>Correct Answers: <span>{0}</span></h3>
                <h3>You <span>{'Pass/not Pass'}</span></h3>

                <Link className='botao' to='/'>
                    Answer again
                </Link>
            </div>
            <Footer />
        </>
    );
}