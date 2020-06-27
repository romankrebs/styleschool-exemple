import React from "react";
import ImageText from "../../components/text-image";
import Grid from "@material-ui/core/Grid";

export default function Illustration() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        item
        xs={12}
        md={12}
        style={{ padding: 20, background: "rgba(240,240,240,1.0)" }}
      >
        <ImageText
          orient="right"
          size={{
            left: 6,
            right: 6
          }}
          head=""
          image={{
            src: "/img/political-style/illustration.jpg",
            altText: "",
            style: {
              margin: 8
            }
          }}
          text={{
            content:
              "Изучив инструментарий политтехнологов в управлении имиджем публичной персоны, Вы сможете смоделировать целостный имидж: от замысла и реализации до продвижения, основываясь на запросах и ожиданиях общества и элит, целей и задач политического или бизнес-проекта. Особое внимание будет уделено личностным характеристикам, характеру и типу поведения, влияющими на грамотный выбор стратегии.",
            style: { paddingLeft: 20 }
          }}
          style={{
            margin: 0,
            padding: 20,
            paddingTop: 0,
            paddingBottom: 0,
            background: "rgba(240,240,240,1.0)"
          }}
        />
      </Grid>
    </Grid>
  );
}
