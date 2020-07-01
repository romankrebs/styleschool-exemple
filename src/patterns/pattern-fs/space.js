import React from "react";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  space: {
    height: "8rem"
  },
  half: {
    height: "4rem"
  },
  double: {
    height: "16rem"
  },
  size2: {
    height: "3.2rem"
  },
  size3: {
    height: "6rem"
  },
  betweenBlock: {
    height: "8rem"
  },
  insideBlock: {
    height: "2rem"
  },
  "@media (max-width: 959px)": {
    space: {
      height: "4rem"
    },
    half: {
      height: "1rem"
    },
    double: {
      height: "4rem"
    },
    betweenBlock: {
      height: "4rem"
    },
    insideBlock: {
      height: "1.5rem"
    },
    size3: {
      height: "2.5rem"
    }
  }
});

function Space(props) {
  const { classes } = props;

  let nameClass = classes.space;

  if (props.half) nameClass = classes.half;
  if (props.size2) nameClass = classes.size2;
  if (props.double) nameClass = classes.double;
  if (props.inside) nameClass = classes.insideBlock;
  if (props.after) nameClass = classes.size3;

  return (
    <div
      className={nameClass}
      style={{ maxWidth: "100%", margin: 0, padding: 0 }}
    />
  );
}

export default withStyles(wStyles)(Space);
