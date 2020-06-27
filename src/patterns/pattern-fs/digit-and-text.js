import React from "react";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  digit: {
    fontSize: "6rem",
    color: "rgb(250,250,250)",
    fontWeight: 900,
    textAlign: "left"
  },
  text: {
    position: "relative",
    top: "-5rem",
    left: "25%",
    fontSize: "1.5rem",
    fontWeight: 500,
    maxWidth: "max-content",
    margin: 0,
    color: "rgb(100,100,100)"
  },
  comment: {
    position: "relative",
    top: "-5rem",
    left: "6rem",
    fontSize: "1rem",
    fontWeight: 400,
    margin: 0,
    color: "rgb(100,100,100)",
    width: "max-content"
  },
  "@media (max-width: 959px)": {
    comment: {
      position: "relative",
      top: "-5rem",
      left: "11rem",
      fontSize: "1rem",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      width: "max-content"
    },
    digit: {
      fontSize: "6rem",
      color: "rgb(250,250,250)",
      fontWeight: 900,
      textAlign: "left",
      paddingLeft: "2rem"
    }
  }
});

function DigitalText(props) {
  const { classes } = props;

  return (
    <div>
      <div
        className={classes.digit}
        style={{
          fontFamily: "Playfair Display"
        }}
      >
        {props.digit}
      </div>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.comment}>{props.comment}</div>
    </div>
  );
}

export default withStyles(wStyles)(DigitalText);
