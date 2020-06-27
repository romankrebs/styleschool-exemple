import React from "react";
import Vk from "./button-vk";
import Facebook from "./button-facebook";
import Instagram from "./button-instagram";
import Youtube from "./button-youtube";

const Socnet = props => {
  const color = {
    hover: "rgb(100,0,0)",
    out: "rgb(123,143,87)"
  };

  return (
    <span style={{ marginBottom: -4 }}>
      <Vk color={color.out} hoverColor={color.hover} />
      <Facebook color={color.out} hoverColor={color.hover} />
      <Instagram color={color.out} hoverColor={color.hover} />
      &ensp;
      <Youtube color={color.out} hoverColor={color.hover} />
    </span>
  );
};

export default Socnet;
