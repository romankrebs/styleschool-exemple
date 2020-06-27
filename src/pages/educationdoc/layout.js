import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { stylesDark } from "../../components/styles";
import Paragraph from "../../components/p-array";
import List from "../../components/list";
import { HorizontalForm, VerticalForm } from "../../components/forms";
import Socnet from "../../components/want-to-know";
import Boxes from "../../patterns/pattern-fs/boxes";

const fontTitle = "PT Sans Narrow";
const font = "Roboto"; // "Alegreya Sans";
const fontCursive = {
  fontFamily: "Lora",
  fontStyle: "italic"
};
const sizeButton = "5rem";
const gold = "rgb(122,101,89)";
const styles = {
  ...stylesDark,
  h1: {
    fontFamily: fontTitle,
    fontSize: "4rem",
    fontWeight: 400,
    color: gold,
    textShadow: "4px 4px 0px rgba(0,0,0,0.15)",
    padding: 0,
    margin: 0
  },
  small: {
    fontFamily: font,
    fontSize: "0.8rem",
    color: "rgb(100,100,100)",
    fontWeight: 400,
    padding: 0,
    margin: 0
  },
  h2: {
    fontSize: "1.6em",
    fontWeight: 700,
    color: gold,
    textAlign: "center",
    margin: 0,
    padding: "3.2rem 1rem 1.4rem"
  },
  p: {
    fontFamily: font,
    fontSize: "1rem",
    textAlign: "justify",
    color: "rgb(100,100,100)",
    lineHeight: "1.4rem",
    margin: 0,
    padding: "1rem 0"
  },
  imageHead: {
    margin: 0,
    padding: "3rem 1rem"
  },
  box: {
    maxWidth: "100vw",
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  programma: {
    borderTop: "1px solid rgb(240,240,240)"
  },
  "@media (max-width: 959px)": {
    imageHead: {
      padding: "1rem 1rem"
    },
    box: {
      padding: "0 1rem"
    },
    h2: {
      paddingLeft: "1rem",
      paddingRight: "1rem"
    },
    programma: {
      borderTop: "none"
    }
  }
};
const wStyles = theme => styles;

function Layout(props) {
  const { classes } = props;

  return (
    <div>
      <h1 className={classes.h1} style={{ fontFamily: fontTitle }}>
        Порядок заключения договора и зачисления на обучение
      </h1>
      <Boxes outer>
        <Paragraph
          style={{
            ...styles.p,
            padding: "0.2rem 0",
            color: "rgb(100,100,100)"
          }}
          content={[
            "В соответствии с требованиями законодательства в \
            области дополнительного профессионального образования \
            АНО «ДПО «Высшая школа стилистики, дизайна и технологий»\
            , осуществляющая реализацию программ дополнительного \
            профессионального образования, включая программы \
            профессиональной переподготовки и повышения квалификации\
            , в том числе совместно с факультетами дополнительного \
            профессионального образования государственных Вузов, \
            формирует личные дела слушателей при освоении программ \
            профессиональной переподготовки и повышения квалификации.",
            "Для поступления на программы дополнительного \
            профессионального образования требуются следующие \
            документы",
            <List
              arr={[
                "Договор на оказание платных образовательных услуг",
                "Заявление о Согласии на обработку персональных данных",
                "Копия документа о высшем или среднем профессиональном \
              образовании",
                "Копия паспорта (первый разворот и страница с \
              регистрацией)",
                "Копия свидетельства о браке (если фамилия в \
              дипломе об образовании иная, чем в паспорте)",
                "Для лиц, получивших профессиональное образование \
              в странах за пределами Российской Федерации, с \
              которыми подписаны соглашения о признании \
              … образования,  необходимо предоставить  нотариально \
              заверенный перевод на русский язык",
                "Для лиц, получивших профессиональное образование \
              в странах за пределами Российской Федерации, с \
              которыми нет соглашения о признании образования \
              эвкивалентным в Российской Федерации, необходимо \
              предоставить нострификацию документов в \
              установленном порядке",
                "Для тех, кто учится или завершает обучение по \
              программам среднего профессионального или высшего \
              образования, необходимо предоставить справку учебного \
              заведения, заверенную в установленном порядке по \
              месту обучения"
              ]}
              style={styles.p}
            />,
            "Формы заполняемых документов предоставляются посредством \
            системы дистанционного обучения в личном кабинете \
            студента и посредством электронной почты",
            "Зачисление на обучение проводится без вступительных \
            экзаменов по результатам рассмотрения документов, \
            представленных поступающими на обучение. По ряду \
            программ предусмотрено вступительное собеседование",
            "Причинами отказа о приеме на обучение могут быть:",
            <List
              style={styles.p}
              arr={[
                "несоответствие представленных документов \
              установленным и невозможности устранения этой причины",
                "несоблюдения порядка оформления и исполнения \
              Договора со стороны поступающего"
              ]}
            />,
            "Зачисление на обучение производится после заключения \
            Договора на оказание платных образовательных услуг \
            и оплаты за первый этап обучения в сроки, \
            установленные Договором."
          ]}
        />
      </Boxes>
      <Boxes outer>
        <h2
          className={classes.h2}
          style={{
            fontFamily: fontTitle
          }}
        >
          Получите квалифицированную консультацию специалиста учебного отдела
        </h2>
        <Hidden mdUp>
          <VerticalForm target="send_form_fashion_styling_complete" />
        </Hidden>
        <Hidden smDown>
          <HorizontalForm target="send_form_fashion_styling_complete" />
        </Hidden>
        <Socnet target="fashion_styling_complete" noHead />
      </Boxes>
      <div style={styles.space} />
    </div>
  );
}

export default withStyles(wStyles)(Layout);
