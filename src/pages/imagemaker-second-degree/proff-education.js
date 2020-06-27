import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Slider from "../../components/slider-images";
import ScrollableAnchor from "react-scrollable-anchor";

const ProffEducation = props => {
  const cont = [
    {
      src: "/img/diplom.jpg"
    },
    {
      src: "/img/diplom-vshsdt.jpg"
    },
    {
      src: "/img/diplom.jpg"
    },
    {
      src: "/img/diplom-vshsdt.jpg"
    }
  ];

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <ScrollableAnchor id="diplom">
            <h2
              style={{
                // fontFamily: "Roboto",
                fontSize: "1.8em",
                color: "rgb(100,0,0)",
                textAlign: "center",
                fontWeight: 500,
                margin: 8,
                padding: "12px 0",
                ...props.styleHead
              }}
            >
              Академическое образование + реальная практика
            </h2>
          </ScrollableAnchor>
        </Grid>
        <Grid item xs={12} md={6}>
          <p
            style={{
              margin: 0,
              padding: 0,
              fontWidth: 400,
              fontFamily: "Roboto",
              fontSize: "1em",
              color: "rgb(100,100,100)",
              lineHeight: "1.5em"
            }}
          >
            Комплексная программа обучения в области имидж-технологий и
            стилистики. Основа &ndash; отличная теоретическая подготовка в
            сочетании с формированием творческого мышления и регулярной
            практикой создания модных и стильных образов. Результат: системные
            знания, новые возможности профессионального развития, технологии
            работы с клиентами и модными трендами.
          </p>
          <p
            style={{
              fontWidth: 400,
              fontSize: "1em",
              fontFamily: "Roboto",
              color: "rgb(100,100,100)"
            }}
          >
            Это важно!
          </p>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={5} md={4}>
              <img
                src="/img/RGSU.png"
                alt="Российский государственный социальный университет"
                style={{ height: 32 }}
              />
            </Grid>
            <Grid item xs={7} md={8}>
              <p style={{ color: "rgb(100,100,100)" }}>
                Стратегический партнер ВШС &ndash; Российский государственный
                социальный университет.
              </p>
            </Grid>
          </Grid>
          <Paper
            style={{
              background: "rgba(245,223,223,1.0)",
              padding: 8,
              font: "400 0.9em",
              color: "rgb(100,100,100)"
            }}
          >
            <span>
              Выпускникам открывается возможность получить два диплома, ВШСДТ и
              РГСУ. Условие: освоение дополнительного модуля с углубленным
              изучением политтехнологий, их использования в формировании имиджа
              публичных персон.
            </span>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Slider content={cont} play={3000} infinite={true} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProffEducation;
