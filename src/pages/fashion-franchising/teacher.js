import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={6}>
        <h2
          style={{
            fontSize: "1.6em",
            color: "rgb(100,100,100)",
            textAlign: "center",
            fontWeight: 600
          }}
        >
          Письменская Елена
        </h2>
        <p
          style={{
            textAlign: "left",
            color: "rgb(100,100,100)",
            lineHeight: "1.5em"
          }}
        >
          Основатель консалтингового агентства Kids Fashion Retail. Эксперт в
          создании новых и развитии существующих брендов детской одежды.
          Постоянный спикер отраслевых выставок и форумов. Преподаватель в
          Fashion Factory Education, Русской школе стиля, МГУ им Ломоносова,
          Центре креативных индустрий программа МВА &ndash; Индустрия Мода.
        </p>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: 20,
          paddingTop: 0,
          textAlign: "center"
        }}
      >
        <div
          style={{
            overflow: "hidden",
            borderRadius: "50%",
            border: "8px solid rgb(125,200,250)",
            maxWidth: 350,
            maxHeight: 350,
            margin: "0 auto"
          }}
        >
          <img
            src="/img/fashion-franchising/teacher.jpg"
            alt="Письменская Елена"
            style={{
              maxWidth: 350
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}
