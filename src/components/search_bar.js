import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  render() {
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="search-bar">
          <input 
          value = {this.state.term} 
          placeholder = 'Search'
          onChange = {event => this.onInputChange(event.target.value)}/>
        </div>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
}

export default SearchBar;