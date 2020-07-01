import React from "react";
import { Grid } from "@material-ui/core";

function Illustration(props) {
  return (
    <div>
      <Grid container spacing={2} justify={props.justify || "center"}>
        {props.imgs.map((el, key) => (
          <Grid item style={{ textAlign: "center" }} key={key}>
            <div>
              <img
                src={el.image}
                alt={el.text}
                style={{ maxWidth: props.size }}
              />
            </div>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "1em",
                fontWeight: 400,
                color: "rgb(120,120,120)",
                textAlign: "center"
              }}
            >
              {el.text}
            </p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Illustration;
