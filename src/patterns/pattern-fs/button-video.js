import React from "react";
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import Video from "../../components/video";
import Close from "../../components/close-icon";

const wStyles = theme => ({
  button: {
    border: "1px solid rgb(100,100,100)",
    color: "rgb(255,255,255)",
    background: "rgb(0,0,0)",
    padding: "0.7rem 1rem",
    width: "max-content",
    textAlign: "center",
    transition: "0.5s color, 0.5s background",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(255,255,255)",
      color: "rgb(100,100,100)"
    }
  },
  close: {
    textAlign: "right",
    padding: "1rem",
    cursor: "pointer",
    width: "calc(100vw - 40px)"
  },
  drawerBox: {
    background: "rgb(0,0,0)",
    padding: 0,
    paddingBottom: "1rem",
    height: 600,
    overflowX: "hidden"
  },
  box: {
    background: "rgb(0,0,0)",
    transition: "0.5s height",
    overflow: "hidden",
    width: "100vw"
  },
  black: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1099,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    transition: "0.5s background"
  },
  noBlack: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1099,
    width: "100vw",
    height: "0vh",
    background: "rgba(0,0,0,0)",
    transition: "0.5s background"
  },
  hidden: {
    height: 0,
    background: "rgb(0,0,0)",
    overflow: "hidden",
    width: "100vw",
    transition: "0.5s height"
  },
  "@media (max-width: 959px)": {
    box: {
      height: 800
    }
  }
});

function VideoBox(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="top">
        <div className={open ? classes.box : classes.hidden}>
          <div
            onClick={() => setOpen(false)}
            style={{
              textAlign: "right",
              paddingRight: "1rem",
              paddingTop: "1rem"
            }}
          >
            <Close size={32} color="rgb(120,120,120)" />
          </div>
          <div>
            <div
              style={{
                width: "max-content",
                margin: "0 auto"
              }}
            >
              {props.slider ? (
                props.slider
              ) : (
                <Video link={props.linkVideo} w="480px" h="360px" />
              )}
            </div>
          </div>
        </div>
      </Drawer>
      <div
        className={classes.button}
        style={props.style}
        onClick={() => setOpen(true)}
      >
        {props.text || "prevew"}
      </div>
    </React.Fragment>
  );
}

export default withStyles(wStyles)(VideoBox);
