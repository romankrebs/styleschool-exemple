import React from "react";
import Grid from "@material-ui/core/Grid";
import Banner from "../../components/banner";
//import Icon from "@material-ui/core/Icon";

export default function Component() {
  const content = (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          xs={6}
          md={6}
          style={{ color: "rgb(255,255,255)", textAlign: "center" }}
        >
          <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Очно</span>
          <br />с 20 февраля 2019
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          style={{ color: "rgb(255,255,255)", textAlign: "center" }}
        >
          <span style={{ fontSize: "1.3em", fontWeight: 700 }}>
            Дистанционно
          </span>
          <br />с 13 февраля 2019
        </Grid>
      </Grid>
    </React.Fragment>
  );
  const slide = (
    <p
      style={{
        padding: 5,
        paddingTop: 0,
        width: "100%",
        background: "rgba(255,255,255,0.7)"
      }}
    >
      <span>event</span>
      &nbsp; 11 мес
    </p>
  );
  return (
    <Banner
      head="Имиджмейкер. Второе высшее"
      bkgImage="url(/img/fullscreen.jpg) top left/cover"
      bkgHead="rgb(247,240,205)"
      content={content}
      slide={slide}
    />
  );
}
