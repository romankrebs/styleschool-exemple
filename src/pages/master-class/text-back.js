import React from "react";
import TextBack from "../../components/textback";
import { Grid } from "@material-ui/core";

function Socnet(props) {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={12}>
          <h2
            style={{
              fontFamily: "Roboto",
              fontSize: "1.6rem",
              fontWeight: 500,
              textAlign: "center",
              color: "rgb(100,100,100)",
              padding: "1.6rem 0",
              margin: 0
            }}
          >
            Получайте уведомления об Online трансляциях. Подпишитесь в одной из
            указанных соц сетей
          </h2>
        </Grid>
        <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
          <TextBack />
        </Grid>
      </Grid>
    </div>
  );
}

export default Socnet;
