import React from "react";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import List from "../../components/list";
import Helmet from "react-helmet";
import Page from "../../components/page";

export default function Teach() {
  var content = [
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Диплом по специальности «Дизайн одежды» г. Красноярск (1992)",
            "Диплом о профессиональной переподготовке в области имидж-консалтинга Высшей школы стилистики (Москва)"
          ]}
        />
      )
    },
    {
      title: "Профессиональный опыт",
      text: (
        <div>
          <p>
            Участие в конкурсах и фестивалях дизайнеров, Гран-при регионального
            этапа конкурса молодых дизайнеров одежды Новая Россия 21 век, 2000г.
          </p>
          <List
            arr={[
              "Ведущий художник-модельер регионального Дома Моделей одежд",
              "Ведущая программы о стиле и моде на ТВ.",
              "Художник-дизайнер собственной студии авторской одежды.",
              <span>
                Преподаватель курсов по имиджу и стилю с 2008 года.
                Специализация &ndash; психологический и ассоциативный
                имиджмейкинг. Автор программы «Психология красоты» (помощь в
                решении психологических проблем работой с имиджем) для системы
                психологических клубов.
              </span>
            ]}
          />
        </div>
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Татьяна Фомина: Публичный профиль</title>
        <meta name="keywords" content="Татьяна Фомина: Публичный профиль" />
      </Helmet>
      <Page lable="Татьяна Фомина" lableMobile="Татьяна Фомина">
        <Grid container justify="center" alignItems="flex-start">
          <Grid item style={{ padding: 20 }}>
            <Teacher
              head="Татьяна Фомина"
              short={
                <span>
                  Художник-модельер, преподаватель и практикующий
                  имидж-консультант. В Высшей школы стилистики ведет занятия в
                  рамках дисциплины &laquo;Профессинальные
                  имидж-технологии&raquo;
                </span>
              }
              image="/img/about/tatiyana-fomina.jpg"
              tiles={[
                {
                  image: "/img/star.svg",
                  title: "Более 20 лет",
                  text: "Опыт работы"
                },
                {
                  image: "/img/trophy.svg",
                  title: "Достижения",
                  text:
                    "Гран-при регионального этапа конкурса молодых дизайнеров одежды Новая Россия 21 век, 2000г."
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
