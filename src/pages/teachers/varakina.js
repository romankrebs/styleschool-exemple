import React from "react";
import Footer from "../../components/footer";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";
import Helmet from "react-helmet";

export default function Teach() {
  var content = [
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Воронежский государственный институт искусств, Исполнительский Факультет",
            "Российский институт культурологии, аспирантура",
            "Российский институт культурологии, докторантура",
            <span>
              Доктор культурологии по специальности &laquo;Теория и история
              культуры&raquo;
            </span>
          ]}
        />
      )
    },
    {
      title: "Дополнительное образование",
      text: (
        <List
          arr={[
            "Повышение квалификации по направлениям «Страноведение и международный туризм»",
            "«Инновационные методы и технологии в преподавании дисциплин искусствоведческого блока»"
          ]}
        />
      )
    },
    {
      title: "Разработка и преподавание курсов",
      text: (
        <div>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              fontWeight: 700,
              color: "rgb(140,140,140)",
              textAlign: "left",
              padding: "5px 0",
              margin: 0
            }}
          >
            В государственных и негосударственных Вузах:
          </h3>
          <List
            arr={[
              "в области теории и истории культуры (гендерология и феминология, древние культуры и цивилизации, мировая художественная культура, материальная культура и искусство)",
              "в области дизайна (история искусства, история дизайна, науки и техники, история стилей в интерьере, философия архитектуры)",
              "в области архитектуры (историко-архитектурное наследие России, теория архитектуры, современная архитектура."
            ]}
          />
        </div>
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Галина Варакина: Публичный профиль</title>
        <meta name="keywords" content="Галина Варакина: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Галина Варакина"
            short={false}
            image="/img/about/galina-varakina.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Более 20 лет",
                text: "опыт преподавательской деятельности"
              },
              {
                image: "/img/school.svg",
                title: "Член редакционной коллегии",
                text: "журнала «Культура и цивилизация»"
              },
              {
                image: "/img/seal.svg",
                title: "Эксперт",
                text:
                  "Российского научного и Российского гуманитарного научного фондов"
              },
              {
                image: "/img/book-open-page-variant.svg",
                title: "Автор",
                text:
                  "более 60-ти публикаций, в том числе учебников, монографий, научных статей"
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
