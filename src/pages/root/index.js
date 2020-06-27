import React from "react";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Screen1 from "./screen1";
import Footer from "../../components/footer"; // "./footer";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  box: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 10px"
    }
  }
});

const Root = props => {
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>
          АНО ДПО "Высшая школа стилистики, дизайна и технологий" (ВШСДТ)
        </title>
        <meta
          name="keywords"
          content="ВШСДТ, ВШС, высшая школа стилистики, имидж, дизайн, стиль, технологии"
        />
        <meta
          name="description"
          content="Для тех, кто выбирает профессиональное образование в индустрии моды и дизайна. Кому важны сочетание академического обучения и практики с наставниками. Очно или онлайн. В области имиджмейкинга и личного бренда, теории моды и стилистики, дизайна среды и технологий продвижения брендов."
        />
        <meta name="yandex-verification" content="28d76ba8b8082fad" />
      </Helmet>
      <Top faqultet="socnet" />
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Grid container>
          <Grid item xs={12} md={12} className={classes.box}>
            <Screen1 />
          </Grid>
        </Grid>
      </div>
      <Footer notBank />
    </div>
  );
};

export default withStyles(styles)(Root);
