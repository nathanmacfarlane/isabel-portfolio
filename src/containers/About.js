import { Grid } from "@material-ui/core";
import React from "react";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
import { useScreen } from "../hooks/useScreen";
import isabel from "../images/isabel.jpg";
import { AboutInfo } from "../information/aboutInfo";

export const About = () => {
  const { isSmall } = useScreen();

  return (
    <div style={{ width: isSmall ? "100%" : "80%" }}>
      <Grid spacing={isSmall ? 3 : 6} container>
        <Grid xs={12} item>
          <Typography type="header" style={{ fontWeight: 400 }}>
            {AboutInfo.mainLine}
          </Typography>
        </Grid>
        <Grid xs={isSmall ? 12 : 4} item>
          <Typography
            type="header"
            style={{ fontSize: "1.2em", fontWeight: 500 }}
          >
            Hi I'm Isabel
          </Typography>
        </Grid>
        <Grid xs={isSmall ? 12 : 8} item>
          {AboutInfo.imIsabel.map((text) => (
            <span key={text}>
              <Typography type="paragraph">{text}</Typography>
              <Spacer height={25} />
            </span>
          ))}
        </Grid>
        <Grid xs={isSmall ? 12 : 4} item>
          <Typography
            type="header"
            style={{ fontSize: "1.2em", fontWeight: 500 }}
          >
            A little more about <em>me</em>
          </Typography>
        </Grid>
        <Grid xs={isSmall ? 12 : 8} item>
          {AboutInfo.more.map((text) => (
            <span key={text}>
              <Typography type="paragraph">{text}</Typography>
              <Spacer height={25} />
            </span>
          ))}
        </Grid>
        <Grid xs={isSmall ? 12 : 4} item>
          <Typography type="header" style={{ fontWeight: 400 }}>
            {AboutInfo.contactTitle}
          </Typography>
          <Typography type="paragraph">{AboutInfo.email}</Typography>
          <Typography type="paragraph">resume</Typography>
        </Grid>
        <Grid xs={isSmall ? 12 : 8} item>
          <img src={isabel} width="100%" />
        </Grid>
      </Grid>
    </div>
  );
};
