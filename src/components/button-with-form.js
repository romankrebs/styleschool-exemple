import React from "react";
import { withStyles } from "@material-ui/styles";
import { VerticalForm } from "./forms";
import { Modal } from "@material-ui/core";
import Close from "./close-icon";

const styles = theme => ({
  button: {
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    padding: "0.7rem 1em",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "1rem",
    textAlign: "center",
    borderRadius: 4,
    border: "1px solid rgb(160,160,160)",
    transition: "0.5s color, 0.5s background",
    width: "max-content",
    margin: "0 auto",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(123,143,87)"
    }
  },
  black: {
    background: "rgb(0,0,0)",
    color: "rgb(255,255,255)",
    padding: "0.7rem 1rem",
    fontWeight: 400,
    fontSize: "1rem",
    textAlign: "center",
    border: "1px solid rgb(0,0,0)",
    borderRadius: 0,
    transition: "0.5s background",
    width: "max-content",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(100,100,100)"
    }
  },
  white: {
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    padding: "0.7rem 1rem",
    fontWeight: 400,
    fontSize: "1rem",
    textAlign: "center",
    borderRadius: 0,
    border: "1px solid rgb(100,100,100)",
    transition: "0.5s background, 0.5s color",
    width: "max-content",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(0,0,0)",
      color: "rgb(255,255,255)"
    }
  },
  modal: {
    background: "rgb(255,255,255)",
    width: 300,
    minHeight: 400,
    position: "absolute",
    top: "1em",
    left: "calc(50% - 150px)",
    padding: "1rem"
  },
  close: {
    padding: 0,
    textAlign: "right",
    cursor: "pointer"
  },
  "@media (max-width: 959px)": {
    modal: {
      width: "calc(100vw - 1rem)",
      height: "auto",
      position: "absolute",
      top: 0,
      left: 0
    }
  }
});

function Button(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const opener = () => {
    setOpen(true);
  };
  const closer = () => {
    setOpen(false);
  };

  return (
    <div style={{ maxWidth: "max-content" }}>
      <div
        className={
          props.black
            ? classes.black
            : props.white
              ? classes.white
              : classes.button
        }
        onClick={opener}
        style={props.style}
      >
        {props.buttonText || "записаться"}
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={closer}
      >
        <div className={classes.modal}>
          <div className={classes.close}>
            <span onClick={closer}>
              <Close color="rgb(200,200,200)" size={24} />
            </span>
          </div>
          <VerticalForm />
        </div>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(Button);
