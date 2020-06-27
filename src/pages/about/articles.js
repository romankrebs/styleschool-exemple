import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import H2 from "../../components/head1";
import Card from "../../components/card";

export default function Libraries() {
  var libs = [
    {
      image: "/img/about/a-couturie.jpg",
      descript: "Понедельник, 29 Январь 2018, 19:43",
      head: "Кутюрье мечты",
      link: "/blog/kuturye-mechty"
    },
    {
      image: "/img/about/a-platie.jpg",
      descript: "Вторник, 30 Май 2017, 19:20",
      head: "Платье, которое идет всем.",
      link: "/blog/platye-kotoroe-idet-vsem"
    },
    {
      image: "/img/about/a-familylook.jpg",
      descript: "Вторник, 30 Май 2017, 17:09",
      head: "Два сапога – ПАРА, или пресловутый family look.",
      link: "/blog/dva-sapoga-para-ili-preslovutyj-family-look"
    },
    {
      image: "/img/about/a-childfashion.jpg",
      descript: "Понедельник, 13 Февраль 2017, 11:25",
      head: "Детская мода: вчера и сегодня",
      link: "/blog/detskaya-moda-vchera-i-segodnya"
    },
    {
      image: "/img/about/a-irony.jpg",
      descript: "Четверг, 22 Декабрь 2016, 12:30",
      head: "Ирония судьбы – или еще одна статья о новогодних нарядах",
      link: "/blog/ironiya-sudby-ili-esche-odna-statiya-o-novogodnih-naryadah"
    },
    {
      image: "/img/about/a-fashion.jpg",
      descript: "Вторник, 15 Ноябрь 2016, 13:21",
      head: "Мода в мешке",
      link: "/blog/moda-v-meshke"
    }
  ];

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <Grid item xs={12} md={12}>
          <H2 content="Статьи" />
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
      <div style={{ width: "100%", textAlign: "center", padding: 20 }}>
        <Link to="/expert-articles">
          <p
            style={{
              background: "rgb(123,143,87)",
              boxSizing: "border-box",
              height: 42,
              width: 140,
              color: "rgb(255,255,255)",
              fontSize: 18,
              borderRadius: 4,
              margin: "0 auto",
              textAlign: "center",
              paddingTop: 6
            }}
          >
            Все статьи
          </p>
        </Link>
      </div>
    </div>
  );
}
