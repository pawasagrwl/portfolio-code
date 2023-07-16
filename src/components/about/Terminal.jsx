import React from "react";
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function terminalText(bio) {
  return (
    <>
      <p>
        <span style={{ color: "rgb(0,255,164)" }}>{"pawasagrwl"} $</span>{" "}
        cat {bio.title}
      </p>
      <p>
        {bio.text}
      </p>
    </>
  );
}

function Terminal(props) {
  const { bio } = props;

  return (
    <Box
      component={"section"}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: "100%", md: "100%" }}
      borderRadius={"0.5rem"}
      mb={"1.5rem"}
    >
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
      >  
        <i className={classNames(iconClass, Style.red)} />
        <i className={classNames(iconClass, Style.amber)} />
        <i className={classNames(iconClass, Style.green)} />
      </Box>
      <Box
        py={{ xs: "0.5rem", md: "1rem" }}
        px={{ xs: "1rem", md: "1.5rem" }}
        borderRadius={"0 0 0 0"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {terminalText(bio)}
      </Box>
    </Box>
  );
}

export default Terminal;
