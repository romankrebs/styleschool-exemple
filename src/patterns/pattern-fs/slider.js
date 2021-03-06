import React from "react";
import Slide from "react-reveal/Slide";
import { withStyles } from "@material-ui/styles";
import { Grid, Hidden } from "@material-ui/core";

const styles = theme => ({
  box: {
    maxWidth: 950,
    margin: "0 auto",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    overflowX: "hidden"
  },
  slide: {
    width: "auto",
    height: 300,
    overflow: "hidden",
    display: "inline-block"
  },
  img: {
    maxHeight: 300
  },
  arrow: {
    height: 300
  },
  blockImg: {
    height: 560
  },
  "@media (max-width: 959px)": {
    box: {
      maxWidth: "90%", // "95 vw",
      margin: "0 auto",
      pddingTop: "2rem",
      paddingBottom: "4rem",
      maxHeight: 800 //198
    },
    slide: {
      width: 196,
      height: 198
    },
    img: {
      maxWidth: 190,
      maxHeight: 120
    },
    arrow: {
      height: 198
    },
    blockImg: {
      height: 360
    }
  }
});

function Slider(props) {
  const { classes } = props;
  const len = props.slides.length;
  const [slide, setSlide] = React.useState(0);

  const move = s => () => {
    if (slide + s == len) {
      setSlide(0);
      return true;
    }
    if (slide + s < 0) {
      setSlide(len - 1);
      return true;
    }
    setSlide(slide + s);
    return true;
  };

  return (
    <div className={classes.box}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={1} md={1}>
          <div
            style={{
              cursor: "pointer"
            }}
            onClick={move(-1)}
          >
            <Hidden smDown>
              <svg version="1.1" width="48" height="48" viewBox="0 0 24 24">
                <path
                  fill="rgb(100,100,100)"
                  d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                />
              </svg>
            </Hidden>
            <Hidden mdUp>
              <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="rgb(150,150,150)"
                  d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                />
              </svg>
            </Hidden>
          </div>
        </Grid>
        <Grid item xs={10} md={10}>
          <div className={classes.blockImg}>
            {props.slides.map(
              (element, i) =>
                i == slide ? (
                  <React.Fragment>
                    <Slide duration={500} right>
                      {element}
                    </Slide>
                  </React.Fragment>
                ) : null
            )}
          </div>
        </Grid>
        <Grid item xs={1} md={1}>
          <div
            style={{
              cursor: "pointer"
            }}
            onClick={move(1)}
          >
            <Hidden smDown>
              <svg version="1.1" width="48" height="48" viewBox="0 0 24 24">
                <path
                  fill="rgb(100,100,100)"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </Hidden>
            <Hidden mdUp>
              <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="rgb(150,150,150)"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </Hidden>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Slider);
