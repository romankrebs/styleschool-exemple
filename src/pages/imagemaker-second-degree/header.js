import React from "react";
import { Grid, Hidden, Paper, useMediaQuery, Button } from "@material-ui/core";
// import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor';
import HeaderFull from "../../components/header-fullscreen";
import Fade from "react-reveal/Fade";

const Ticket = props => {
  return (
    <Fade right delay={props.delay || 0}>
      <Button
        href={"#" + props.link}
        target={props.target ? props.target : "_self"}
        fullWidth
        size="large"
        style={{
          backgroundColor: `#ffc625`,
          color: "black"
        }}
      >
        {props.children}
      </Button>
    </Fade>
  );

  // return
  // <a href={"#" + props.link} target={props.target ? props.target : "_self"}>
  //   <Paper
  //     style={{
  //       background: "rgba(123,143,87,0.95)",
  //       padding: 12,
  //       cursor: "pointer"
  //     }}
  //   >
  //     <p
  //       style={{
  //         textAlign: "center",
  //         color: "rgb(255,255,255)",
  //         fontSize: props.fontSize || "1em",
  //         margin: 0,
  //         padding: 0
  //       }}
  //     >
  //       {props.children}
  //     </p>
  //   </Paper>
  // </a>
};

export const Header = props => {
  const s480 = useMediaQuery("(max-width:480px)"),
    s600 = useMediaQuery("(max-width:600px)");
  // s900 = useMediaQuery("(min-width:601px)");

  return (
    <div
      style={{
        // margin: "0 auto",
        background: s480
          ? "url(/img/i2v-test/fullscreen-480.jpg) center / auto 100% no-repeat"
          : s600
            ? "url(/img/i2v-test/fullscreen-600.jpg) center / cover no-repeat"
            : "url(/img/i2v-test/fullscreen-1000.png) center 20% / cover no-repeat, radial-gradient(at 40% 50%, rgb(228,229,235), rgb(203,207,210))"
      }}
    >
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          style={{
            maxWidth: 1000,
            magrin: "0 auto",
            boxSizing: "border-box"
            // 'trancparent',
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            style={{ padding: 20, paddingLeft: 0, boxSizing: "border-box" }}
          >
            <Paper
              style={{
                background: "rgba(255,255,255,0.7)",
                padding: 20,
                maxWidth: "80vw",
                margin: "0 auto"
              }}
            >
              <h1
                style={{
                  color: "rgb(50,50,50)",
                  textAlign: "center",
                  margin: 0,
                  padding: "24px 8px",
                  fontFamily: props.font.title || "inherit"
                }}
              >
                Имиджмейкер.
                <br />
                Второе высшее
              </h1>
              <div
                style={{
                  background: "rgb(0,0,0)",
                  height: 1,
                  width: "50%",
                  margin: "0 auto"
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  margin: 0,
                  padding: "24px 8px",
                  fontSize: props.font.size || "1em"
                }}
              >
                Обучение по программе
                <br />
                «Имидж‑консалтинг и fashion&#8209;styling».
                <br />
                Идеальный старт в индустрии моды
              </p>
              <p
                style={{
                  color: "rgb(100,100,100)",
                  padding: "12px 0",
                  fontSize: "0.8em",
                  margin: 0,
                  textAlign: "center"
                }}
              >
                Лицензия на дополнительное профессиональное образование&nbsp;
                <span style={{ fontSize: "0.82em" }}>№&nbsp;039759</span>
              </p>
            </Paper>
          </Grid>
          <Hidden smDown>
            <Grid item md={6} style={{ paddingRight: 20 }}>
              <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item md={10}>
                  <Ticket delay={0} link="diplom" fontSize={props.font.size}>
                    Диплом
                  </Ticket>
                </Grid>
                <Grid item md={10}>
                  <Ticket delay={300} link="dates" fontSize={props.font.size}>
                    Расписание
                  </Ticket>
                </Grid>
                <Grid item md={10}>
                  <Ticket
                    delay={600}
                    link="programma"
                    fontSize={props.font.size}
                  >
                    Программа обучения
                  </Ticket>
                </Grid>
                <Grid item md={10}>
                  <Ticket
                    delay={900}
                    link="system-pay"
                    fontSize={props.font.size}
                  >
                    Стоимость обучения
                  </Ticket>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Grid container spacing={3} style={{ padding: 24 }} justify="center">
          <Grid item xs={12}>
            <Ticket delay={0} link="diplom">
              Университетский диплом
            </Ticket>
          </Grid>
          <Grid item xs={12}>
            <Ticket delay={300} link="dates">
              Ближайшие даты
            </Ticket>
          </Grid>
          <Grid item xs={12}>
            <Ticket delay={600} link="programma">
              Программа обучения
            </Ticket>
          </Grid>
          <Grid item xs={12}>
            <Ticket delay={900} link="system-pay">
              Стоимость обучения
            </Ticket>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export const HeaderComponent = () => {
  return (
    <HeaderFull
      head1={
        <React.Fragment>
          <Hidden implementation="css" only={["md", "lg", "xl"]}>
            Курсы имидж&shy;мейкеров как Второе высшее
          </Hidden>
          <Hidden implementation="css" only={["xs", "sm"]}>
            Курсы имиджмейкеров как Второе высшее
          </Hidden>
        </React.Fragment>
      }
      headStyle={{}}
      descript={
        <span>
          Профессиональная подготовка по программе «Имидж&#8209;консалтинг и
          fashion-styling».
          <br />
          Идеальный старт в индустрии моды
        </span>
      }
      background="url(img/fullscreen.jpg) left top/cover no-repeat"
      styles={{
        lineColor: "rgb(0,0,0)",
        bkgBlockColor: "rgba(255,255,255,0.9)",
        textColor: "rgb(0,0,0)"
      }}
      formsEducation="{ Очно | Дистанционно }"
      bottomLine={
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={32}
          style={{ paddingTop: 40, paddingBottom: 40 }}
        >
          <Grid item xs={12} sm={6} md={3} style={{ padding: "10px 20px" }}>
            <Paper
              style={{
                background: "rgba(123,143,87,1.0)",
                color: "rgba(255,255,255,1.0)",
                padding: 15,
                fontFamily: "Roboto",
                fontSize: 14,
                textAlign: "center"
              }}
            >
              Диплом
              <br />
              Гос. Университета
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ padding: "10px 20px" }}>
            <Paper
              style={{
                background: "rgba(123,143,87,1.0)",
                color: "rgba(255,255,255,1.0)",
                padding: 15,
                paddingLeft: 8,
                paddingRight: 8,
                // fontFamily: "Roboto",
                fontSize: 14,
                textAlign: "center"
              }}
            >
              Ближайший&nbsp;набор
              <br />
              июнь&nbsp;2019
            </Paper>
          </Grid>
          <Grid item md={6} />
        </Grid>
      }
    />
  );
};
