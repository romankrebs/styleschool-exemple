import React from "react";
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import { content } from "./content";
import { styles } from "./styles";
import Page from "../../components/page";
import Illustration from "./illustration";
import InfoGraphs from "./info-graphs";
import Teacher from "./teacher";
import Block from "./block";

function ThePage(props) {
  return (
    <div>
      <Helmet>
        <title>{content.title}</title>
        <meta name="keywords" content={`ВШСДТ: ${content.title}`} />
      </Helmet>
      <Page lable={content.faqultet} lableMobile="">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Illustration
              imageComment={content.illustration.imageComment}
              image={content.illustration.image}
              text={content.illustration.text}
            />
            <InfoGraphs content={content.info} />
            <Teacher
              title={content.teacher.title}
              text={content.teacher.text}
              image={content.teacher.image}
              link={content.teacher.link}
            />
            {/* <h3 style={styles.h3}>{content.moderator}</h3>
            <Illustration
              image={content.goulyaeva.image}
              imageComment={content.goulyaeva.imageComment}
              text={content.goulyaeva.text}
              imageLeft
              topSpace
            />
            <Block
              title={content.organizators.title}
              content={content.organizators.text}
            /> */}
            <div style={{ height: "2em" }} />
            <h3 style={styles.h3Big}>{content.inputFree}</h3>
            {/* <Timing
              title={content.timing.title}
              content={content.timing.content}
            /> */}
            {/* <Info
              title={content.present.title}
              text={content.present.text}
              // icon={content.present.icon}
              full
              paddingIcon="1.5em"
              // image={content.present.image}
            /> */}
            <Block
              title={content.forma.title}
              content={content.forma.content}
            />
            <Block
              title={content.programma.title}
              content={content.programma.content}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Block
              title={content.questions.title}
              content={content.questions.content}
            />
            <Block
              title={content.events.title}
              content={content.events.content}
            />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}

export default ThePage;
