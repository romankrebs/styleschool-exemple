import React from "react";
import { Grid, CircularProgress, IconButton } from "@material-ui/core";
import { Helmet } from "react-helmet";
import ActualMonth from "./actual";
import Price from "./price";
import Concept from "./conception";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";
import WantToKnow from "../../components/want-to-know";
import { Clear } from "@material-ui/icons";
import { dates, DateToString, TimeToString } from "../shedule/dates";
import Player from "./player";
import TextBack from "./text-back";
import PastEvents from "./past-events";
import Page from "../../components/page";

export default class Modern extends React.Component {
  state = {
    open: false,
    url: "",
    loaded: false
  };

  setBillingId = id => {
    this.setState({
      url: `https://billing.styleschool.ru/event/${id}/simple`,
      loaded: false
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Лекции и мастер-классы</title>
          <meta name="keywords" content="ВШС: Лекции и мастер-классы" />
        </Helmet>
        <Page lable="Лекции и мастер классы" lableMobile="Мастер классы">
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Grid item xs={12} md={12} style={{ padding: 20 }}>
              <h1
                style={{
                  fontFamily: "Roboto",
                  fontSize: "2em",
                  fontWeight: 700,
                  textAlign: "center",
                  color: "rgb(80,80,80)"
                }}
              >
                Современная мода и стиль
              </h1>
              <Player
                link="G5jjZ02Tv3w"
                title="Сам Себе Стилист, часть 7"
                teacher="Светлана Шабалина"
                date={DateToString(dates.masterClasses.selfStyle.part7, true)}
                time={TimeToString(dates.masterClasses.selfStyle.part7)}
                text="Шопинг: стресс или удовольствие…"
              />
              {/* <Player
                link="rYKZAsSnC84"
                title="Интервью преподавателя ВШСДТ Татьяны Фоминой с основателем ВШС в Новосибирске Надеждой Исхаковой"
                teacher={false}
                date="18 апреля"
                time="15:00"
                text={
                  <span>
                    <b>Тема беседы</b>: карьерный рост для стилистов.
                  </span>
                }
              /> */}

              <TextBack />
              <h2
                style={{
                  fontSize: "1.6em",
                  color: "rgb(100,100,100)",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                  textAlign: "center",
                  margin: 0,
                  padding: "1.6em 0 1.4em 0"
                }}
              >
                Лекции и мастер-классы
              </h2>
              <ActualMonth setBillingId={this.setBillingId} />
              <PastEvents />
              <div style={{ height: "2em" }} />
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "1em",
                  fontWeight: 400,
                  textAlign: "center",
                  color: "rgb(80,80,80)"
                }}
              >
                Запись на платные лекции и мастер-классы по предварительной
                регистрации
              </p>
              <h2
                style={{
                  fontFamily: "Roboto",
                  fontSize: "1.6em",
                  fontWeight: 700,
                  textAlign: "center",
                  color: "rgb(80,80,80)",
                  marginTop: 60
                }}
              >
                Записаться или задать вопрос можно здесь
              </h2>
              <HorizontalForm />
              {/* <Cards2 /> */}
              <WantToKnow noHead />
              {/* <Descript /> */}
              <Price />
            </Grid>
          </Grid>
          <Concept />
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Grid item xs={12} md={12} style={{ padding: 20 }}>
              <Banners />
            </Grid>
          </Grid>
        </Page>
        {this.state.url && (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 99997,
              backgroundColor: "white"
            }}
          >
            {!this.state.loaded && (
              <CircularProgress
                style={{
                  position: "absolute",
                  left: "calc(50% - 40px)",
                  top: "calc(50% - 40px)",
                  zIndex: -1
                }}
              />
            )}
            <iframe
              src={this.state.url}
              title="windowPay"
              onLoad={() => this.setState({ loaded: true })}
              style={{
                height: "100%",
                width: "100%",
                border: 0,
                zIndex: 99999
              }}
            />
            <IconButton
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 99999,
                backgroundColor: `#0c0c0c63`
              }}
              onClick={() => this.setState({ url: "" })}
            >
              <Clear style={{ color: "white" }} />
            </IconButton>
          </div>
        )}
      </div>
    );
  }
}
