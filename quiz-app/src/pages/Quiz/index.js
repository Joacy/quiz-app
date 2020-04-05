import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import QuestionBlock from '../../components/QuestionBlock';

import api from '../../services/api';

export default function Quiz () {
    const [questions, setQuestions] = useState([]);

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

    return (
        <QuestionBlock />
    );
}