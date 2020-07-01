import React from "react";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../../components/text-image";

export default function Teacher(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <Paragraph
          image={{
            src: props.content.image, // "/img/conceptualfashion/teacher.jpg",
            altText: props.content.title, // "Автор курса Наталья Горских",
            style: {
              borderRadius: "50% 50%",
              height: "15em",
              width: "auto"
            },
            align: "center"
          }}
          text={{
            content: props.content.text
            // (
            //   <span>
            //     К.филол.наук, преподаватель, специалист в области современных
            //     коммуникаций посредством визуального образа: художественного,
            //     модного, социального.
            //   </span>
            // )
          }}
          orient="right"
          head={props.content.title}
          size={{
            left: 6,
            right: 6
          }}
          link="/natalya_gorskyh"
        />
      </Grid>
    </Grid>
  );
}
