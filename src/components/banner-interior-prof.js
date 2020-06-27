import React from "react";
import Banner, { BannerBadge } from "./banner";
// import { Grid } from "@material-ui/core";
// import { datas } from "../pages/living-interior-design-and-decoration/dates";

export default function Component(props) {
  const text = false; /* (
    <React.Fragment>
      <Grid container spacing={2} alignItems="flex-start">
        {datas.online[0] ? (
          <Grid item xs={6} md={6}>
            <span style={{ fontSize: "1.3em", fontWeight: 700 }}>
              Дистанционно
            </span>
            <br />с {datas.online[0]}
          </Grid>
        ) : null}
        {datas.ofline[0] ? (
          <Grid item xs={6} md={6}>
            <span style={{ fontSize: "1.3em", fontWeight: 700 }}>Очно</span>
            <br />с {datas.ofline[0]}
          </Grid>
        ) : null}
      </Grid>
    </React.Fragment>
  ); */
  const slide = (
    <BannerBadge>
      <img
        src="/img/calendar.svg"
        alt=""
        style={{ height: 16, marginBottom: -3 }}
      />{" "}
      9&nbsp;мес.
    </BannerBadge>
  );

  return (
    <Banner
      head={
        <span>
          Дизайн и декорирование интерьеров
          <br />
          Профподготовка
        </span>
      }
      bkgImage="url(/img/banners/banner_design_interior_prof.jpg)"
      bkgHead="rgba(209,232,232,1.0)"
      content={text}
      slide={slide}
      //link="https://styleschool.ru/living-interior-design-and-decoration"
      link="/living-interior-design-and-decoration"
    />
  );
}
