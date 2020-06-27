import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

function PaperBlock(props) {
  return (
    <div style={styles.paperOne}>
      {props.head ? (
        <h3 style={{ ...styles.h3, ...props.styleHead }}>{props.head}</h3>
      ) : null}
      {props.text}
    </div>
  );
}

function Table(props) {
  const { classes } = props;

  return (
    <div style={{ boxSizing: "border-box", ...props.styleBox }}>
      <Grid
        container
        justify="center"
        alignItems="stretch"
        // spacing={2}
        style={{ maxWidth: "100vw" }}
      >
        {props.head ? (
          <Grid item xs={12} md={12}>
            <h2
              className={classes.h2}
              style={{
                fontFamily: props.fontHead,
                ...props.styleHead
              }}
            >
              {props.head}
            </h2>
          </Grid>
        ) : null}
        {props.content.map((el, k) => (
          <Grid item xs={12} md={props.size || 6} key={k}>
            <PaperBlock
              head={el.head}
              text={el.text}
              styleHead={props.styleTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Table);
