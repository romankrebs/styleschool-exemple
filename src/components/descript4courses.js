import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Slider from "./slider-images-2";

const styles = theme => ({
  imageBox: {
    textAlign: "center",
    // paddingRight: "1.4em",
    paddingTop: 0,
    paddingLeft: "1.4em",
    position: "sticky",
    top: 1
  },
  "@media (max-width: 959px)": {
    imageBox: {
      paddingLeft: 0,
      paddingTop: "1.4em"
    }
  }
});

const Descript = function(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container alignItems="stretch" /* spacing={3} */>
        <Grid item xs={12} md={12}>
          <div>{props.block1}</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>{props.block2}</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.imageBox} style={{ ...props.styleImageBox }}>
            {props.slider ? (
              <Slider
                content={props.slides}
                mobileContent={props.slidesMobile}
              />
            ) : (
              <img
                style={{
                  maxWidth: "100%",
                  ...props.styleImage
                }}
                src={props.img}
                alt={props.alt}
              />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Descript);
