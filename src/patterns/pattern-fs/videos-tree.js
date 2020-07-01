import React from "react";
import { Grid } from "@material-ui/core";
import Video from "../../components/video";

function Videos(props) {
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        {props.videos.map((el, k) => (
          <Grid item xs={12} md={4} key={k}>
            <Video
              link={el}
              w={300}
              h={300}
              style={{
                margin: "0 auto",
                width: "max-content"
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Videos;
