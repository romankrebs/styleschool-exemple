import React, { useState } from "react";
import { Grid, useMediaQuery } from "@material-ui/core";

const Tiles = props => {
  const [state, setState] = useState(false);
  const size = useMediaQuery("(max-width:599px)");

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <div
            style={{
              background: `url(${props.image1}) center / cover no-repeat`,
              height: 281,
              textAlign: "center",
              color: props.colorText
                ? props.colorText.left
                : "rgb(255,255,255)",
              fontWeight: 700,
              fontSize: "1.6em",
              fontFamily: "inherit",
              cursor: "pointer"
            }}
            onClick={() => setState(state !== 1 ? 1 : false)}
          >
            {props.title1}
          </div>
        </Grid>
        {size ? (
          <Grid
            item
            xs={12}
            md={12}
            style={{
              maxHeight: state === 1 ? 10000 : 0,
              transition: "max-height 1s",
              overflow: "hidden"
            }}
          >
            {props.content1}
          </Grid>
        ) : null}
        <Grid item xs={12} sm={6} md={6}>
          <div
            style={{
              background: `url(${props.image2}) center / cover no-repeat`,
              height: 281,
              textAlign: "center",
              color: props.colorText
                ? props.colorText.right
                : "rgb(255,255,255)",
              fontWeight: 700,
              fontSize: "1.6em",
              fontFamily: "inherit",
              cursor: "pointer"
            }}
            onClick={() => setState(state !== 2 ? 2 : false)}
          >
            {props.title2}
          </div>
        </Grid>
        {size ? null : (
          <Grid
            item
            xs={12}
            md={12}
            style={{
              maxHeight: state === 1 ? 10000 : 0,
              transition: "max-height 1s",
              overflow: "hidden"
            }}
          >
            {props.content1}
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={12}
          style={{
            maxHeight: state === 2 ? 10000 : 0,
            transition: "max-height 1s",
            overflow: "hidden"
          }}
        >
          {props.content2}
        </Grid>
      </Grid>
    </div>
  );
};

export default Tiles;
