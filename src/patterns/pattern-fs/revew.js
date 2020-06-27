import React from "react";
import { Grid } from "@material-ui/core";
// import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  image: {
    maxWidth: "100%"
  },
  imgBox: {
    textAlign: "center",
    position: "sticky",
    top: 1
  },
  left: {
    padding: 0,
    paddingRight: "1rem"
  },
  right: {
    padding: 0,
    paddingLeft: "1rem"
  },
  box: {
    paddingTop: "2rem"
  },
  "@media (max-width: 959px)": {
    left: {
      padding: "1rem"
    },
    right: {
      padding: "1rem"
    }
  }
});

function Review(props) {
  const { classes } = props;
  let leftSize = props.left ? 5 : 7;
  let rightSize = props.left ? 7 : 5;
  let image = (
    <div className={classes.imgBox}>
      <img src={props.image} className={classes.image} alt={props.altImage} />
      {props.imageComment ? <div>{props.imageComment}</div> : null}
    </div>
  );
  let text = props.text;
  let leftContent = props.left ? image : text;
  let rightContent = props.left ? text : image;

  return (
    <div className={classes.box}>
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={leftSize} className={classes.left}>
          {leftContent}
        </Grid>
        <Grid item xs={12} md={rightSize} className={classes.right}>
          {rightContent}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Review);
