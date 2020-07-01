import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  image: {
    maxWidth: 290
  },
  "@media (,ax-width: 959px)": {
    image: {
      maxWidth: 200
    }
  }
});

function Img(props) {
  const { classes } = props;

  return (
    <img src={props.src} className={classes.image} alt={props.alt || " "} />
  );
}

export default withStyles(styles)(Img);
