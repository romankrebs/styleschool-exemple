import React from "react";
import { Grid } from "@material-ui/core";
import Page from "../../components/page";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import List from "../../components/list";

const title = "Сведения об образовательной организации";

const font = "Roboto";

const styles = {
  h1: {
    fontSize: "2em",
    textAlign: "center",
    fontWeight: 600,
    color: "rgb(100,100,100)",
    padding: "24px 0",
    margin: 0,
    fontFamily: font
  },
  h2: {
    fontSize: "1.4em",
    textAlign: "center",
    fontWeight: 500,
    color: "rgb(100,100,100)",
    padding: "12px 0",
    margin: 0,
    fontFamily: font
  },
  text: {
    fontSize: "1em",
    textAlign: "left",
    fontWeight: 400,
    color: "rgb(80,80,80)",
    padding: 12,
    margin: 0,
    fontFamily: font
  }
};

const Information = props => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={"ВШСДТ: " + title} />
      </Helmet>
      <Page lable="" lableMobile="">
        <Grid container>
          <Grid item xs={12} md={12}>
            <h1 style={styles.h1}>{title}</h1>
            <h2 style={styles.h2}>
              АНО ДПО Высшая школа стилистики, дизайна и технологий
            </h2>
            <List
              arr={[
                <Link to="osnovnye-svedeniya">Основные сведения</Link>,
                <Link to="struktura-i-organy-upravleniya">
                  Структура и органы управления образовательной организацией
                </Link>,
                <Link to="dokumenty">Документы</Link>,
                <Link to="obrazovateljnye-programmy">
                  Образовательные программы
                </Link>,
                <Link to="obrazovateljnye-standarty">
                  Образовательные стандарты
                </Link>,
                <Link to="rukovodstvo-i-pedagogicheskiy-sostav">
                  Руководство. Педагогический состав
                </Link>,
                <Link to="materialjno-tehnicheskoe-osnaschenie">
                  Материально-техническое обеспечение и оснащенность
                  образовательного процесса
                </Link>,
                <Link to="stipendii">
                  Стипендии и иные виды материальной поддержки
                </Link>,
                <Link to="platnye-obrazovateljnye-uslugi">
                  Платные и образовательные услуги
                </Link>,
                <Link to="finansovo-hozyaystvennaya-deyateljnostj">
                  Финансово-хозяйственная деятельность
                </Link>,
                <Link to="vakantnye-mesta-dlya-priema">
                  Вакантные места для приема (перевода)
                </Link>
              ]}
              style={styles.text}
            />
          </Grid>
        </Grid>
        <div style={{ height: "2rem" }} />
      </Page>
    </div>
  );
};

export default Information;
