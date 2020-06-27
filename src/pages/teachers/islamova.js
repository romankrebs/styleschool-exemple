import React from "react";
import Footer from "../../components/footer";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";
import Paragraph from "../../components/p-array";

export default function Teach() {
  var content = [
    {
      title: "О преподавателе",
      text: (
        <Paragraph
          content={[
            "Я начала обучение дизайну интерьера в Британской Школе \
            Дизайна, потом получила диплом Бакалавра University of \
            Hertfordshire в Великобритании (факультет Interior \
            Architecture and Design), и переехала в Италию для получения \
            магистерской степени в Scuola Politecnica di Design в Милане \
            (Master Diploma in Interior Design). Я поступила на \
            стажировку в итальянскую архитектурную студию, где  занимала \
            позицию ассистента архитектора и помогала ему в \
            профессорской деятельности. Я участвовала в разработках \
            программ, а также проведении занятий для студентов таких \
            миланских школ как Politecnico di Milano и Scuola \
            Politecnica di Design по двум основным предметам: «Концепция \
            проекта» и «Материалы». Сейчас я являюсь руководителем и \
            главным дизайнером ателье интерьеров Dreamers."
          ]}
        />
      )
    }
  ];

  let name = "Камила Исламова";

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
            short="Сейчас я являюсь руководителем и главным дизайнером ателье интерьеров Dreamers."
            image="/img/teachers/islamova.jpg"
            tiles={[]}
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
