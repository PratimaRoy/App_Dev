import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  state = { latitude: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ latitude: position.coords.latitude });
    });
  }
  render() {
    return (
      <div
        style={{
          margin: "auto",
          maxWidth: "66vw",
          minWidth: "300px",
          marginTop: "10vh",
          textAlign: "center",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          paddingTop: "3em",
          paddingBottom: "4em",
        }}
      >
        <HemisphereDisplay latitude={this.state.latitude} />
      </div>
    );
  }
}

export default App;