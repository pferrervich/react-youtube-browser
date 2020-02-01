import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  /* Callback function that gets called with the event object and takes the value of the input 
  out of the event and assigns it in the state property */
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    //prevents browser from refreshing page on submit
    event.preventDefault();
    //calls to parent prop from App with the value of state
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search!</label>
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
