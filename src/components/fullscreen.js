import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { style } from "./stylesCourse";

const styles = theme => style;

function Header(props) {
  const { classes } = props;
  return (
    <div
      className={classes.fullscreen}
      style={{ backgroundImage: props.background }}
    >
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          xs={10}
          sm={10}
          md={6}
          className={classes.headBox}
          style={{ ...props.stylesHeadBox }}
        >
          <Paper
            style={{
              textAlign: "center",
              padding: "2em",
              background: props.colorBkg,
              color: props.colorText,
              ...props.styleBox
            }}
          >
            <h1
              className={props.headBig ? classes.h1bigPadding : classes.h1}
              style={{
                color: props.colorText,
                ...props.styleHead
              }}
            >
              {props.head}
            </h1>
            <div
              style={{
                height: 1,
                width: "50%",
                marginLeft: "25%",
                backgroundColor: props.colorText,
                textAlign: "center"
              }}
            />
            {props.descript ? (
              <div
                className={classes.p}
                style={{
                  textAlign: "center",
                  color: props.colorText,
                  ...props.styleDescript
                }}
              >
                {props.descript}
              </div>
            ) : null}
            <p
              className={classes.p}
              style={{
                paddingTop: "1em",
                textAlign: "center",
                color: props.colorText,
                ...props.styleFormsEducation
              }}
            >
              {props.formsEducation}
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Header);
