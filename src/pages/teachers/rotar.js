import React from "react";
import Footer from "../../components/footer";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";

export default function Teach() {
  const name = "Татьяна Ротарь";

  const content = [
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Британская Высшая Школа Дизайна (Россия)",
            "University of Hertfordshire (Великобритания)",
            "Scuola Politecnica di Design (Италия)"
          ]}
        />
      )
    },
    {
      title: "Профессиональный опыт",
      text:
        "Работа с коммерческими и жилыми дизайн-проектами в Милане, Генуе и Москве."
    }
  ];

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
            short="Дизайнер интерьера, преподаватель #ВШСДТ"
            image="/img/teachers/rotar_300.jpg"
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
