import React, { Component } from "react";
import ISearchFilterProps from "./../../../models/ISearchFilterProps";

class SearchFilter extends Component<ISearchFilterProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      termValue: "",
      results: []
    };
  }

  componentDidMount() {
    this.props.searchService.getResults().subscribe((results: any[]) => {
      this.handleResChange(results);
    });
  }

  onChangeParams = (e: any) => {
    const term: string = e.target.value;
    this.setState({
      termValue: term
    });
    this.props.searchService.search(term);
  };

  handleResultsClick = (e: any) => {
    this.setState({
      termValue: "",
      results: []
    });
    this.props.handleSelectedValue(this.state.results[e.target.dataset.index]);
  };

  handleResChange = (res: any[]) => {
    this.setState({
      results: res
    });
  };

  render() {
    const { termValue, results } = this.state;

    return (
      <section>
        <p>Search for a book with author or title:</p>
        <input onChange={this.onChangeParams} value={termValue} type="text" />
        <ul className="search-filter-list">
          {results.map((ob: any, index: number) => (
            <li
              className="search-filter-link"
              onClick={this.handleResultsClick}
              key={ob.id}
              data-index={index}
            >
              {ob.author} - {ob.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default SearchFilter;
