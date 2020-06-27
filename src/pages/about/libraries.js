import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import Card from "../../components/card";

export default function Libraries() {
  var libs = [
    {
      image: "/img/about/l-shepel.jpg",
      descript: "Пятница, 2 Декабрь 2016, 12:23",
      head: "Шепель В.М. Профессия мыслитель. Креативное пособие по аналитике.",
      link: "/blog/professiya-myslitel"
    },
    {
      image: "/img/about/l-andreeva.jpg",
      descript: "Среда, 21 Октябрь 2015, 14:55",
      head: "Андреева А.Н. Дизайнерские бренды в фэшн-бизнесе.",
      link: "/blog/dizaynerskie-brendy-v-fashion-biznese"
    },
    {
      image: "/img/about/l-noel.jpg",
      descript: "Среда, 21 Октябрь 2015, 13:36",
      head: "Ноэль Паломо-Ловински. Мода и модельеры.",
      link: "/blog/moda-i-modeliery"
    },
    {
      image: "/img/about/l-ermilova.jpg",
      descript: "Среда, 21 Октябрь 2015, 13:36",
      head: "Ермилова Д.Ю. История домов моды.",
      link: "/blog/istoriya-domov-mody"
    },
    {
      image: "/img/about/l-gandl.jpg",
      descript: "Среда, 21 Октябрь 2015, 13:36",
      head: "Стивен Гандл. Гламур.",
      link: "/blog/glamur"
    },
    {
      image: "/img/about/l-ribeyro.jpg",
      descript: "Среда, 21 Октябрь 2015, 13:35",
      head: "Эйлин Рибейро. Мода и мораль.",
      link: "/blog/moda-i-moral"
    }
  ];

  return (
    <div>
      <Grid container justify="center" style={{ padding: 20 }}>
        <Grid item xs={12} md={12}>
          <H2 content="Рекомендуемая литература" />
        </Grid>
        {libs.map((n, i) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={n.image}
              descript={n.descript}
              link={n.link}
              head={n.head}
              key={i}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
