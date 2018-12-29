import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import "./styles/App.css";
import APIPlayground from "./APIPlayground/APIPlayground";
import { SearchProvider } from "./context/SearchContext";
import SearchService from "./services/SearchBook.service";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchService: new SearchService()
    };
  }

  render() {
    const { searchService } = this.state;
    return (
      <SearchProvider value={searchService}>
        <Router>
          <section className="app-wrapper">
            <Navigation />
            <APIPlayground />
          </section>
        </Router>
      </SearchProvider>
    );
  }
}

export default App;
