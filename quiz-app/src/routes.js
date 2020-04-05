import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Start from './pages/Start';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Start} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/result" component={Result} />
            </Switch>
        </BrowserRouter>
    );
}