import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Results, H2, H3 } from './style';

export default function Result () {
    const history = useHistory();

    return (
        <>
            <Results>
                <H2>
                    Results of Quiz
                </H2>

                <H3>
                    During Time: <span>{0}</span>
                </H3>

                <H3>
                    Correct Answers: <span>{0}</span>
                </H3>

                <H3>
                    You <span>{'Pass/not Pass'}</span>
                </H3>

                <Link className='botao' to='/'>
                    <Button>
                        Answer again
                    </Button>
                </Link>
            </Results>
        </>
    );
}