import React from "react";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";

export default function Teach() {
  var content = [
    {
      title: "Преподавательский опыт",
      text: (
        <List
          arr={[
            "Студия обучения «Revlon» (Москва)",
            "Модельные агентства Елены Лукмановой и Премьера (Уфа)"
          ]}
        />
      )
    },
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Уфимский Государственный Авиационный Технический Университет 2001г.",
            <span>
              Образовательный центр &laquo;Имидж-студия "Nice"&raquo;, 1998г.
              (Россия)
            </span>
          ]}
        />
      )
    },
    {
      title: "Дополнительное образование",
      text: (
        <div>
          <p>
            <b>
              Регулярное повышение квалификации с профессионалами индустрии, в
              том числе у
            </b>
          </p>
          <List
            arr={[
              "Александра Кувватова (Россия)",
              "Школа Surface (Прага)",
              "Нанары Березиной (Россия)",
              "Татьяны Золоташко (Украина)",
              "Натальи Шик (Россия)",
              "Дениса Карташова и Наталии Найды (Россия)"
            ]}
          />
          <p>
            Яна Ахметова &mdash; профессиональный визажист-стилист с 19-летним
            опытом работы в области моды и красоты. Яна сделала успешную
            профессиональной карьеру в Уфе, потом Москве. А с 2007 живет и
            работает в г.&nbsp;Прага, Чехия. В портфолио Яны проекты в рамках
            школы Revlon с ведущими мастерами и селебрити, в том числе с
            Александром Васильевым, Уксусовым, Тришкиным, с последующими
            публикациями съемок в журнале Dolores.
          </p>
        </div>
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Яна Ахметова: Публичный профиль</title>
        <meta name="keywords" content="Яна Ахметова: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Яна Ахметова"
            short={
              <span>
                Руководитель студии профессионального макияжа «ProMakeupArtist».
                Соавтор и постоянный тренер образовательного проекта
                ProMakeupArtist School Prague (Прага, Чехия).
              </span>
            }
            image="/img/about/yana-ahmetova.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Преподавательский опыт",
                text: "Студия обучения «Revlon» (Москва)"
              },
              {
                image: "/img/star.svg",
                title: "Преподавательский опыт",
                text: "Модельные агентства Елены Лукмановой и Премьера (Уфа)"
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
