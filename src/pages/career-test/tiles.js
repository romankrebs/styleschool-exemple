import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";
import { Link } from "react-router-dom";
import Video from "../../components/video";
import Button from "../../components/button-with-form";

const wStyles = theme => ({
  ...styles,
  grid1: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: "'image text'",
    alignItems: "stretch"
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: "'text image'",
    alignItems: "stretch"
  },
  gridText: {
    gridArea: "text",
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "rgb(110,110,110)",
    textAlign: "center",
    margin: 0,
    padding: "3rem",
    paddingTop: "5rem"
  },
  gridImage: {
    gridArea: "image",
    background: "rgb(220,220,220)"
  },
  boxImage: {
    margin: "0 auto",
    padding: "1rem",
    textAlign: "center"
  },
  svgButton: {
    border: "1px solid rgb(100,100,100)",
    background: "rgb(255,255,255)",
    color: "rgb(100,100,100)",
    padding: ".5rem 1rem",
    width: "max-content",
    margin: "2rem auto",
    fontSize: "1rem",
    fontWeight: 400,
    filter: "invert(0%)",
    textAlign: "center",
    transition: "filter .5s",
    "&:hover": {
      color: "rgb(0,0,0)",
      // background: "rgb(0,0,0)",
      filter: "invert(100%)",
      transition: "filter .5s"
    }
  },
  image: {
    maxHeight: 320
  },
  "@media (max-width: 959px)": {
    grid1: {
      gridTemplateAreas: "'image' 'text'",
      gridTemplateColumns: "1fr"
    },
    grid2: {
      gridTemplateAreas: "'image' 'text'",
      gridTemplateColumns: "1fr"
    },
    image: {
      maxWidth: "90%"
    }
  }
});

function Tile(props) {
  const { classes } = props;

  return props.content.map((el, key) => (
    <div className={classes.box}>
      <div className={key % 2 ? classes.grid1 : classes.grid2} key={key}>
        <div className={classes.gridImage}>
          {el.video ? (
            <div className={classes.boxImage}>
              <Video link={el.video} h={240} w={320} />
            </div>
          ) : (
            <div className={classes.boxImage}>
              <img src={el.image} alt="" className={classes.image} />
            </div>
          )}
        </div>
        <div className={classes.gridText}>
          {el.text}

          {el.buttonWithForm ? (
            <div
              style={{
                margin: "0 auto",
                paddingTop: "2rem",
                maxWidth: "max-content"
              }}
            >
              <Button white buttonText={el.buttonWithForm} />
            </div>
          ) : el.buttonLink ? (
            <a href={el.buttonLink}>
              <div className={classes.svgButton}>{el.buttonLinkContent}</div>
            </a>
          ) : (
            <Link to={el.link}>
              <div className={classes.button}>{el.linkText || "подробнее"}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  ));
}

export default withStyles(wStyles)(Tile);
