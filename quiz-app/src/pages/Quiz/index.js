import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';
import api from '../../services/api';

export default function Quiz () {
    const [questions, setQuestions] = useState([]);

    const [answers, setAnswers] = useState([]);

    const [clicked, setClicked] = useState([false, false, false, false]);

    const [current, setCurrent] = useState(0);

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
        console.log(clicked);
    }

    function handleMarkTwo () {
        console.log('Marcou 2');
        console.log(clicked);
    }

    function handleMarkThree () {
        console.log('Marcou 3');
        console.log(clicked);
    }

    function handleMarkFour () {
        console.log('Marcou 4');
        console.log(clicked);
    }

    return (
        <>
            <Header />
            <div className='block'>
                {questions.map((element, index) => (index === current) && (
                    <div key={element.question} className="question-answer">
                        <p className='question'>{index + 1} - {element.question}</p>
                        <ul className='answers'>
                            <li
                                id='one'
                                onClick={() => {
                                    handleMarkOne();
                                    setClicked([true, false, false, false]);
                                }}
                                className={`answer ${clicked[0] === true ? "clicked" : ""}`}
                            >
                                {element.correct_answer}
                            </li>
                            <li
                                id='two'
                                onClick={() => {
                                    handleMarkTwo();
                                    setClicked([false, true, false, false]);
                                }}
                                className={`answer ${clicked[1] === true ? "clicked" : ""}`}
                            >
                                {element.incorrect_answers[0]}
                            </li>
                            <li
                                id='three'
                                onClick={() => {
                                    handleMarkThree();
                                    setClicked([false, false, true, false]);
                                }}
                                className={`answer ${clicked[2] === true ? "clicked" : ""}`}
                            >
                                {element.incorrect_answers[1]}
                            </li>
                            <li
                                id='four'
                                onClick={() => {
                                    handleMarkFour();
                                    setClicked([false, false, false, true]);
                                }}
                                className={`answer ${clicked[3] === true ? "clicked" : ""}`}
                            >
                                {element.incorrect_answers[2]}
                            </li>
                        </ul>

                        <button
                            onClick={() => setCurrent(current + 1)}
                            className={`botao-quiz ${(current + 1 < questions.length) ? '' : 'out'}`}
                        >
                            Next
                        </button>

                        <Link
                            className={`botao-quiz ${(current + 1 < questions.length) ? 'out' : ''}`}
                            to='/result'
                        >
                            Send Answers
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}