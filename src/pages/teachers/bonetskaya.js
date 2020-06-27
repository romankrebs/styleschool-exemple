import React from "react";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import List from "../../components/list";
import Page from "../../components/page";

export default function Teach() {
  var content = [
    {
      title: "Преподавание в Высшей школе стилистики",
      text: (
        <List
          arr={[
            <span>
              Курс повышения квалификации &laquo;Модный ассортимент&raquo;
            </span>,
            <span>Авторский курс &laquo;Эвристика&raquo;</span>
          ]}
        />
      )
    },
    {
      title: "Образование",
      text: (
        <List
          arr={[
            <span>
              Художественно-технологический факультет Московского
              Технологического института Аспирантура по специальности
              &laquo;Философия&raquo;
            </span>
          ]}
        />
      )
    },
    {
      title: "Преподавательская деятельность",
      text: (
        <List
          arr={[
            <span>
              С 2002 по 2013 г. руководитель подразделения &laquo;Прикладная
              эстетика&raquo; в Национальном институте Моды
            </span>,
            "А так же преподавание в Российском государственном университете туризма и сервиса",
            <List
              arr={[
                "Московском городском педагогическом университете,",
                "Московском государственном институте культуры,",
                <span>
                  Учебном Центре UNDкино и телевидения
                  <br />
                  Специализация &ndash; обучение дизайну и изобразительным
                  дисциплинам, имидж-стилистике и эвристике.
                </span>
              ]}
              num="circle"
            />
          ]}
        />
      )
    },
    {
      title: "Экспертная деятельность",
      text: (
        <List
          arr={[
            <span>
              Марина &ndash; участница более чем 50 выставок, лауреат
              международных конкурсов в номинации «Фейшн-дизайн».
            </span>,
            <span>
              Практикующий имиджмейкер. Вектор развития &ndash; интеграция
              принципов коучинга и методик создания габитарного имиджа в
              авторском проекте &laquo;Честный имидж&raquo;.
            </span>
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Марина Бонецкая: Публичный профиль</title>
        <meta name="keywords" content="Марина Бонецкая: Публичный профиль" />
      </Helmet>
      <Page lable="Марина Бонецкая" lableMobile="Марина Бонецкая">
        <Grid container justify="center" alignItems="flex-start">
          <Grid item style={{ padding: 20 }}>
            <Teacher
              head="Марина Бонецкая"
              short={
                <span>
                  Художник-дизайнер, доцент, автор курсов по созданию
                  корпоративного и персонального имиджа и стиля, член
                  Международной Организации &laquo;Союз дизайнеров&raquo;.
                </span>
              }
              image="/img/about/marina-bonetskaya.jpg"
              tiles={[
                {
                  image: "/img/star.svg",
                  title: "Текущие увлечения",
                  text:
                    "телесно ориентированные теории, спиральная динамика, графика, журналистика."
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
