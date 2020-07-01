import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  grid: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1.5fr 1.5fr 2fr",
    gridTemplateAreas: "'date video text'",
    alignItems: "stretch",
    alignContent: "center",
    background:
      "linear-gradient(to right, rgb(220,220,220) 0%, rgb(220,220,220) 90%, rgb(255,255,255) 100%)"
  },
  gridImage: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1.5fr 2fr",
    gridTemplateAreas: "'date video text'",
    alignItems: "stretch",
    alignContent: "center",
    background:
      "linear-gradient(to right, rgb(220,220,220) 0%, rgb(220,220,220) 90%, rgb(255,255,255) 100%)"
  },
  gridItem: {},
  date: {
    gridArea: "date",
    padding: "1rem",
    background: "rgb(220,220,220)"
  },
  video: {
    gridArea: "video",
    padding: "1rem",
    alignSelf: "center",
    background: "rgb(220,220,220)"
  },
  text: {
    gridArea: "text",
    padding: "1rem",
    background: "rgb(255,255,255)"
  },
  "@media (max-width: 595px)": {
    grid: {
      display: "grid",
      gridTemplateRows: "auto auto auto",
      gridTemplateColumns: "1fr",
      gridTemplateAreas: "'date' \
        'text' \
        'video'",
      background: "rgb(220,220,220)"
    },
    gridImage: {
      display: "grid",
      gridTemplateRows: "auto auto auto",
      gridTemplateColumns: "1fr",
      gridTemplateAreas: "'date' \
        'text' \
        'video'",
      background: "rgb(220,220,220)"
    },
    video: {
      justifySelf: "center"
    }
  }
});

function Grid(props) {
  const { classes } = props;

  return (
    <div className={props.image ? classes.gridImage : classes.grid}>
      <div className={classes.date}>{props.date}</div>
      <div className={classes.video}>{props.video}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}

export default withStyles(styles)(Grid);
