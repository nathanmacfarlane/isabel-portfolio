import * as React from "react";
import { InvalidPropError } from "./Exceptions";
import "./Typography.scss";

export const Typography = (props) => {
  const { children, type = "paragraph", onClick, style } = props;
  const styles = { ...style, cursor: onClick && "pointer" };
  if (type === "header")
    return (
      <h1 onClick={onClick} style={styles}>
        {children}
      </h1>
    );
  if (type === "subheader")
    return (
      <h5 onClick={onClick} style={styles}>
        {children}
      </h5>
    );
  if (type === "paragraph")
    return (
      <p onClick={onClick} style={styles}>
        {children}
      </p>
    );
  throw new InvalidPropError("Typography", "type", type);
};
