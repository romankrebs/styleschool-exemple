import React, { useState } from "react";
import { Grid, Drawer, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import WantToKnow from "./want-to-know-for-button";

const styles = theme => ({
  button: {
    position: "fixed",
    right: "2rem",
    bottom: 10,
    borderRadius: 2,
    background:
      "linear-gradient(180deg, rgb(187,144,41) 0%, rgb(179,128,31) 49%, rgb(207,164,81) 49%, rgb(187,144,41) 100%)",
    color: "rgb(255,255,255)",
    padding: 10,
    height: 44,
    width: 132,
    boxSizing: "border-box",
    textAlign: "center",
    display: "box",
    cursor: "pointer",
    transition: "0.5s color"
  },
  buttonImage: {
    margin: "0 auto"
  },
  "@media (max-width: 600px)": {
    button: {
      position: "fixed",
      bottom: -1,
      left: 0,
      width: "100vw",
      borderRadius: 0,
      textAlign: "center",
      height: "2.2rem",
      padding: "4px 10px",
      paddingTop: "0.4rem",
      background:
        "linear-gradient(180deg, rgb(187,144,41) 0%, rgb(179,128,31) 100%)"
    },
    buttonImage: {
      margin: "0 auto"
    },
    box: {
      maxWidth: "calc(100vw - 2rem)", // "auto",
      boxSizing: "border-box",
      right: 0
    }
  },
  hidde: {
    display: "none"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.2em",
    fontWeight: 500,
    color: "rgb(80,80,80)",
    textAlign: "center",
    padding: "1em 0",
    margin: 0
  },
  textButton: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(123,143,87)",
    textAlign: "center",
    padding: "1em 0",
    margin: 0,
    cursor: "pointer",
    "&:hover": {
      color: "rgb(123,193,87)"
    }
  },
  box: {
    padding: "1em",
    width: 400
  },
  drawer: {
    root: {
      maxWidth: "100vw"
    }
  }
});

function Button(props) {
  const { classes } = props;
  const [open, setDrawer] = useState(false);

  function Top(props) {
    return (
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={6} md={6} style={{ textAlign: "left" }}>
          {props.oneClose ? null : (
            <span>
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path
                  fill="rgb(200,200,200)"
                  d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z"
                />
              </svg>
            </span>
          )}
        </Grid>
        <Grid
          item
          xs={props.oneClose ? 12 : 6}
          md={props.oneClose ? 12 : 6}
          style={{ textAlign: props.oneClose ? "left" : "right" }}
        >
          <span onClick={() => setDrawer(false)} style={{ cursor: "pointer" }}>
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <path
                fill="rgb(200,200,200)"
                d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
              />
            </svg>
          </span>
        </Grid>
        <Grid item xs={12} md={12}>
          {props.children}
        </Grid>
      </Grid>
    );
  }

  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          setDrawer(false);
        }}
        className={{ ...classes.drawer.root }}
      >
        <div className={classes.box}>
          <Top oneClose>
            <WantToKnow
              noHead
              noSpace
              target="button"
              withForma
              fullWidth={12}
              inDrawer
            />
          </Top>
        </div>
      </Drawer>
      {props.textLink ? (
        <span style={props.style} onClick={() => setDrawer(true)}>
          {props.textLink}
        </span>
      ) : (
        <div
          className={open ? classes.hidde : classes.button}
          onClick={() => setDrawer(true)}
        >
          <div className={classes.buttonImage}>
            <Hidden mdUp>
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "1rem",
                  color: "rgb(255,255,255)",
                  verticalAlign: "top",
                  paddingTop: 2
                }}
              >
                #ВШСДТ&emsp;
              </span>
              <span style={{ verticalAlign: "middle" }}>
                <svg width="18" height="18" viewBox="0 0 24 20">
                  <path
                    fill="rgb(255,255,255)"
                    d="M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z"
                  />
                </svg>
              </span>
              &emsp;
              <span style={{ verticalAlign: "middle" }}>
                <svg width="18" height="18" viewBox="0 0 24 20">
                  <path
                    fill="rgb(255,255,255)"
                    d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                  />
                </svg>
              </span>
              &emsp;
              <span style={{ verticalAlign: "middle" }}>
                <svg width="18" height="18" viewBox="0 0 24 20">
                  <path
                    fill="rgb(255,255,255)"
                    d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </span>
            </Hidden>
            <Hidden smDown>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="rgb(255,255,255)"
                  d="M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z"
                />
              </svg>
              &emsp;
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="rgb(255,255,255)"
                  d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                />
              </svg>
              &emsp;
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="rgb(255,255,255)"
                  d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </Hidden>
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(Button);
