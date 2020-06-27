import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { stylesDark } from "../../components/styles";
import Paragraph from "../../components/p-array";
import List from "../../components/list";
import { HorizontalForm, VerticalForm } from "../../components/forms";
import Socnet from "../../components/want-to-know";
import Boxes from "../../patterns/pattern-fs/boxes";
import { Link } from "react-router-dom";
import TextWithIcon from "../../components/text-with-icon";

const fontTitle = "PT Sans Narrow";
const font = "Roboto"; // "Alegreya Sans";
const fontCursive = {
  fontFamily: "Lora",
  fontStyle: "italic"
};
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
        Особенности реализации программ дистанционного (онлайн) обучения
      </h1>
      <Boxes outer>
        <Paragraph
          style={{
            ...styles.p,
            padding: "0.2rem 0",
            color: "rgb(100,100,100)"
          }}
          content={[
            <span>
              C 2013 года наша школа предлагает всем желающим пройти он-лайн
              курсы как по отдельным узкоспециализированным направлениям, так и
              по программам профессиональной переподготовки и повышения
              квалификации. Как и многие государственные Вузы, а также крупные
              коммерческие учебные заведения, АНО «ДПО «Высшая Школа стилистики,
              дизайна и технологий» использует специализированную
              образовательную платформу для
              <Link to="/lms">реализации программ дистанционного обучения</Link>
              .
            </span>,
            "Принципы и процесс реализации дистанционного (онлайн) \
            обучения.",
            <List
              style={styles.p}
              arr={[
                "Обучение осуществляется в заочной форме (не указывается \
              в выдаваемых документах) с применением дистанционных \
              технологий в соответствии с требованиям к дистанционной \
              программе по ФЗ «Об образовании в РФ» от 29.12.2012 \
              (№273-ФЗ)",
                <span>
                  После заключения Договора на обучение и предоставления всех
                  необходимых документов (см.{" "}
                  <Link to="/educationdoc">Документы</Link>) Вы в составе своей
                  группы обучения получаете доступ к личному кабинету, где будут
                  содержатся лекции и видеоконтент, алгоритм отправки квитанции
                  о платежах, алгоритм загрузки домашних и практических заданий,
                  методические рекомендации, список рекомендуемой литературы по
                  курсу, расписание на каждый семестр обучения, тесты, форумы
                  преподавателей и специалистов Школы.
                  <br />
                  Содержание материалов каждой программы профессиональной
                  переподготовки определяется учебным планом.
                </span>,
                "Изучать материалы курса в виде записи лекции (видеолекции\
              ) можно в любое время суток, в любой точке мира. \
              Изучать материалы лекции в формате вебинаров (он-лайн) \
              и посещать практические занятия в формате вебинаров \
              (он-лайн) можно в любой точке мира, но в соответствии \
              с графиком обучения Вашей группы.",
                "Записи лекций и практических занятий, проведенных в \
              формате вебинара в определенные дни и время, также \
              остаются в системе дистанционного обучения и доступны \
              для изучения в течение всего периода обучения.",
                "Контроль знаний осуществляется в форме практических \
              заданий, обязательных к выполнению обучающимися для \
              освоения программы, и в формате тестирования. Практические \
              задания должны выполняться обучающимся в срок, отведенный \
              преподавателем, и быть предоставлены на проверку к дате \
              проведения практического вебинара, что отражено в \
              расписании. Формой итоговой аттестационной работы \
              является экзамен (для программ  профессиональной \
              переподготовки)",
                "По окончании обучения и успешной сдачи экзамена Вы \
              получаете диплом установленного образца о профессиональной\
               переподготовке или удостоверение о повышении квалификации\
              . Диплом или удостоверение Вы можете получить лично (в \
              офисе ВШСДТ) или посредством заказного письма, или \
              посредством курьерской доставки."
              ]}
            />
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
          Как устроен образовательный процесс
        </h2>
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={12} md={4}>
            <TextWithIcon
              icon={
                <svg width={36} height={36} viewBox="0 0 24 24">
                  <path
                    fill="rgb(80,80,80)"
                    d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z"
                  />
                </svg>
              }
              text={
                <div>
                  <p
                    className={classes.p}
                    style={{
                      fontWeight: 700
                    }}
                  >
                    ДОСТУП К УЧЕБНОМУ САЙТУ
                  </p>
                  <p className={classes.p}>
                    каждый студент имеет доступ к личному кабинету, в
                    кото&shy;ром есть вся необхо&shy;димая инфор&shy;мация для
                    пла&shy;ниро&shy;вания обучения
                  </p>
                </div>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextWithIcon
              icon={
                <svg width={36} height={36} viewBox="0 0 24 24">
                  <path
                    fill="rgb(80,80,80)"
                    d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18, 22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M17,19V13L14,15.2V13H7V19H14V16.8L17,19Z"
                  />
                </svg>
              }
              text={
                <div>
                  <p
                    className={classes.p}
                    style={{
                      fontWeight: 700
                    }}
                  >
                    ИЗУЧЕНИЕ МАТЕРИАЛА
                  </p>
                  <p className={classes.p}>
                    с помощью видеолекций, за&shy;писанных каждым
                    пре&shy;подава&shy;телем в соответствии с
                    необ&shy;хо&shy;димыми и доста&shy;точ&shy;ными часами для
                    осво&shy;ения дисци&shy;плины и с возмож&shy;ностью посещать
                    лекции и практи&shy;ческие заня&shy;тия в он-лайн формате в
                    уста&shy;новленные дни и время
                  </p>
                </div>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextWithIcon
              icon={
                <svg width={36} height={36} viewBox="0 0 24 24">
                  <path
                    fill="rgb(80,80,80)"
                    d="M12 3C6.5 3 2 6.58 2 11C2.05 13.15 3.06 15.17 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11S17.5 3 12 3M12 17C7.58 17 4 14.31 4 11S7.58 5 12 5 20 7.69 20 11 16.42 17 12 17M17 12V10H15V12H17M13 12V10H11V12H13M9 12V10H7V12H9Z"
                  />
                </svg>
              }
              text={
                <div>
                  <p
                    className={classes.p}
                    style={{
                      fontWeight: 700,
                      textAlign: "left"
                    }}
                  >
                    ОБЩЕНИЕ С ПРЕПОДАВАТЕЛЯМИ
                  </p>
                  <p className={classes.p}>
                    осуществляется через форум или чат, а также посредством
                    практических вебинаров
                  </p>
                </div>
              }
            />
          </Grid>
        </Grid>
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
