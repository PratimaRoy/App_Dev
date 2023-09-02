import React from "react";
import southernImg from "../images/southern.jpg";
import northernImg from "../images/northern.jpg";
import ecuatorianImg from "../images/ecuatorianLine.jpg";

const HemisphereDisplay = (props) => {
  const hemisphereResult = props.latitude;
  let userLocation = "";
  let picture;
  if (hemisphereResult > 0) {
    userLocation = "Northern Hemisphere!";
    picture = northernImg;
  } else if (hemisphereResult < 0) {
    userLocation = "Southern Hemisphere!";
    picture = southernImg;
  } else {
    userLocation = "Ecuadorian line!";
    picture = ecuatorianImg;
  }
  return (
    <div style={{ position: "relative" }}>
      <h1>Welcome to hemisphere app</h1>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "30%",
          right: "30%",
          fontSize: "1.5em",
          fontWeight: "bold",
          color: "purple",
          padding: "1em",
          borderRadius: "10px",
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
        <p style={{ margin: "0", padding: "0" }}>
          You are at the{" "}
          <span
            style={
              userLocation === "Northern Hemisphere!"
                ? { color: "red" }
                : { color: "blue" }
            }
          >
            {userLocation}
          </span>
        </p>
      </div>

      <img src={picture} style={{ width: "50%" }} alt="" />
    </div>
  );
};

export default HemisphereDisplay;