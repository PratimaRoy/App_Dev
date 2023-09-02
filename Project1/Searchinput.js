import React from "react";

class Search_Input extends React.Component {
  state = { entry: "" };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };
  render() {
    return (
      <div className="ui segment" style={{ margin: "2%" }}>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Type your search.."
                onChange={(event) => {
                  this.setState({ entry: event.target.value });
                }}
                value={this.state.entry}
              />
              <i className="ui icon search"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search_Input;