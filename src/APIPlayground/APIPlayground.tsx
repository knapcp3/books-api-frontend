import React, { Component } from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import CreateBook from './CreateBook/CreateBook';
import SearchBook from './SearchBook/SearchBook';
import IPlaygroundState from './../models/IPlaygroundState';

class APIPlayground extends Component<any, IPlaygroundState> {
    render() {
        return (
            <section className="api-playground">
                <header>
                    API Playground
                </header>
                <Switch>
                    <Route exact path="/" component={SearchBook} />
                    <Route path="/create-book" component={CreateBook} />
                </Switch>
            </section>
        );
    }
}

export default APIPlayground;