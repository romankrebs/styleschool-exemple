import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  head: {
    fontSize: "2.5em"
  },
  "@media (max-width: 600px)": {
    head: {
      fontSize: "1.4em"
    }
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        background: props.background,
        margin: 0,
        ...props.styles.fullscreen
      }}
    >
      <Grid
        item
        xs={10}
        md={props.sizeCentralBlock ? props.sizeCentralBlock : 6}
        style={{ paddingTop: 40, ...props.styles.fullBox }}
      >
        <Paper
          style={{
            textAlign: "center",
            padding: 20,
            paddingBottom: 10,
            background: props.styles.bkgBlockColor,
            color: props.styles.textColor,
            ...props.styles.style
          }}
        >
          <h1
            style={{ fontFamily: "Lora", ...props.headStyle }}
            className={classes.head}
          >
            {props.head1}
          </h1>
          <div
            style={{
              height: 1,
              width: "50%",
              marginLeft: "25%",
              backgroundColor: props.styles.lineColor,
              textAlign: "center"
            }}
          />
          <div
            style={{
              textAlign: "center",
              // fontFamily: "Roboto",
              paddingTop: 24,
              ...props.styles.descript
            }}
          >
            {props.descript}
          </div>
          <p
            style={{
              textAlign: "center",
              // fontFamily: "Roboto",
              ...props.styleFormsEducation
            }}
          >
            {props.formsEducation}
          </p>
          {props.license ? (
            <p
              style={{
                textAlign: "center",
                color: "rgb(200,200,200)",
                fontSize: "0.9em",
                fontFamily: "Roboto"
              }}
            >
              {props.license}
            </p>
          ) : null}
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        {props.bottomLine}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Header);
