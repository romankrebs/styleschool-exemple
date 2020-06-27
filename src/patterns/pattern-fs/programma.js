import React from "react";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

function Programma(props) {
  const { classes } = props;

  return (
    <div className={classes.box} style={{ paddingLeft: "1rem" }}>
      <h2
        className={classes.h2}
        style={{
          fontFamily: props.fontHead,
          textAlign: "left",
          ...props.styleHead
        }}
      >
        {props.head || "Программа обучения"}
      </h2>
      <Paragraph
        style={{ ...styles.p, paddingBottom: "0.5rem" }}
        content={props.content}
      />
    </div>
  );
}

export default withStyles(wStyles)(Programma);
