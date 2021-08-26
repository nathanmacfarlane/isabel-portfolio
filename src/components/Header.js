import * as React from "react";
import { Typography } from "./Typography";

export const Header = ({ onClick }) => {
  return (
    <div>
      <Typography type="header" onClick={onClick}>
        Isabel Lien
      </Typography>
      <Typography type="subheader">Product Designer at Ridgeline</Typography>
      <Typography type="subheader">Placeholder</Typography>
    </div>
  );
};
