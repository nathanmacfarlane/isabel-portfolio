import * as React from "react";
import { HeaderInfo } from "../information/headerInfo";
import { Typography } from "./Typography";

export const Header = ({ onClick }) => {
  return (
    <div>
      <Typography type="header" onClick={onClick}>
        {HeaderInfo.line1}
      </Typography>
      <Typography type="subheader">{HeaderInfo.line2}</Typography>
      <Typography type="subheader">{HeaderInfo.line3}</Typography>
    </div>
  );
};
