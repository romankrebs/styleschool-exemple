import React from "react";
import Footer from "../../components/footer";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";
import Helmet from "react-helmet";

export default function Teach(props) {
  var content = [
    {
      title: "Образование:",
      text:
        "Московский Художественно-Промышленный Институт, направление Дизайн среды, бакалавриат"
    },
    {
      title: "Дополнительное образование:",
      text: (
        <List
          arr={[
            "Стажировка в мастерской Cardboardia «Сделано в Картонии»",
            "МХПИ, Повышение квалификации по программе «Скетчинг. Архитектурный рисунок»",
            "МХПИ, Повышение квалификации по программе «Стили в дизайне среды»",
            "МХПИ, курс «Визуальный мерчендайзинг и витринистика»"
          ]}
        />
      )
    },
    {
      title: "Профессиональный опыт:",
      text: (
        <List
          arr={[
            "Ведение проектов в собственной студии студии дизайна ArtStreet Design",
            "Ведущий дизайнер крупной строительной компании",
            "Дизайнер оздоровительного центра «РеаПрактика»",
            "Проектировщик коттеджного поселка ЖК Адмиралтейский-2 в г. Краснодар"
          ]}
        />
      )
    },
    {
      title: "Преподавательский опыт:",
      text: (
        <List
          arr={["Обучение и стажировка дизайнеров в строительной компании"]}
        />
      )
    }
  ];

  const name = "Эрика Ненашева";

  return (
    <div>
      <Helmet>
        <title>{name}: Публичный профиль</title>
        <meta name="keywords" content={name + ": Публичный профиль"} />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head={name}
            short="Практикующий дизайнер интерьера. Художник. Технический директор собственной студии дизайна
            интерьеров ArtStreet Design."
            image="/img/teachers/erika-nenasheva.jpg"
            tiles={false}
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
