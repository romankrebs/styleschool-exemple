import React from "react";
import Footer from "../../components/footer";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";
import Paragraph from "../../components/p-array";

export default function Teach() {
  const name = "Елена Прохорович";

  const content = [
    {
      title: "Профессиональный опыт",
      text: (
        <Paragraph
          content={[
            "Автор и куратор курсов Высшей школы стилистики дизайна  и технологий.",
            "Специалист по fashion-коммуникациям, рекламе и PR, коммуникационный тренер, ТВ-эксперт, предприниматель.",
            "Идеолог и основатель международных коммуникационных образовательных проектов:",
            <List
              arr={[
                "Стажировки на Milan fashion week / Milan design week",
                "Summer fashion school in Italy"
              ]}
            />,
            "Основное направление международные коммуникации, продвижение личного бренда, технологии запуска startup-проектов в индустрии моды и дизайна.",
            "Более 10 лет консультирую компании по продвижению брендов и занимаюсь организацией профессиональных мероприятий в сфере B2B, B2C, fashion- консалтингом, а также маркетинговыми и бизнес исследованиями в индустрии моды и дизайна.",
            "С 2015 года разрабатываю и провожу программы коммуникационного-коучинга и тренингов личной эффективности.",
            "Зам. директора лаборатории рекламы и коммуникаций в сфере моды и дизайна, преподаватель каф. рекламы и связей с общественностью, СПГУПТД.",
            "Член Российской Ассоциации связей с общественностью (РАСО)."
          ]}
        />
      )
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
            short="Автор и куратор курсов Высшей школы стилистики дизайна  и технологий"
            image="/img/teachers/prohorovich.jpg"
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
