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
            "РГУТИС по специальности «Современные технологии в работе имиджмейкера: персональный и корпоративный стиль» (г. Москва)",
            "СГУВТ по специальности «Экономика и управление на предприятии»",
            "Дополнительное образование: бизнес-тренер, визажист-стилист"
          ]}
        />
      )
    },
    {
      title: "Опыт работы",
      text: (
        <List
          arr={[
            "Приглашенный эксперт: в глянцевых журналах Сибири, на мероприятиях Fashion Week, на телевидении",
            <span>
              Член жюри в конкурсе молодых дизайнеров &laquo;Новое поколение
              Моды&raquo;
            </span>,
            <span>
              Автор и тренер программы по самоимиджу &laquo;Преображение&raquo;
            </span>,
            "COCCINELLEБолее 1000 публичных выступлений на темы моды, стиля и имиджа",
            "Работа с аудиторией от 2 до 300 слушателей",
            "Имидж-сотрудничество и продвижение в Сибири таких марок, как FURLA, FREYWILLE, PINKO, JOSEPH, CRISTINA EFFE, COCCINELLE, GAUDI, (nude), GUESS",
            "Большая практика подготовки модных показов: от этапа создания основной идеи показа и кастинга моделей до создания «карты модного показа» и написания технического задания визажистам и стилистам по волосам",
            "Огромная практика работы с клиентами по созданию индивидуального и профессионального стилей",
            "Основатель и руководитель бизнес-проекта NADEZHDA ISKHAKOVA, успешно работающий по четырем направлениям: корпоративный имидж персонала компаний и персональный имидж руководителей, имидж сотрудничество с ритейлом, обучающие программы по стилю, индивидуальная работа с клиентами"
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Надежда Исхакова: Публичный профиль</title>
        <meta name="keywords" content="Надежда Исхакова: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Надежда Исхакова"
            short="Практикующий имиджмейкер, имидж-тренер, fashion-стилист, преподаватель Высшей школы стилистики, руководитель филиала Высшей школы стилистики в Новосибирске"
            image="/img/about/nadejda-ishakova.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Более 7 лет",
                text: "опыт работы в индустрии имиджа и стиля"
              },
              {
                image: "/img/link-variant.svg",
                title: "Персональный сайт",
                text: (
                  <a href="http://nadezhdaiskhakova.com">
                    nadezhdaiskhakova.com
                  </a>
                )
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
