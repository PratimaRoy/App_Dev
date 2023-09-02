import React from "react";

const ImagesList = function (props) {
  const images = props.images.map((image) => {
    return (
      <img
        src={image.webformatURL}
        alt=""
        key={image.id}
        style={{
          width: "48%",
          minWidth: "500px",
          objectFit: "cover",
          Height: "25vh",
          maxHeight: "25vh",
          minHeight: "25vh",
          margin: "10px",
        }}
      />
    );
  });
  return (
    <div>
      <p>My images list</p>
      <div className="ui two column centered grid">{images}</div>
    </div>
  );
};

export default ImagesList;