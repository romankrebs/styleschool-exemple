import React from "react";
import Helmet from "react-helmet";
import Page from "../../components/page";
import List from "../../components/list";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import WantToKnow from "../../components/want-to-know";

const styles = theme => ({
  head: {
    fontFamily: "PT Sans Narrow",
    fontSize: "4rem",
    color: "rgb(122,101,89)",
    textShadow: "4px 4px 0px rgba(0,0,0,.15)",
    textAlign: "center",
    fontWeight: 700,
    margin: 0,
    padding: "4rem 0 3.2rem"
  },
  link: {
    fontSize: "1.4rem",
    textDecoration: "none",
    color: "rgb(100,100,100)",
    transition: "color .5s",
    lineHeight: "2rem",
    "&:hover": {
      color: "rgb(160,0,0)"
    }
  },
  "@media (max-width: 959px)": {
    head: {
      fontSize: "2rem"
    }
  }
});

function ProEducation(props) {
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>Профессиональное образование</title>
        <meta name="keywords" content={"ВШСДТ: " + props.keyword} />
      </Helmet>
      <Page
        lable="Профессиональное образование"
        lableMobile="Профессиональное образование"
      >
        <h1 className={classes.head} style={{ fontFamily: "PT Sans Narrow" }}>
          Профессиональное образование
        </h1>
        <List
          num="none"
          style={{}}
          arr={[
            <Link to="/pr-education">
              <span className={classes.link}>Репутационные технологии, PR</span>
            </Link>,
            <Link to="/fashion-education">
              <span className={classes.link}>
                Индустрия моды, креативные технологии
              </span>
            </Link>,
            <Link to="/interior-education">
              <span className={classes.link}>
                Дизайн интерьера, креативные технологии
              </span>
            </Link>,
            <Link to="/fashion-retail">
              <span className={classes.link}>
                Fashion retail, технологии продаж
              </span>
            </Link>
          ]}
        />
        <WantToKnow />
      </Page>
    </div>
  );
}

export default withStyles(styles)(ProEducation);
