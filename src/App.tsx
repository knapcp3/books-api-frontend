import React, { Component } from 'react';
import './App.css';

const baseUrl: string = "http://localhost:3005";

interface ITitle {
  title: string
}

class App extends Component<{}, ITitle> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      title: ""
    }
  }

  handleClick = () => {
    fetch(`${baseUrl}/api/book/random-title`).then(res => {
      return res.json();
    }).then(res => {
      console.log(res.title);
      this.setState({
        title: res.title
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <header className="app-header">
          LELUM POLELUM
        </header>
        <button onClick={this.handleClick}>random title from db!</button>
        <p>{this.state.title}</p>
      </div>
    );
  }
}

export default App;
