import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './History'


//Pages
import home from './pages/home/home'
import List from './pages/List/list';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/list" exact component={List} />
                </Switch>
            </Router>
        );
    }
}
