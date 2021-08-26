import React from "react";
import { Card } from "../components/Card";
import { Typography } from "../components/Typography";
import { Line } from "../components/Line";
import { Spacer } from "../components/Spacer";
import wine from "../images/wine.png";

export const Projects = () => {
  return (
    <div>
      {/* SECTION 1 */}
      <Typography type="subheader">
        Research Synthesis Through Design
      </Typography>
      <Line width={80} />
      <Typography type="header">
        Uncovering research
        <br />
        insights through the
        <br />
        affordances of design
      </Typography>
      <br />
      <Card
        title="Title"
        subTitle="Sub Title"
        image={wine}
        style={{ maxWidth: 800 }}
      >
        A search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </Card>
      <Card
        title="Title"
        subTitle="Sub Title"
        image={wine}
        style={{ maxWidth: 800 }}
      >
        A search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </Card>
      <Card
        title="Title"
        subTitle="Sub Title"
        image={wine}
        style={{ maxWidth: 800 }}
      >
        A search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </Card>

      <Spacer height={100} />

      {/* SECTION 2 */}
      <Typography type="subheader">
        Research Synthesis Through Design
      </Typography>
      <Line width={80} />
      <Typography type="header">
        Uncovering research
        <br />
        insights through the
        <br />
        affordances of design
      </Typography>
      <br />
      <Card
        title="Title"
        subTitle="Sub Title"
        image={wine}
        style={{ maxWidth: 800 }}
      >
        A search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </Card>
      <Card
        title="Title"
        subTitle="Sub Title"
        image={wine}
        style={{ maxWidth: 800 }}
      >
        A search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </Card>
      <Card
        title="Title"
        subTitle="Sub Title"
        image={wine}
        style={{ maxWidth: 800 }}
      >
        A search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </Card>
      <Spacer />
    </div>
  );
};
