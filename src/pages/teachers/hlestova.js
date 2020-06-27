import React from "react";
import Footer from "../../components/footer";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";

export default function Teach() {
  var content = [
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Институт экономики и культуры, специализация «Связи с общественностью»",
            "Русская школа управления, курс «Магистр делового администрирования»",
            "Школа стилистов Персона, специализация Стилист-имиджмейкер",
            "Институт репутационных технологий Art & Image , специальность «Визуальный мерчендайзер»",
            "Fashion Consulting Group (Визуальный мерчендайзинг, повышение квалификации)"
          ]}
        />
      )
    },
    {
      title: "Профессиональный опыт",
      text:
        "Более 5 лет проведения обучающих курсов и вебинаров по Визуальному мерчендайзингу и Стилистике женского образа. Частное консультирование."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Маргарита Хлестова: Публичный профиль</title>
        <meta name="keywords" content="Маргарита Хлестова: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Маргарита Хлестова"
            short="Визуальный мерчендайзер, имидж-консультант, преподаватель Высшей школы стилистики."
            image="/img/teachers/hlestova.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Более 12 лет",
                text: "Опыт работы в fashion retail"
              },
              {
                image: "/img/star.svg",
                title: "Более 8 лет",
                text:
                  "Руководства департаментом мерчендайзинга крупного универмага в г. Москве"
              }
            ]}
            content={content}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
