import React, { Component } from "react";

class SearchFilter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      termValue: ""
    };
  }

  componentDidMount() {
    this.props.searchService.getResults().subscribe((results: any[]) => {
      this.props.handleResChange(results);
    });
  }

  onChangeBookFromParams = (e: any) => {
    const term: string = e.target.value;
    this.setState({
      termValue: term
    });
    this.props.searchService.search(term);
  };

  handleResultsClick = (e: any) => {
    this.setState({
      termValue: ""
    });
    this.props.handleSearchFilterClick(e);
  };

  render() {
    const { termValue } = this.state;
    const { results } = this.props;

    return (
      <section>
        <p>Search for a book with author or title:</p>
        <input
          onChange={this.onChangeBookFromParams}
          value={termValue}
          type="text"
        />
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
