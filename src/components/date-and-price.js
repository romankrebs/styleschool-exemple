import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ScrollableAnchor from "react-scrollable-anchor";
import Button from "./button-reserved";

const wStyles = theme => ({
  boxsLeft: {
    padding: 0,
    paddingRight: "0.7em"
  },
  boxsRight: {
    padding: 0,
    paddingLeft: "0.7em"
  },
  "@media (max-width: 959px)": {
    boxsRight: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: "0.7em",
      paddingBottom: "0.7em"
    },
    boxsLeft: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: "0.7em",
      paddingBottom: "0.7em"
    }
  }
});

function Dates(props) {
  const { classes } = props;

  const styles = {
    h3: props.styleSubtitle
      ? props.styleSubtitle
      : {
          fontFamily: props.font || "Roboto",
          fontSize: "1.6em",
          color: "rgb(100,100,100)",
          textAlign: "center",
          fontWeight: 500,
          margin: 0,
          padding: "12px 0"
        },
    h2: props.styleHead
      ? props.styleHead
      : {
          textAlign: "left",
          color: "rgb(100,100,100)"
        }
  };

  return (
    <Grid container justify="flex-start" alignItems="stretch">
      <Grid item xs={12} md={12}>
        <ScrollableAnchor id={props.anchor}>
          <h2 style={styles.h2}>{props.head}</h2>
        </ScrollableAnchor>
      </Grid>
      <Grid item xs={12} md={6} className={classes.boxsLeft}>
        <Paper
          style={{
            padding: 10,
            minHeight: props.height || "14em"
          }}
        >
          <h3 style={{ ...styles.h3, textAlign: "center" }}>{props.title}</h3>
          <p
            style={{
              background: "rgb(240,240,240)",
              fontSize: "1em",
              textAlign: "center",
              color: "rgb(80,80,80)",
              padding: "0.2em"
            }}
          >
            {props.date}
          </p>
          <p
            style={{
              fontSize: "1em",
              textAlign: "center",
              color: "rgb(100,100,100)"
            }}
          >
            {props.leftText}
          </p>
          <Button link={props.link} />
        </Paper>
      </Grid>
      {props.rightText ? (
        <Grid item xs={12} md={6} className={classes.boxsRight}>
          <Paper
            style={{
              padding: "40px 10px",
              minHeight: props.height || "14em",
              ...props.styeleRightBox
            }}
          >
            {props.rightText}
          </Paper>
        </Grid>
      ) : null}
    </Grid>
  );
}

export default withStyles(wStyles)(Dates);
