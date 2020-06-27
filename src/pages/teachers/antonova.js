import React from "react";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import List from "../../components/list";
import Page from "../../components/page";

export default function Teach() {
  var content = [
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Факультет журналистики МГУ, специальность «Радиожурналист»",
            "ИРТ «Art&Image», специальность «Имиджмейкер»",
            "Факультет психологии НИУ ВШЭ, специальность «Психолог»"
          ]}
        />
      )
    },
    {
      title: "Опыт работы",
      text: (
        <List
          arr={[
            "Имидж-консультант, шопер, стилист: частная практика",
            "Стилизация и проведение частных фотосессий, рекламных и модных съемок",
            <span>
              Эксперт, стилист и фотограф: издательские дома ACMG
              (SNC&nbsp;Media) «Коммерсант», ТК&nbsp;«Мир»
            </span>,
            "Преподавательская деятельность: ведущий преподаватель факультета стиля Санкт-Петербургской школы телевидения в Москве",
            "Автор и ведущая тренингов и семинаров по стилю"
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Анна Антонова: Публичный профиль</title>
        <meta name="keywords" content="Анна Антонова: Публичный профиль" />
      </Helmet>
      <Page lable="Анна Антонова" lableMobile="Анна Антонова">
        <Grid container justify="center" alignItems="flex-start">
          <Grid item style={{ padding: 20 }}>
            <Teacher
              head="Анна Антонова"
              short="Стилист-имиджмейкер, психолог, фотограф, журналист, преподаватель Высшей школы стилистики"
              image="/img/about/anna-antonova.jpg"
              tiles={[
                {
                  image: "/img/star.svg",
                  title: "Эксперт, стилист и фотограф:",
                  text:
                    "Издательские дома ACMG (SNC Media) «Коммерсант», ТК «Мир»"
                }
              ]}
              content={content}
            />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
