import React from "react";
import { Grid } from "@material-ui/core";
// import Paragraph from "../../components/p-array";

export default function Component() {
  return (
    <div>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={12}>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.4em",
              fontWeight: 700,
              color: "rgb(100,100,100)"
            }}
          >
            8 встреч | 32 академ. часа | ОЧНО | ONLINE
            {/* <img
              src="/img/psychology-of-style/ill01.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            /> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
