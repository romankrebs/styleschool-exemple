import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  button: {
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    padding: "0.25em 0.5em",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "0.9rem",
    textAlign: "center",
    borderRadius: 4,
    border: "1px solid rgb(160,160,160)",
    transition: "0.5s color, 0.5s background",
    width: "max-content",
    margin: "0.5rem auto",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(123,143,87)"
    }
  },
  black: {
    color: "rgb(100,100,100)",
    background: "rgb(255,255,255)",
    transition: "0.5s color, 0.5s background",
    "&:hover": {
      color: "rgb(255,255,255)",
      background: "rgb(0,0,0)"
    }
  },
  box: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    box: {
      // padding: "0 1rem"
    }
  }
});

class Spoler extends React.Component {
  state = {
    open: false
  };

  openClose = () => {
    return this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <p
          className={classes.box}
          style={{
            margin: 0,
            textAlign: "justify",
            ...this.props.styleBoxShort
          }}
        >
          {this.props.noBull ? "" : <span>&bull;&nbsp;</span>}
          <span
            style={{
              fontWeight: 400,
              fontSize: this.state.open ? "1.2em" : "1.1em", //"1em",
              transition: "font-size 0.5s, color 0.5s",
              color: this.state.open ? "rgb(50,50,50)" : "rgb(100,100,100)",
              fontFamily: "inherit",
              margin: 0,
              ...this.props.styleShort
            }}
          >
            {this.props.short}
          </span>
          &nbsp;&nbsp;
          {this.props.detail !== "" ? (
            this.props.button ? (
              <div
                className={
                  this.props.black
                    ? classes.button + " " + classes.black
                    : classes.button
                }
                onClick={this.openClose}
                style={this.props.buttonStyle}
              >
                {this.state.open
                  ? this.props.textBack || "Кратко"
                  : this.props.textNext || "Подробнее"}
              </div>
            ) : (
              <span
                style={{
                  color: !this.props.color ? "rgb(160,0,0)" : this.props.color,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "0.9em"
                }}
                onClick={this.openClose}
              >
                {this.state.open
                  ? this.props.textBack || "Кратко"
                  : this.props.textNext || "Подробнее"}
              </span>
            )
          ) : (
            <span />
          )}
        </p>
        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            heigth: 0,
            transition: "max-height 0.5s",
            overflow: "hidden",
            // fontFamily: "Roboto",
            fontSize: this.props.normalFont ? "1em" : "0.8em",
            maxHeight: this.state.open ? this.props.size || 200 : 0,
            ...this.props.styleDetail
          }}
        >
          {this.props.detail}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Spoler);
