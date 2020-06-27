import React from "react";
import Grid from "@material-ui/core/Grid";

import { HorizontalForm } from "../../components/forms";
import H2 from "../../components/head1";

export default function Component() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        item
        xs={12}
        md={12}
        style={{
          background: "rgba(248,245,233,1)",
          padding: 20
        }}
      >
        <H2 content="Оставьте заявку или задайте вопрос" />
        <HorizontalForm />
      </Grid>
    </Grid>
  );
}
