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
      title: "",
      text: (
        <span>
          Ведущий лекций по теме «История моды XX века» в рамках программы
          профессиональной переподготовки &laquo;Современные технологии в работе
          имиджмейкера: персональный и корпоративный стиль&raquo;.
        </span>
      )
    },
    {
      title: "",
      text: (
        <span>
          Преподаватель курса &laquo;Визуальный мерчендайзинг и
          витринистика&raquo;, ведущий отдельных мастер-классов по моде и
          витринистике, а также выездного арт-тура в Венецию &laquo;Мода и
          искусство Венеции&raquo;
        </span>
      )
    },
    {
      title: "Образование",
      text: (
        <List
          arr={[
            <span>
              МГУ им. М.В. Ломоносова по программе &laquo;МВА-индустрия
              моды&raquo; (квалификация &laquo;Мастер делового
              администрирования&raquo;)
            </span>,
            <span>
              Курс &laquo;Модный мерчендайзинг&raquo; в Fashion Institute of
              Technology (Нью-Йорк)
            </span>,
            <span>
              Курс &laquo;Знакомство с индийскими дизайнерами&raquo; (г. Бомбей,
              Дели, Агра)
            </span>,
            <span>Школа Александра Васильева (Венеция)</span>
          ]}
        />
      )
    },
    {
      title: "Преподавательская деятельность",
      text: (
        <List
          arr={[
            "Институт моды, дизайна и технологий",
            "Московский художественно-промышленный институт (МХПИ)",
            "Институт Русского театра",
            "Высшая школа стилистики",
            "Европейская академия имиджа"
          ]}
        />
      )
    },
    {
      title: "Старший мерчендайзер, витринист, стилист",
      text: (
        <List
          arr={[
            "в компании «Кашемир и шелк» (Brunello Cucinelli, Missoni, Henry Beguelin, Agnona, Malo)",
            "в компании Feavinci (итальянская одежда класса premium) и др."
          ]}
        />
      )
    },
    {
      title: "Опыт работы в сфере fashion",
      text: (
        <List
          arr={[
            "Опыт написания мерчбуков, составления лукбуков",
            "Формирование ретро-образа, подбор костюма для показов, съемок в клипах, для стилизованных вечеринок",
            "Организация и проведение дефиле и фотосессий",
            "Автор статей о моде"
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Руслан Мигранов: Публичный профиль</title>
        <meta name="keywords" content="Руслан Мигранов: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Руслан Мигранов"
            short="Историк моды, визуальный мерчендайзер, витринист, член творческого союза дизайнеров и имиджмейкеров, преподаватель Высшей школы стилистики."
            image="/img/about/ruslan-migranov.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Более 8 лет",
                text: "Опыт работы в визуальном мерчендайзинге и витринистике"
              },
              {
                image: "/img/star.svg",
                title: "Более 10 лет",
                text: "Опыт работы в сфере fashion"
              }
            ]}
            content={content}
            banner={{
              image: "/img/teachers/ban_mod.jpg",
              link: "/fashion-history"
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
