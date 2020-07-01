import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  grid: {
    display: "grid",
    gridTemplateRows: "max-content",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: "'prog var'",
    gridRowGap: "8rem",
    justifyItems: "center"
  },
  programma: {
    gritArea: "prog",
    borderTop: "1px solid rgb(240,240,240)",
    paddingRight: "1rem"
  },
  variants: {
    gridArea: "var",
    background: "rgb(220,220,220)"
  },
  "@media (max-width: 959px)": {
    grid: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "max-content max-content",
      justifyItems: "center",
      gridTemplateAreas: "'prog'\
        'var'",
      gridRowGap: "4rem"
    },
    programma: {
      borderTop: 0,
      paddingRight: 0
    }
  }
});

function GridProg(props) {
  const { classes } = props;

  return (
    <div className={classes.grid}>
      <div className={classes.programma}>{props.programma}</div>
      <div className={classes.variants}>{props.variants}</div>
    </div>
  );
}

export default withStyles(styles)(GridProg);
