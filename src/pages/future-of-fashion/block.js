import React from "react";
import { styles } from "./styles";

function Block(props) {
  return (
    <div style={{ padding: "1em 0", ...props.styleBox }}>
      <h2 style={styles.h2}>{props.title}</h2>
      {props.content}
    </div>
  );
}

export default Block;
