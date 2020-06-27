import React from "react";
import TwoBlocks from "./two-blocks";
import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

function Head(props) {
  const { classes } = props;

  return (
    <div>
      <TwoBlocks
        left={
          <div className={classes.box}>
            <h1 className={classes.h1d}>{props.titleHead}</h1>
            <h1 className={classes.h1}>{props.head}</h1>
            <p className={classes.p} style={styles.quote}>
              {props.quote}
            </p>
            <p
              className={`${classes.p} ${classes.author}  ${classes.spaceBot}`}
            >
              {props.author}
            </p>
            <p
              style={{
                ...styles.p,
                ...styles.spaceBot
              }}
            >
              {props.descript}
            </p>
            {/* <p className={classes.p}>{props.duration}</p> */}
          </div>
        }
        right={
          <div className={classes.box}>
            <img src={props.image} alt="" className={classes.image} />
            <p className={classes.p} style={{ textAlign: "right" }}>
              {props.imageComment}
            </p>
          </div>
        }
      />
    </div>
  );
}

export default withStyles(wStyles)(Head);
