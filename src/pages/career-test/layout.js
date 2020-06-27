import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Tiles from "./tiles";
import { styles } from "./styles";
import { content } from "./content";
import List from "../../components/list";
import WantToKnow from "../../components/want-to-know";

const wStyles = theme => ({
  ...styles,
  "@media (max-width: 959px)": {
    page: {
      padding: "0 1rem"
    }
  }
});

function Layout(props) {
  const { classes } = props;

  return (
    <div className={classes.page}>
      <h1 className={classes.h1}>{content.head}</h1>
      {/* <h2 className={classes.h2}>
        Преимущества участия в центре карьеры ВШСДТ:
      </h2> */}
      {/* <List style={styles.p} arr={content.advantage} /> */}
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <div className={classes.p}>{content.about}</div>
        </Grid>
      </Grid>
      <Tiles content={content.tiles} />
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <div className={classes.p}>{content.resumesText}</div>
        </Grid>
      </Grid>
      <Tiles content={content.tiles2} />
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <div className={classes.p}>{content.vacansiesText}</div>
        </Grid>
      </Grid>
      <Tiles content={content.tiles3} />
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <div className={classes.p}>{content.practicsText}</div>
        </Grid>
      </Grid>
      <WantToKnow />
    </div>
  );
}

export default withStyles(wStyles)(Layout);
