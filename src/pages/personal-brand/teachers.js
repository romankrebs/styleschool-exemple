import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";
import List from "../../components/list";
import { styles } from "./styles";
import Teacher from "../../components/teacher-in-course";

export const prochorovich = (
  <Paragraph
    content={[
      "Автор и куратор курсов Высшей школы стилистики дизайна  и технологий",
      <span>
        Специалист по fashion-коммуникациям, рекламе и PR,
        комму&shy;ника&shy;ционный тренер, ТВ-эксперт, предприниматель.
      </span>,
      <span>
        Идеолог и основатель международных комму&shy;ника&shy;цион&shy;ных
        образовательных проектов:
      </span>,
      <List
        arr={[
          "Стажировки на Milan fashion week / Milan design week;",
          "Summer fashion school in Italy;"
        ]}
        style={{ ...styles.p, textAlign: "justify" }}
      />,
      "Основное направление международные коммуникации, продвижение личного бренда, технологии запуска startup-проектов в индустрии моды и дизайна.",
      "Более 10 лет консультирую компании по продвижению брендов и занимаюсь организацией профессиональных мероприятий в сфере B2B, B2C, fashion-консалтингом, а также маркетинговыми и бизнес исследованиями в индустрии моды и дизайна.",
      <span>
        С 2015 года разрабатываю и провожу программы
        комму&shy;никаци&shy;онного-коучинга и тренингов личной эффективности.
      </span>,
      "Зам. директора лаборатории рекламы и коммуникаций в сфере моды и дизайна, преподаватель каф. рекламы и связей с общественностью, СПГУПТД.",
      "Член Российской Ассоциации связей с общественностью (РАСО)"
    ]}
    style={{ ...styles.p, textAlign: "justify" }}
  />
);

export default function Teachers() {
  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} md={12}>
        <h3 style={styles.h2small}>Автор и ведущая курса</h3>
      </Grid>
      <Grid item xs={12} md={12}>
        <Teacher
          head="Прохорович Елена"
          text={prochorovich}
          image="/img/international-communications/prohorovich.jpg"
        />
      </Grid>
    </Grid>
  );
}
