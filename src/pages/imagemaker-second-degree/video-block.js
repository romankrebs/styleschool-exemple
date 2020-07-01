import React from "react";
import { Grid } from "@material-ui/core";
import Youtube from "./youtube";

function Video(props) {
  return (
    <div
      style={{
        padding: "2rem 0"
      }}
    >
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        {props.videos.map((el, k) => (
          <Grid item xs={12} md={6} key={k}>
            <Youtube link={el.link} />
            {el.comment ? (
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "rgb(100,100,100)",
                  textAlign: "left",
                  padding: "0.5rem 0",
                  margin: 0
                }}
              >
                {el.comment}
              </p>
            ) : null}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Video;
