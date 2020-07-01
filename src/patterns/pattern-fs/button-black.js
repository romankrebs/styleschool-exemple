import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const wStyles = theme => ({
  button: {
    border: "1px solid rgb(100,100,100)",
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    padding: "0.7rem 1rem",
    width: "max-content",
    transition: "0.5s color, 0.5s background",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(0,0,0)"
    }
  },
  box: {
    padding: "1rem"
  }
});

function Button(props) {
  const { classes } = props;
  let stylePosition = props.style;
  let boxStyle = {};
  let boxClass = classes.box;

  if (props.center) {
    stylePosition = {
      margin: "0 auto",
      ...props.style
    };
  } else if (props.right) {
    stylePosition = {
      margin: 0,
      marginLeft: "auto",
      ...props.style
    };
    boxStyle = { paddingRight: 0 };
  } else {
    boxClass = "";
  }

  return (
    <div className={boxClass} style={boxStyle}>
      {props.linkInside ? (
        <Link to={props.link}>
          <div className={classes.button} style={stylePosition}>
            {props.text}
          </div>
        </Link>
      ) : (
        <a href={props.link}>
          <div className={classes.button} style={stylePosition}>
            {props.text}
          </div>
        </a>
      )}
    </div>
  );
}

export default withStyles(wStyles)(Button);
