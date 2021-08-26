import React from "react";

export const Line = ({ width }) => {
  return (
    <div
      style={{
        height: 1,
        width: width ? width : "100%",
        margin: "5px 0px",
        backgroundColor: "gray",
      }}
    />
  );
};
