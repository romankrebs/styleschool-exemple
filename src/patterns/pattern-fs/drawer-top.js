import React from "react";
import { withStyles } from "@material-ui/styles";
import Close from "../../components/close-icon";

const wStyles = theme => ({
  box: {
    background: "rgb(0,0,0)",
    height: "max-content",
    transition: "0.5s height",
    overflowY: "hidden",
    witdth: "100%"
  },
  hidden: {
    height: 0,
    background: "rgb(0,0,0)",
    overflowY: "hidden",
    width: "100%"
  },
  "@media: (max-width: 959px)": {}
});

function DrawerTop(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(props.open);

  return (
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
      <div>{props.children}</div>
    </div>
  );
}

export default withStyles(wStyles)(DrawerTop);
