import React from "react";
// import { Grid } from "@material-ui/core";
// import List from "../../components/list";
import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";
// import ButtonLink from "./button-black";

const wStyles = theme => ({
  ...styles,
  formats: {
    padding: "1rem",
    maxWidth: 667,
    margin: "0 auto",
    boxSizing: "border-box"
  },
  item: {
    background: "rgb(250,250,250)",
    padding: "2rem 1rem 1rem"
  },
  "@media (max-width: 959px)": {
    formats: {
      padding: "1rem",
      maxWidth: "100vw",
      boxSizing: "border-box"
    }
  }
});

function Formats(props) {
  const { classes } = props;

  return (
    <div className={classes.formats}>
      <h2
        className={classes.h2}
        style={{
          fontFamily: "PT Sans Narrow",
          paddingTop: 0
        }}
      >
        {props.head}
      </h2>
      {props.content.map((el, key) => (
        <div className={classes.item}>
          <div className={classes.imgBox}>{el.icon}</div>
          <h3 className={classes.h3format}>{el.title}</h3>
          <p
            style={{
              ...styles.p,
              textAlign: "justify"
            }}
          >
            {el.text}
          </p>
          {/* <ButtonLink center text="подробнее" /> */}
        </div>
      ))}
    </div>
  );
}

export default withStyles(wStyles)(Formats);
