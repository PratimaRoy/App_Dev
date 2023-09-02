import React from "react";
import SearchInput from "./Searchinput";
import axios from "axios";
import ImagesList from "./imageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API}&q=${entry}&image_type=photo`
    );

    this.setState({ images: response.data.hits });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "2em" }}>
        <h1
          className="ui title"
          style={{ textAlign: "center", color: "black" }}
        >
          Welcome to image search App
        </h1>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <p>There are {this.state.images.length}</p>
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;