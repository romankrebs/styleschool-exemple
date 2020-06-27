import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  button: {
    padding: "2px 8px",
    background: "rgb(255,255,255)",
    border: "1px solid rgb(100,100,100)",
    borderRadius: ".7rem",
    textAlign: "center",
    width: "max-content",
    fontSize: ".8rem",
    color: "rgb(100,100,100)",
    tarnsition: "color .5s, background .5s",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(0,0,0)"
    }
  }
});

function Phone(props) {
  const { classes } = props;
  const [phone, showPhone] = React.useState(false);

  return (
    <span>
      {phone ? (
        <a href={`tel:${props.phone}`}>{props.phone}</a>
      ) : (
        <span>
          {props.phone.slice(0, 10)}… &emsp;
          <span className={classes.button} onClick={() => showPhone(true)}>
            показать телефон
          </span>
        </span>
      )}
    </span>
  );
}

export default withStyles(styles)(Phone);
