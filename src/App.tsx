import React, { Component } from 'react';
import './App.css';
import APIPlayground from './APIPlayground/APIPlayground';

class App extends Component<any, any> {

  render() {
    return (
      <section className="app">
        <nav>
          <ul className="nav-menu">
              <li className="nav-elem">
                  <span className="nav-link">Search for books</span>
              </li>
              <li className="nav-elem">
                  <span className="nav-link">Create a book</span>
              </li>
          </ul>    
        </nav>
        <APIPlayground />
      </section>
    );
  }
}

export default App;
