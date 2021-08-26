import React from "react";
import { Card } from "../components/Card";
import { Typography } from "../components/Typography";
import { Line } from "../components/Line";
import { Spacer } from "../components/Spacer";
import { WorksInfo } from "../information/worksInfo";

export const Projects = () => {
  return (
    <div>
      {WorksInfo.map((info) => (
        <>
          <Typography type="subheader">{info.sectionTitle}</Typography>
          <Line width={80} />
          <Typography type="header">
            {info.title.map((title) => (
              <span key={title}>
                {title}
                <br />
              </span>
            ))}
          </Typography>
          {info.works.map((work) => (
            <Card
              key={work.title + work.subTitle}
              title={work.title}
              subTitle={work.subTitle}
              image={work.image}
              style={{ maxWidth: 800 }}
            >
              {work.description}
            </Card>
          ))}
          <Spacer height={100} />
        </>
      ))}
    </div>
  );
};
