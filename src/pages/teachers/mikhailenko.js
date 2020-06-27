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
      title: "Образование",
      text: (
        <List
          arr={[
            "Столичная финансово-гуманитарная академия (Москва) по специальности «Дизайнер»",
            <span>
              International Institute of Fashion Design and Marketing
              &laquo;Polimoda&raquo;, Florece Creative Patternmaking, Creative
              Pattern Design
            </span>
          ]}
        />
      )
    },
    {
      title: "Дополнительное обучение",
      text: (
        <List
          arr={[
            <span>
              Актуальные тенденции моды
              <br />
              Александр Хилькевич, Тренд-семинар
            </span>,
            <span>
              Индивидуальный курс Павла Каплевича &laquo;Удиви меня&raquo;
              <br />
              Опус 21, Дизайнер-модельер одежды, интерьеров
            </span>,
            <span>
              Инновационные технологии в дизайн образовании и индустрии моды
              <br />
              НАНОО &laquo;Институт Индустрии Моды&raquo;, Дизайн одежды
            </span>,
            <span>
              Стилист-имиджмейкер
              <br />
              Международная Ассоциация Специалистов по Имиджу, &laquo;Основы
              визуальной стилистики&raquo;
            </span>
          ]}
        />
      )
    },
    {
      title: "Опыт работы",
      text: (
        <List
          arr={[
            "Костюмер (Good Story Media): разработка идеи, подбор и покупка костюмов для актеров, подготовка костюмов на каждый съемочный день",
            "Художник по костюму (Сургутский Музыкально-Драматический Театр): поиск художественного образа, создание эскизов костюмов и костюмов к спектаклям",
            "Ведущий дизайнер ТД Helgi Home: разработка креативных концепций для коллекций, создание mood board, color board, inspiration board",
            "Работа с журналами: проведение рекламных съемок, fashion-story, написание статей",
            "Работа на телевидении в качестве модного эксперта",
            "Разработка и производство сценических костюмов для театра танца (концерты в Государственном Кремлевском Дворце, гастроли в Европе)",
            "Лекционная деятельность (в формате мультимедийных семинаров, творческих лабораторий, мастер-классов)"
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Светлана Михаленко: Публичный профиль</title>
        <meta name="keywords" content="Светлана Михаленко: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Светлана Михаленко"
            short="Дизайнер одежды, художник по костюму, практикующий стилист, модный эксперт, преподаватель Высшей школы стилистики"
            image="/img/about/svetlana-mihalenko.jpg"
            tiles={[
              {
                image: "/img/trophy.svg",
                title: "Обладатель премий",
                text: (
                  <span>
                    премии Carlin International Group (Париж), диплома Совета
                    Министров Северных Стран (Санкт-Петербург), гран-при
                    конкурса &laquo;Русский Силуэт&raquo; (Тюмень), диплома
                    Всероссийского научно-исследовательского института
                    технической эстетики
                  </span>
                )
              },
              {
                image: "/img/brush.svg",
                title: "Автор собственной марки одежды",
                text: "от замысла до реализации"
              },
              {
                image: "/img/video-vintage.svg",
                title: "Стилист-костюмер на телевидении",
                text: "персональная работа с клиентом"
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
