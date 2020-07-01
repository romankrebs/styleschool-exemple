import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { stylesLite } from "./styles";
import { Link } from "react-router-dom";
import Paragraph from "./p-array";
import List from "./list";

const wStyles = theme => stylesLite;
const font = "Alegreya Sans";
const fontTitle = "PT Sans Narrow";

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto"
        }}
      >
        <div className={classes.geo}>
          <p className={classes.footerTitle} style={{ fontFamily: fontTitle }}>
            ГЕОГРАФИЯ
          </p>
          <Paragraph
            style={stylesLite.footerText}
            content={[
              <a href="https://styleschool.ru/">
                <span
                  className={classes.footerText}
                  style={{ fontFamily: font }}
                >
                  Москва
                </span>
              </a>,
              <a href="http://novosib.styleschool.ru/">
                <span
                  className={classes.footerText}
                  style={{ fontFamily: font }}
                >
                  Новосибирск
                </span>
              </a>,
              <a href="http://bishkek.styleschool.ru/">
                <span
                  className={classes.footerText}
                  style={{ fontFamily: font }}
                >
                  Бишкек
                </span>
              </a>,
              <span className={classes.footerText} style={{ fontFamily: font }}>
                Online
              </span>
            ]}
          />
        </div>
        <div className={classes.adress}>
          <p className={classes.footerTitle} style={{ fontFamily: fontTitle }}>
            АДРЕС &bull; МОСКВА
          </p>
          <p className={classes.footerText} style={{ fontFamily: font }}>
            г. Москва, Проспект Мира,
            <br />
            дом&nbsp;101, стр.&nbsp;1, офис&nbsp;600
          </p>
          <p className={classes.footerText} style={{ fontFamily: font }}>
            Для почтовых отправлений:
            <br />
            а/я&nbsp;218
          </p>
        </div>
        <div className={classes.time}>
          <p className={classes.footerTitle} style={{ fontFamily: fontTitle }}>
            ВРЕМЯ РАБОТЫ
          </p>
          <p className={classes.footerText} style={{ fontFamily: font }}>
            С понедельника по пятницу
          </p>
          <p className={classes.footerText} style={{ fontFamily: font }}>
            с 10:00 до 19:00 по московскому времени
          </p>
        </div>
        <div className={classes.contacts}>
          <p className={classes.footerTitle} style={{ fontFamily: fontTitle }}>
            КОНТАКТЫ
          </p>
          <p className={classes.footerText} style={{ fontFamily: font }}>
            +7 (495) 221-89-35
          </p>
          <p className={classes.footerText} style={{ fontFamily: font }}>
            8 (800) 550-78-93
          </p>
          <div className={classes.footerText}>
            <Link to="/contacts">
              <span className={classes.footerLink} style={{ fontFamily: font }}>
                Все контакты
              </span>
            </Link>
          </div>
        </div>
        <div className={classes.services}>
          <p className={classes.footerTitle} style={{ fontFamily: fontTitle }}>
            ДОП. УСЛУГИ
          </p>
          <List
            style={{ ...stylesLite.footerText, fontFamily: font }}
            olStyle={{ paddingLeft: 10 }}
            arr={[
              <span
                className={classes.footerLink}
                style={{ fontFamily: font }}
                title="иммитация ссылки"
              >
                Корпоративные тренинги
              </span>,
              <span
                className={classes.footerLink}
                style={{ fontFamily: font }}
                title="иммитация ссылки"
              >
                Сотрудничество с ВУЗами и учебными центрами
              </span>,
              <span
                className={classes.footerLink}
                style={{ fontFamily: font }}
                title="иммитация ссылки"
              >
                Организация системы дистанционного обучения
              </span>
            ]}
          />
        </div>
      </div>
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        style={{
          maxWidth: 1000,
          margin: "0 auto"
        }}
      >
        <Grid item xs={12} md={12}>
          <div
            style={{
              height: 1,
              background: "rgb(140,140,140)",
              maxWidth: 1000,
              padding: 0,
              margin: "2rem 0 1rem"
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <p
            className={classes.footerText}
            style={{ fontFamily: font, lineHeight: "1.3rem" }}
          >
            Автономная некоммерческая организация
            <br />
            Дополнительного профессионального образования
            <br />
            «Высшая школа стилистики, дизайна и технологий»
          </p>
          <div style={{ height: "1rem" }} />
          <span
            className={classes.footerLink}
            style={{ fontFamily: font }}
            title="иммитация ссылки"
          >
            Сведения об образовательной организации
          </span>
          <br />
          <span
            className={classes.footerLink}
            style={{ fontFamily: font }}
            title="иммитация ссылки"
          >
            Информация для пользователей
          </span>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={12} style={{ height: "2rem" }} />
        </Hidden>
        <Grid item xs={12} md={6}>
          <p className={classes.footerGold} style={{ fontFamily: font }}>
            Партнёры:
            <br />
            &bull;&emsp;Московский художественно-промышленный институт
            <br />
            &bull;&emsp;Российский Государственный Социальный Университет
            <br />
            &bull;&emsp;Cеть лицензированных школ «ParisNailSchool»
            <br />
            &bull;&emsp;Иновационно-образовательный комплекс «Техноград»
            <br />
            &bull;&emsp;Российский Государственный Университет Туризма и Сервиса
          </p>
        </Grid>
        <Grid item xs={12} md={12} style={{ height: "2rem" }} />
        <Grid item xs={12} md={12}>
          <p
            style={{
              margin: 0,
              padding: 0,
              fontFamily: font,
              color: "rgb(160,160,160)"
            }}
          >
            ТЕГИ:&emsp;
            <Link to="/second-degree-imagemaker">
              <span className={classes.footerLink} style={{ fontFamily: font }}>
                #имиджмейкерстилист
              </span>
            </Link>
            &emsp;
            <Link to="/living-interior-design-and-decoration">
              <span className={classes.footerLink} style={{ fontFamily: font }}>
                #дизайнидекорированиеинтереьера
              </span>
            </Link>
            &emsp;
            <Link to="/visual-merchandising-and-showcases-design">
              <span className={classes.footerLink} style={{ fontFamily: font }}>
                #визуальныймерчендайзинг
              </span>
            </Link>
          </p>
        </Grid>
        <Grid item xs={12} md={12}>
          <p
            style={{
              fontFamily: font,
              fontSize: "0.9rem",
              color: "rgb(160,160,160)",
              padding: "1rem 0",
              margin: 0,
              textAlign: "center"
            }}
          >
            &copy;&emsp;ВШСДТ 2011-2020 Российское академическое онлайн
            образование.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Footer);
