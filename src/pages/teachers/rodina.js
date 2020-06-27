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
      text: "Российский государственный социальный университет"
    },
    {
      title: "Преподавательский опыт",
      text: (
        <List
          arr={[
            "Преводаватель РГСУ, курс «Социальная политика»",
            "Преподаватель МУМ, курс «Современная политика»",
            "Заместитель руководителя партийной школы «Единой России» в Московской области",
            "Преподаватель политической школы МОД"
          ]}
        />
      )
    },
    {
      title: "Научная деятельность",
      text: (
        <List
          arr={[
            "Проведение более 30 исследовательских проектов в области изучения политического и социального пространства",
            "Разработка и реализация нескольких десятков политических проектов, проектов в области политической рекламы и имиджа"
          ]}
        />
      )
    },
    {
      title: "Опыт работы в политических кампаниях",
      text: (
        <List
          arr={[
            "В течение 15 лет участвовала в различных политических кампаниях.",
            "Руководила кампаниями по выбору депутатов ГД, глав районов Московской области."
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Мария Родина: Публичный профиль</title>
        <meta name="keywords" content="Мария Родина: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Мария Родина"
            short="Кандидат политических наук, психолог, бизнес-тренер, политтехнолог, Директор фонда «Общественных инициатив»"
            image="/img/about/mariya-rodina.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Более 30 проектов",
                text:
                  "В области изучения политического и социального пространства"
              },
              {
                image: "/img/star.svg",
                title: "В течении 15 лет",
                text: "Учавствовала в различных политических кампаниях."
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
