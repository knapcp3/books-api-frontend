import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  // Route,
  // Switch,
  Link
} from 'react-router-dom';

import './App.css';
import APIPlayground from './APIPlayground/APIPlayground';

class App extends Component<any, any> {

  render() {
    return (
      <Router>
        <section className="app">
          <nav>
            <ul className="nav-menu">
              <li className="nav-elem">
                <Link to="/" className="nav-link">Search for books</Link>
              </li>
              <li className="nav-elem">
                <Link to="/create-book" className="nav-link">Create a book</Link>
              </li>
            </ul>    
          </nav>
          <APIPlayground />
        </section>
      </Router>
    );
  }
}

export default App;
