import { Grid } from "@material-ui/core";
import React from "react";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
import { useScreen } from "../hooks/useScreen";
import isabel from "../images/isabel.jpg";

export const About = () => {
  const { isSmall } = useScreen();

  return (
    <div style={{ width: isSmall ? "100%" : "80%" }}>
      <Grid spacing={isSmall ? 3 : 6} container>
        <Grid xs={12} item>
          <Typography type="header" style={{ fontWeight: 400 }}>
            Maddie is interested in using design to not simply respond visually
            to the problems she faces, but to investigate these problems through
            design-led research and synthesis.
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
          <Typography type="paragraph">
            Hi I’m Maddie. I’m a recently graduated designer ready to take on
            the ever-shifting world we live in! I’m deeply interested in how
            design can work hand-in-hand with research whether through immersive
            workshops or design-led research synthesis. I also enjoy using my
            design background to build up a message overtime through time-based
            media. I believe that video has a particular way of exciting and
            drawing in a viewer that is unique from any other medium out there.
          </Typography>
          <Spacer height={25} />
          <Typography type="paragraph">
            While (as all designers do) I love well made, intriguing visual
            work, I believe it is secondary to getting the story right. Any
            fellow colleague or classmate of mine will attest that I am the
            queen of scrutinizing my design decisions in order to create meaning
            in every stroke, color, or word choice that I make. It is my belief
            that visual design systems are the building blocks that form a
            compelling message. Without the “message” part, design isn’t so
            compelling anymore.
          </Typography>
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
          <Typography type="paragraph">
            When I’m not waiting for a video to render or agonizing over a color
            scheme, you can find me collecting anything purple, creating jewelry
            out of clay and tiny beads, or playing with abstract shapes and
            collage to make handwritten notes. I also love spending time with
            family, drinking endless amounts of sparkling water, and listening
            to hours on hours of podcasts.
          </Typography>
        </Grid>
        <Grid xs={isSmall ? 12 : 4} item>
          <Typography type="header" style={{ fontWeight: 400 }}>
            Get in Touch!
          </Typography>
          <Typography type="paragraph">ilien7057@gmail.com</Typography>
          <Typography type="paragraph">resume</Typography>
        </Grid>
        <Grid xs={isSmall ? 12 : 8} item>
          <img src={isabel} width="100%" />
        </Grid>
      </Grid>
    </div>
  );
};
