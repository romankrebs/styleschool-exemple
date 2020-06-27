import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Head from "./head";
import Infew from "./infew";
import Tesisses from "./infew-with-image";
import Descript from "../../components/description-with-image-for-types";
import Teachers from "./teachers";
import Contents from "../../components/programma-for-types"; //программа
import Forma from "../../components/forma-for-types";
import Socnet from "../../components/want-to-know";

export default function Component(props) {
  const title = props.title;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={`ВШСДТ: ${title}`} />
      </Helmet>
      <Page lable={props.faqultet} lableMobile={props.faqultet}>
        <Head
          head={props.head.text}
          // background={props.head.image}
          descript={props.head.descript}
          color={props.head.colorText}
          // colorBox={props.head.colorBlock}
        />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20, paddingTop: 0 }}>
            <Infew
              content={props.orientations}
              size={props.orientationSize}
              garamond
            />
            <Descript text={props.descript.text} image={false} />
            <div style={{ height: "3.2em" }} />
            <Tesisses content={props.info} size={props.infoSize} />
            <Contents
              content={props.programma}
              title={props.programmaName}
              garamond
            />
            <Teachers garamond />
            <Forma title={props.formaTitle} garamond />
            <Socnet noHead />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
