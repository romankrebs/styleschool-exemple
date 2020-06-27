import React from "react";
import Paragraph from "../../components/p-array";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

function Programma(props) {
  const { classes } = props;

  return (
    <div className={classes.box} style={{ paddingTop: "3rem" }}>
      <Paragraph
        style={{ ...styles.p, paddingBottom: "0.5rem" }}
        content={props.content}
      />
    </div>
  );
}

export default withStyles(wStyles)(Programma);
