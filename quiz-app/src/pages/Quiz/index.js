import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Block, QuestionAnswer, Question, Answers, Answer, BotaoQuiz, BotaoSend } from './style';
import api from '../../services/api';

export default function Quiz () {
    const [questions, setQuestions] = useState([]);

    const [answers, setAnswers] = useState([]);

    const [clicked, setClicked] = useState([false, false, false, false]);

    const [current, setCurrent] = useState(0);

    const history = useHistory();

    useEffect(() => {
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

        loadQuiz();
    }, []);

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

    function endQuiz () {
        history.push('result');
    }

    return (
        <>
            <Block>
                {questions.map((element, index) => (index === current) && (
                    <QuestionAnswer key={element.question}>
                        <Question>
                            {index + 1} - {element.question}
                        </Question>
                        <Answers>
                            <Answer
                                id='one'
                                onClick={() => {
                                    handleMarkOne();
                                    setClicked([true, false, false, false]);
                                }}
                                className={`answer ${clicked[0] === true ? "clicked" : ""}`}
                            >
                                {element.correct_answer}
                            </Answer>

                            <Answer
                                id='two'
                                onClick={() => {
                                    handleMarkTwo();
                                    setClicked([false, true, false, false]);
                                }}
                                className={`answer ${clicked[1] === true ? "clicked" : ""}`}
                            >
                                {element.incorrect_answers[0]}
                            </Answer>

                            <Answer
                                id='three'
                                onClick={() => {
                                    handleMarkThree();
                                    setClicked([false, false, true, false]);
                                }}
                                className={`answer ${clicked[2] === true ? "clicked" : ""}`}
                            >
                                {element.incorrect_answers[1]}
                            </Answer>

                            <Answer
                                id='four'
                                onClick={() => {
                                    handleMarkFour();
                                    setClicked([false, false, false, true]);
                                }}
                                className={`answer ${clicked[3] === true ? "clicked" : ""}`}
                            >
                                {element.incorrect_answers[2]}
                            </Answer>
                        </Answers>

                        {(current === 19 ?
                            <BotaoSend
                                onClick={() => endQuiz()}
                            >
                                <span>Send Answers</span>
                            </BotaoSend>
                            :
                            <BotaoQuiz
                                onClick={() => setCurrent(current + 1)}
                            >
                                <span>Next</span>
                            </BotaoQuiz>
                        )}

                    </QuestionAnswer>
                ))}
            </Block>
        </>
    );
}