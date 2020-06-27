import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { VerticalForm } from "../../components/forms";
import H2 from "../../components/head1";

export default function FormBack(params) {
  return (
    <div>
      <Grid
        container
        justify="flex-end"
        alignItems="center"
        style={{
          background: "url(/img/about/feedbg.jpg) top center / cover no-repeat"
        }}
      >
        <Grid item xs={12} md={6} style={{ padding: 30 }}>
          <Paper
            style={{
              padding: 15,
              background: "rgba(255,255,255,0.7)"
            }}
          >
            <H2
              content="Оставить заявку на обучение"
              style={{
                textAlign: "left",
                margin: 0,
                padding: 10
              }}
            />
            <VerticalForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
