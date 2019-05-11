import React from "react";

function Picture(props) {
  return (
    <div className="card-panel">
      <img
        className="monster-image"
        src={props.image.image}
        alt={props.image.id}
        onClick={() => props.clickPic(props.image.id)}
      />
    </div>
  );
}

export default Picture;
