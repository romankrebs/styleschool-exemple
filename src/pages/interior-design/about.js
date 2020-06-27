import React from "react";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "rgba(200,200,200,1.0)" }}
    >
      <Grid item xs={12} md={9}>
        <div
          style={{
            color: "rgb(50,50,50)",
            padding: 20,
            fontSize: "1em",
            textAlign: "left"
          }}
        >
          Интенсивный курс по дизайну интерьера поможет понять суть профессии и
          принципы дизайн-мышления, приобрести первые необходимые навыки для
          тех, кто планирует пройти профессиональное обучение, но при этом ранее
          дизайну не обучался.
        </div>
      </Grid>
    </Grid>
  );
}
