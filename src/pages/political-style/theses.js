import React from "react";
import Grid from "@material-ui/core/Grid";

import Numerique from "../../components/numerique";

export default function Theses() {
  return (
    <Grid container justify="center" alignItems="center" style={{}}>
      <Grid item xs={12} md={4} style={{ padding: 20, paddingTop: 40 }}>
        <Numerique
          style={{
            box: {},
            text: {},
            number: {}
          }}
          number="1"
          text="Практики создания имиджа публичной персоны"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20, paddingTop: 40 }}>
        <Numerique
          style={{
            box: {},
            text: {},
            number: {}
          }}
          number="2"
          text="Психология лидерства. Как управлять имиджем"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20, paddingTop: 40 }}>
        <Numerique
          style={{
            box: {},
            text: {},
            number: {}
          }}
          number="3"
          text="Как продать свои знания по созданию имиджа"
        />
      </Grid>
    </Grid>
  );
}
