import React from "react";
import Button from "../../components/button-with-form";
import { Link } from "react-router-dom";
import { styles } from "./style";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;
// const font = {fontFamily: "PT Sans Narrow"};

const LinkCreater = props => {
  const { classes } = props;
  let result = "";

  if (props.link.type == "form") {
    result = (
      <div>
        <Button white buttonText={props.link.text} style={{ width: 120 }} />
      </div>
    );
  } else if (props.link.type == "outerLink") {
    result = (
      <a href={props.link.link}>
        <div className={classes.button}>{props.link.text}</div>
      </a>
    );
  } else if (props.link.type == "insideLink") {
    result = (
      <Link to={props.link.link}>
        <div className={classes.button}>{props.link.text}</div>
      </Link>
    );
  }
  return result;
};

export default withStyles(wStyles)(LinkCreater);
