import React from "react";
import loading from "../gif/loading.gif";

const Spinner = () => {
  return (
    <div
      style={{
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <img src={loading} alt="loading" style={{ margin: "1rem 0" }} />
    </div>
  );
};

export default Spinner;
