import React from "react";
import Button from "../../components/button-with-form";
import { Link } from "react-router-dom";
import { styles } from "./style";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

export function Linker(props) {
  let component;
  var link;
  if (props.link) {
    link = props.link.link.toString();
  } else {
    return props.children;
  }
  if (link.indexOf("http") >= 0) {
    component = <a href={link}>{props.children}</a>;
  } else {
    component = <Link to={link}>{props.children}</Link>;
  }
  return component;
}

const LinkCreater = props => {
  const { classes } = props;
  let result = "";

  if (props.link.type == "form") {
    result = (
      <div>
        <Button white buttonText={props.link.text} style={{ width: 120 }} />
      </div>
    );
  } else {
    result = (
      <Linker link={props.link}>
        <div className={classes.button}>{props.link.text}</div>
      </Linker>
    );
  }
  return result;
};

export default withStyles(wStyles)(LinkCreater);
