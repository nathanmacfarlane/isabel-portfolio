import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import useOnClickOutside from "use-onclickoutside";
import { Typography } from "./Typography";
import { useHistory } from "react-router-dom";
import { useScreen } from "../hooks/useScreen";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isSmall } = useScreen();

  const ref = React.useRef(null);
  useOnClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const { push } = useHistory();

  const changeRoute = (route) => {
    push(route);
    setIsOpen(false);
  };

  const variants = {
    open: { width: isSmall ? 200 : "20vw" },
    closed: { width: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      style={{
        width: 50,
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgb(230, 226, 235)",
        borderRight: "1px solid gray",
        alignContent: "center",
        display: "inline",
        verticalAlign: "middle",
        cursor: !isOpen && "pointer",
      }}
      onClick={() => {
        if (!isOpen) {
          setIsOpen(true);
        }
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {isOpen ? (
          <CloseIcon
            style={{ paddingTop: 15 }}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <MenuIcon
            style={{ paddingTop: 15 }}
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {isOpen && (
        <div
          style={{
            height: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: "20vh",
            }}
          >
            <div>
              <Typography
                type="header"
                style={{ fontWeight: 500 }}
                onClick={() => changeRoute("/")}
              >
                Works
              </Typography>
              <Typography
                type="header"
                style={{ fontWeight: 500 }}
                onClick={() => changeRoute("/about")}
              >
                About
              </Typography>
              <Typography
                type="header"
                style={{ fontWeight: 500 }}
                onClick={() => changeRoute("/art")}
              >
                Art
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              position: "absolute",
              bottom: "20vh",
            }}
          >
            <div>
              <Typography type="subheader">Reno, NV 89511</Typography>
              <Typography type="subheader">ilien7057@gmail.com</Typography>
              <Typography type="subheader">resume</Typography>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
