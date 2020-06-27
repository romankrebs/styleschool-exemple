import React from "react";
import { Grid } from "@material-ui/core";

function List(props) {
  return (
    <div>
      <Grid container justify="space-between">
        {props.content.map((el, key) => (
          <React.Fragment>
            <Grid item xs={1} md={1}>
              {props.image}
            </Grid>
            <Grid item xs={11} md={11} key={key} style={props.style}>
              {el}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default List;
