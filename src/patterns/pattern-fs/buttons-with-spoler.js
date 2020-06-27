import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  button: {
    border: "1px solid rgb(100,100,100)",
    padding: "0.5rem 1rem",
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    transition: "0.5s color, 0.5s background",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(0,0,0)",
      transition: "0.5s color, 0.5s background"
    }
  },
  buttonSelect: {
    border: "1px solid rgb(100,100,100)",
    padding: "0.5rem 1rem",
    background: "rgb(0,0,0)",
    color: "rgb(255,255,255)",
    transition: "0.5s color, 0.5s background",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(100,100,100)",
      background: "rgb(255,255,255)",
      transition: "0.5s color, 0.5s background"
    }
  },
  "@media (max-width: 959px)": {
    button: {
      border: "1px solid rgb(100,100,100)",
      padding: "0.5rem 1rem",
      background: "rgb(255,255,255)",
      color: "rgb(100,100,100)",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(100,100,100)",
        background: "rgb(255,255,255)"
      }
    },
    buttonSelect: {
      border: "1px solid rgb(100,100,100)",
      padding: "0.5rem 1rem",
      background: "rgb(0,0,0)",
      color: "rgb(255,255,255)",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(255,255,255)",
        background: "rgb(0,0,0)"
      }
    }
  }
});

function ButtonsWithSpoler(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const size = props.count == 3 ? 4 : 3;

  return (
    <div>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={size}>
          <div
            className={open == 1 ? classes.buttonSelect : classes.button}
            onClick={() => setOpen(open != 1 ? 1 : false)}
          >
            {props.button1}
          </div>
        </Grid>
        <Grid item xs={12} md={size}>
          <div
            className={open == 2 ? classes.buttonSelect : classes.button}
            onClick={() => setOpen(open != 2 ? 2 : false)}
          >
            {props.button2}
          </div>
        </Grid>
        <Grid item xs={12} md={size}>
          <div
            className={open == 3 ? classes.buttonSelect : classes.button}
            onClick={() => setOpen(open != 3 ? 3 : false)}
          >
            {props.button3}
          </div>
        </Grid>
        {props.count == 3 ? null : (
          <Grid item xs={12} md={size}>
            <div
              className={open == 4 ? classes.buttonSelect : classes.button}
              onClick={() => setOpen(open != 4 ? 4 : false)}
            >
              {props.button4}
            </div>
          </Grid>
        )}
      </Grid>
      <div
        style={{
          maxHeight: open == 1 ? 700 : 0,
          transition: "0.5s max-height",
          overflow: "hidden",
          maxWidth: 600,
          margin: "0 auto"
        }}
      >
        {props.spoler1}
      </div>
      <div
        style={{
          maxHeight: open == 2 ? 700 : 0,
          transition: "0.5s max-height",
          overflow: "hidden",
          maxWidth: 600,
          margin: "0 auto"
        }}
      >
        {props.spoler2}
      </div>
      <div
        style={{
          maxHeight: open == 3 ? 700 : 0,
          transition: "0.5s max-height",
          overflow: "hidden",
          maxWidth: 600,
          margin: "0 auto"
        }}
      >
        {props.spoler3}
      </div>
      {props.count == 3 ? null : (
        <div
          style={{
            maxHeight: open == 4 ? 700 : 0,
            transition: "0.5s max-height",
            overflow: "hidden",
            maxWidth: 600,
            margin: "0 auto"
          }}
        >
          {props.spoler4}
        </div>
      )}
    </div>
  );
}

export default withStyles(wStyles)(ButtonsWithSpoler);
