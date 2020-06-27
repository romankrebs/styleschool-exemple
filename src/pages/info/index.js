import React from "react";
import { Grid, SvgIcon } from "@material-ui/core";
import Helmet from "react-helmet";
import Requisites from "../contacts/recvisites";
import Page from "../../components/page";

function Segment(props) {
  var styles = {
    icon: {
      height: 160
    },
    text: {
      padding: 0,
      paddingBottom: 10,
      margin: 0,
      fontFamily: "Roboto",
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      textAlign: "center"
    },
    title: {
      padding: 0,
      paddingBottom: 10,
      margin: 0,
      fontFamily: "Roboto",
      fontSize: "1.6em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "center"
    },
    link: {
      padding: 10,
      margin: "0 auto",
      background: "rgba(230,230,230,1)",
      fontFamily: "Roboto",
      fontSize: "1em",
      fontWeight: 700,
      color: "rgb(90,90,90)",
      textAlign: "center",
      borderRadius: 4,
      maxWidth: 180
    }
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <div style={{ fontSize: 80, textAlign: "center" }}>
        <SvgIcon fontSize="inherit">{props.icon}</SvgIcon>
      </div>
      <h2 style={styles.title}>{props.title}</h2>
      <p style={styles.text}>{props.text}</p>
      <a href={props.link}>
        <div style={styles.link}>
          <img
            src="/img/alert-circle.svg"
            alt=""
            style={{ marginBottom: "-0.3em", height: "1.3em" }}
          />
          &nbsp;Подробнее
        </div>
      </a>
    </div>
  );
}

export default function Info() {
  return (
    <div>
      <Helmet>
        <title>Информация для пользователей</title>
        <meta name="keywords" content="ВШС: Информация для пользователей" />
      </Helmet>
      <Page lable="Информация для пользователей" lableMobile="Информация">
        <Grid
          container
          justify="center"
          style={{
            background: "url(/img/info/fullscreen.jpg) left top/cover no-repeat"
          }}
          alignItems="flex-start"
        >
          <Grid item xs={12} md={12}>
            <div style={{ height: 100 }} />
          </Grid>
          <Grid item xs={12} md={12}>
            <h1
              style={{
                padding: 10,
                paddingLeft: 20,
                margin: 0,
                background: "rgba(255,255,255,0.8)",
                fontFamily: "Roboto",
                fontSize: "2em",
                fontWeight: 700,
                color: "rgb(80,80,80)",
                textAlign: "left",
                boxSizing: "border-box"
              }}
            >
              Информация для пользователей
            </h1>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Segment
              icon={
                <path
                  fill="rgb(123,143,87)"
                  d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z"
                />
              }
              title="Правила обучения"
              text="Настоящие Правила обучения (далее Правила) устанавливают порядок оказания НОЧУ «ЦДО «Высшая школа стилистики» (далее Школа) образовательных услуг Слушателям Школы."
              link="/information/rules"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Segment
              icon={
                <path
                  fill="rgb(123,143,87)"
                  d="M12.75,3.94C13.75,3.22 14.91,2.86 16.22,2.86C16.94,2.86 17.73,3.05 18.59,3.45C19.45,3.84 20.13,4.3 20.63,4.83C21.66,6.11 22.09,7.6 21.94,9.3C21.78,11 21.22,12.33 20.25,13.27L12.66,20.86C12.47,21.05 12.23,21.14 11.95,21.14C11.67,21.14 11.44,21.05 11.25,20.86C11.06,20.67 10.97,20.44 10.97,20.16C10.97,19.88 11.06,19.64 11.25,19.45L15.84,14.86C16.09,14.64 16.09,14.41 15.84,14.16C15.59,13.91 15.36,13.91 15.14,14.16L10.55,18.75C10.36,18.94 10.13,19.03 9.84,19.03C9.56,19.03 9.33,18.94 9.14,18.75C8.95,18.56 8.86,18.33 8.86,18.05C8.86,17.77 8.95,17.53 9.14,17.34L13.73,12.75C14,12.5 14,12.25 13.73,12C13.5,11.75 13.28,11.75 13.03,12L8.44,16.64C8.25,16.83 8,16.92 7.73,16.92C7.45,16.92 7.21,16.83 7,16.64C6.8,16.45 6.7,16.22 6.7,15.94C6.7,15.66 6.81,15.41 7.03,15.19L11.63,10.59C11.88,10.34 11.88,10.11 11.63,9.89C11.38,9.67 11.14,9.67 10.92,9.89L6.28,14.5C6.06,14.7 5.83,14.81 5.58,14.81C5.3,14.81 5.06,14.71 4.88,14.5C4.69,14.3 4.59,14.06 4.59,13.78C4.59,13.5 4.69,13.27 4.88,13.08C7.94,10 9.83,8.14 10.55,7.45L14.11,10.97C14.5,11.34 14.95,11.53 15.5,11.53C16.2,11.53 16.75,11.25 17.16,10.69C17.44,10.28 17.54,9.83 17.46,9.33C17.38,8.83 17.17,8.41 16.83,8.06L12.75,3.94M14.81,10.27L10.55,6L3.47,13.08C2.63,12.23 2.15,10.93 2.04,9.16C1.93,7.4 2.41,5.87 3.47,4.59C4.66,3.41 6.08,2.81 7.73,2.81C9.39,2.81 10.8,3.41 11.95,4.59L16.22,8.86C16.41,9.05 16.5,9.28 16.5,9.56C16.5,9.84 16.41,10.08 16.22,10.27C16.03,10.45 15.8,10.55 15.5,10.55C15.23,10.55 15,10.45 14.81,10.27V10.27Z"
                />
              }
              title="Пользовательское соглашение"
              text="В соответствии со статьей 428 Гражданского кодекса Российской Федерации настоящее Пользовательское соглашение (Договор) является договором присоединения. Предложение Товаров и Услуг на портале «Высшей школы стилистики» на условиях, указанных в предложении, и условиях настоящего Соглашения, является публичной офертой."
              link="/information/agree"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Segment
              icon={
                <path
                  fill="rgb(123,143,87)"
                  d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"
                />
              }
              title="Политика конфиденциальности"
              text="Политика конфиденциальности и безопасности: согласие на обработку персональных данных (далее «Согласие на обработку персональных данных») 
              Дата вступления в действие: 13/01/2011"
              link="/information/politic"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Requisites />
            <div style={{ height: "2rem" }} />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
