import React from "react";
import { Grid } from "@material-ui/core";
import Slider from "../../components/slider-images";
import Imagemaker from "../../components/banner-imagemaker";
import { Link } from "react-router-dom";
import { style } from "../information-about-educational-organization/style";

const font = "Roboto";

const News = props => {
  const styles = {
    p: {
      fontFamily: font,
      fontSize: "1em",
      color: "rgb(100,100,100)"
    }
  };

  const content = [
    {
      right: (
        <div style={{ textAlign: "center" }}>
          <img
            src="/img/diplom.jpg"
            alt="Диплом ВШСДТ"
            style={{ maxWidth: 300 }}
          />
        </div>
      ),
      left: (
        <span style={styles.p}>
          Программа коллаборация ВШСДТ и Российского государственного
          социального университета, полный курс подготовки стилистов + практика
          + университетский диплом в августе и сентябре
        </span>
      )
    },
    {
      left: <Imagemaker />,
      right: (
        <p style={styles.p}>
          17 сентября коллаборация &ndash; обучение стилистов имиджмейкеру.{" "}
          <Link to="/second-degree-imagemaker">Имиджмейкер. Второе высшее</Link>
          .
        </p>
      )
    },
    {
      left: (
        <p style={styles.p}>
          Любовь Троепольская &ndash; выпускница, преподаватель ВШСДТ, наставник
          наших студентов и успешный fashion stylist, kreator бренда L&VetN. В
          проекте для журнала &laquo;Scorpio Jin&raquo;, базирующемся в Майами,
          Флориде, США
        </p>
      ),
      right: (
        <Slider
          content={[
            { src: "/img/news/troepolskaya-01-01.jpg" },
            { src: "/img/news/troepolskaya-01-02.jpg" },
            { src: "/img/news/troepolskaya-01-03.jpg" },
            { src: "/img/news/troepolskaya-01-04.jpg" }
          ]}
          play={3000}
        />
      )
    },
    {
      left: (
        <div style={{ textAlign: "center" }}>
          <img
            src="/img/root-test/simpozium-2019.jpg"
            alt="Съезд стилистов-имиджмейкеров"
            style={{ maxWidth: 300 }}
          />
        </div>
      ),
      right: (
        <span style={{ fontFamily: "inherit" }}>
          Приглашаем вас на Международный Съезд стилистов-имиджмейкеров в Сочи с
          4 по 6 октября 2019г., #ВШСДТ является партнерами события, для наших
          студентов и подписчиков по ПРОМОКОДУ STYLESCHOOL2019 предоставляется
          скидка 3000 руб. на все тарифы, кроме видеозаписи съезда.
          <a
            href="http://image-stilist.ru/"
            target="_black"
            style={{ fontFamily: "inherit" }}
          >
            Подробнее о событие на сайте
          </a>
          .
        </span>
      )
    },
    {
      left: (
        <p style={styles.p}>
          Работы Любови Троепольской для парижского журнала BeautyMute
        </p>
      ),
      right: (
        <Slider
          content={[
            { src: "/img/news/troepolskaya-02-01.jpg" },
            { src: "/img/news/troepolskaya-02-02.jpg" },
            { src: "/img/news/troepolskaya-02-03.jpg" },
            { src: "/img/news/troepolskaya-02-04.jpg" },
            { src: "/img/news/troepolskaya-02-05.jpg" },
            { src: "/img/news/troepolskaya-02-06.jpg" },
            { src: "/img/news/troepolskaya-02-07.jpg" }
          ]}
          play={3000}
        />
      )
    }
  ];

  return (
    <div>
      <div
        style={{
          fontWeight: 500,
          fontFamily: font,
          fontSize: "1.5em",
          textAlign: "center",
          color: "rgb(0,0,0)",
          margin: "24px 0"
        }}
      >
        Новости
      </div>
      <Grid container spacing={4} alignItems="center">
        {content.map((el, i) => (
          <React.Fragment>
            <Grid item xs={12} md={6}>
              {el.left}
            </Grid>
            <Grid item xs={12} md={6}>
              {el.right}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default News;
