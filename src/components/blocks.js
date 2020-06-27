import React from "react";

import Grid from "@material-ui/core/Grid";

function Block(props) {
  return (
    <Grid container alignItems="stretch">
      <Grid item xs={3} md={3} style={{ paddingTop: 20 }}>
        <img src={props.image} alt="" style={{ height: 36 }} />
      </Grid>
      <Grid item xs={9} md={9}>
        <h4 style={{ textAlign: "left", ...props.style.head }}>{props.head}</h4>
        <p style={{ margin: 0, padding: 0, ...props.style.text }}>
          {props.text}
        </p>
      </Grid>
    </Grid>
  );
}

export default function Blocks(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          image={props.a.image}
          head={props.a.head}
          text={props.a.text}
          style={props.style}
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          image={props.b.image}
          head={props.b.head}
          text={props.b.text}
          style={props.style}
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          image={props.c.image}
          head={props.c.head}
          text={props.c.text}
          style={props.style}
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          image={props.d.image}
          head={props.d.head}
          text={props.d.text}
          style={props.style}
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          image={props.e.image}
          head={props.e.head}
          text={props.e.text}
          style={props.style}
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          image={props.f.image}
          head={props.f.head}
          text={props.f.text}
          style={props.style}
        />
      </Grid>
    </Grid>
  );
}
