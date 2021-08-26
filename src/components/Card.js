import React, { useState } from "react";
import { Typography } from "./Typography";
import "./Card.scss";

export const Card = ({ title, subTitle, children, image, style, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="card"
      style={{ ...style, backgroundImage: isHovering && `url(${image})` }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <div style={{ opacity: isHovering ? 0 : 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>{title}</Typography>
          <Typography>{subTitle}</Typography>
        </div>
        <br />
        {children}
      </div>
    </div>
  );
};
