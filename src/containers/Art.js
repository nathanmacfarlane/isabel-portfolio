import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
import useOnClickOutside from "use-onclickoutside";
import { ArtInfo } from "../artInfo/artInfo";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useScreen } from "../hooks/useScreen";

const ArtItem = ({ image, title, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} width="100%" height="100%" />
      <Typography type="subheader">{title}</Typography>
    </div>
  );
};

const useKeyPress = (key, action) => {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
};

const FullScreenImage = ({ image, onClose }) => {
  const ref = React.useRef(null);

  useOnClickOutside(ref, onClose);
  useKeyPress("Escape", onClose);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.61)",
        backdropFilter: "blur(5px)",
      }}
    >
      <img
        ref={ref}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        src={image}
      />
      <div style={{ position: "absolute", top: 5, right: 5 }}>
        <IconButton>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
};

export const Art = () => {
  const [image, setImage] = useState();

  const { isSmall } = useScreen();

  return (
    <div>
      {image && (
        <FullScreenImage image={image} onClose={() => setImage(undefined)} />
      )}
      <div style={{ width: isSmall ? "100%" : "75%" }}>
        <Typography type="header" style={{ fontWeight: 500 }}>
          Exploration in Design
        </Typography>
        <Typography type="paragraph">
          Design has become a form of rest and exploration in my life as well.
          When I'm not a designer at work, I am a designer at rest, using what
          I've learned to explore new dimensions of design.
        </Typography>
        <Spacer />
        <Grid spacing={isSmall ? 3 : 6} container>
          {ArtInfo.map(({ image, title, id }) => (
            <Grid xs={isSmall ? 12 : 4} key={id} item>
              <ArtItem
                image={image}
                onClick={() => setImage(image)}
                title={title}
              />
            </Grid>
          ))}
        </Grid>
        <Spacer />
      </div>
    </div>
  );
};
