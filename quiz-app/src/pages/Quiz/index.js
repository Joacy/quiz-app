import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';
import api from '../../services/api';

export default function Quiz () {
    const [questions, setQuestions] = useState([]);

    const [answers, setAnswers] = useState([]);

    const history = useHistory();

    async function loadQuiz () {
        try {
            const response = await api.get('api.php', {
                params: {
                    amount: 20,
                    category: 18,
                    type: 'multiple',
                },
            });

            setQuestions(response.data.results);
        } catch (error) {
            alert('Falha em requisitar questões');
        }
    }

    window.onload = () => loadQuiz();
    // console.log(questions);

    // questions.forEach(element => {
    //     console.log(element.category);
    //     console.log(element.question);
    //     console.log(element.correct_answer);
    //     element.incorrect_answers.forEach(inco => {
    //         console.log(inco);
    //     });
    // });

    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');

    function handleMarkOne () {
        console.log('Marcou 1');
    }

    function handleMarkTwo () {
        console.log('Marcou 2');
    }

    function handleMarkThree () {
        console.log('Marcou 3');
    }

    function handleMarkFour () {
        console.log('Marcou 4');
    }

    return (
        <>
            <Header />
            <div className='block'>
                {questions.map((element, index) => (
                    <div key={element.question} className="question-answer">
                        <p className='question'>{index + 1} - {element.question}</p>
                        <ul className='answers'>
                            <li id='one' onClick={() => handleMarkOne()} className='answer'>
                                {element.correct_answer}
                            </li>
                            <li id='two' onClick={() => handleMarkTwo()} className='answer'>
                                {element.incorrect_answers[0]}
                            </li>
                            <li id='three' onClick={() => handleMarkThree()} className='answer'>
                                {element.incorrect_answers[1]}
                            </li>
                            <li id='four' onClick={() => handleMarkFour()} className='answer'>
                                {element.incorrect_answers[2]}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            <Link className='botao' to='/result'>
                Send Answers
            </Link>
            <Footer />
        </>
    );
}