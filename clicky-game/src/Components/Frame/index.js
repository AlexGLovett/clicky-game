import React from "react";

const frameStyle = {
  display: "grid",
  margin: "1.5rem 0.1rem 1.5rem 0.1rem",
  gridColumnGap: "0.6rem"
};

function Frame(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div style={frameStyle} id="frame">
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Frame;
