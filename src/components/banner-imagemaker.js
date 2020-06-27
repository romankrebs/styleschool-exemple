import React from "react";
// import Grid from "@material-ui/core/Grid";
import Banner, { BannerBadge } from "./banner";
// import Icon from "@material-ui/core/Icon";

export default function Component(props) {
  const content = false;
  // (
  //   <React.Fragment>
  //     <Grid container justify="center" alignItems="center">
  //       <Grid
  //         item
  //         xs={6}
  //         md={6}
  //         style={{ color: "rgb(255,255,255)", textAlign: "center" }}
  //       >
  //         <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Очно</span>
  //         <br />с 16 октября 2019
  //       </Grid>
  //       <Grid
  //         item
  //         xs={6}
  //         md={6}
  //         style={{ color: "rgb(255,255,255)", textAlign: "center" }}
  //       >
  //         <span style={{ fontSize: "1.3em", fontWeight: 700 }}>
  //           Дистанционно
  //         </span>
  //         <br />с 23 октября 2019
  //       </Grid>
  //     </Grid>
  //   </React.Fragment>
  // );
  const slide = (
    <React.Fragment>
      <BannerBadge>
        <img
          src="/img/calendar.svg"
          alt=""
          style={{ height: 16, marginBottom: -3 }}
        />{" "}
        11 мес
      </BannerBadge>
    </React.Fragment>
  );
  return (
    <Banner
      head={
        <span>
          Имиджмейкер. Второе высшее
          <br />
          Профподготовка
        </span>
      }
      bkgImage="url(/img/i2v-test/fullscreen-600.jpg) top left/cover"
      bkgHead="rgba(247,240,205,0.6)"
      content={content}
      // message="Открытая встреча 13.06.2019 в 19:00"
      slide={slide}
      //link="https://styleschool.ru/second-degree-imagemaker"
      link="/second-degree-imagemaker"
    />
  );
}
