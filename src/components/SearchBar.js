import React from 'react';

class SearchBar extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.onSubmitChange = this.onSubmitChange.bind(this);
  //   }
  state = { term: '' };
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
    // App.js "onSubmit" function
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Bar</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
