import React from "react";
import { Link } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";
import { stylesDark } from "./styles";
import { withStyles } from "@material-ui/styles";
import Footer from "./footer-new";
import Message from "./button-messages";
import { Login2 } from "./icons";

const wStyles = theme => stylesDark;
const font = "Roboto"; // "Alegreya Sans";
const sizeLeftPanel = 320;

function Page(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div
      style={{
        maxWidth: "100vw",
        boxSizing: "border-box",
        padding: 0,
        margin: 0
      }}
    >
      {/* контент главной страницы */}
      <div
        style={{
          filter: open ? "blur(5px)" : "blur(0px)"
          // transition: "0.5s filter"
        }}
      >
        {/* верхняя полоса */}
        <div className={classes.topLine}>
          <div
            className={classes.topBox}
            style={{
              filter: open ? "blur(2px)" : "blur(0px)"
              // transition: "0.5s filter"
            }}
          >
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs={3} md={2} style={{ textAlign: "left" }}>
                <div
                  onClick={() => setOpen(true)}
                  style={{
                    cursor: "pointer",
                    zIndex: 1010,
                    width: "fit-content"
                  }}
                >
                  <svg
                    style={{ marginBottom: "-0.5rem" }}
                    width="34px"
                    height="24px"
                    viewBox="0 0 24 34"
                  >
                    <path
                      fill="rgb(250,250,250)"
                      d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                    />
                  </svg>
                  &ensp;
                  <span
                    style={{
                      fontFamily: font,
                      fontSize: 14,
                      color: "rgb(230,230,230)",
                      fontWeight: 600,
                      verticalAlign: "top"
                    }}
                  >
                    меню
                  </span>
                </div>
              </Grid>
              <Grid item xs={6} md={8}>
                <div
                  style={{
                    margin: "0 auto",
                    fontFamily: font,
                    fontWeight: 600,
                    color: "rgb(240,240,240)",
                    textAlign: "center",
                    fontSize: 14
                  }}
                >
                  {props.lable ? (
                    <span>
                      <Hidden smDown>
                        <Link to="/">
                          <span
                            style={{
                              color: "rgb(240,240,240)",
                              fontSize: "0.95rem"
                            }}
                          >
                            #ВШСДТ
                          </span>
                        </Link>
                        &emsp;&bull;&emsp;
                        {props.lable}
                      </Hidden>
                      <Hidden mdUp>
                        <span
                          style={{
                            color: "rgb(240,240,240)",
                            fontSize: 15
                          }}
                        >
                          {props.lableMobile}
                        </span>
                      </Hidden>
                    </span>
                  ) : null}
                </div>
              </Grid>
              <Grid item xs={3} md={2}>
                <div className={classes.login}>
                  <a href="https://billing.styleschool.ru/">
                    <Login2 color="rgb(240,240,240)" size={16} />
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        {/* конец верхней полосы */}

        <div style={{ maxWidth: 1000, margin: "0 auto" }}>{props.children}</div>
        <div
          style={{
            filter: open ? "blur(2px)" : "blur(0px)",
            // transition: "0.5s filter",
            maxWidth: "100vw",
            background: "rgb(0,0,0)"
          }}
        >
          <Footer />
        </div>
      </div>
      <Message />
      {/* конец контента главной страницы */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: open ? "100vw" : 0,
          height: open ? "100vh" : 0,
          background: "rgba(0,0,0,0.5)",
          overflow: "hidden"
        }}
        onClick={() => setOpen(false)}
      />
      <div
        style={{
          height: "100vh",
          boxSizing: "border-box",
          width: sizeLeftPanel,
          position: "fixed",
          top: 0,
          left: -sizeLeftPanel,
          transform: open
            ? `translateX(${sizeLeftPanel}px)`
            : `translateX(${-sizeLeftPanel}px)`,
          transition: "all 0.5s",
          opacity: open ? 1.0 : 0,
          background: "rgba(0,0,0,0.8)",
          padding: 0,
          lineHeight: "2rem"
        }}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div style={{ padding: "1rem 1rem 1rem 2rem", width: sizeLeftPanel }}>
          <div
            style={{
              textAlign: "right",
              padding: "0 0.5rem",
              cursor: "pointer",
              margin: 0,
              position: "relative",
              top: 0,
              left: "-2rem"
            }}
            onClick={() => setOpen(false)}
          >
            <svg version="1.1" width="36" height="36" viewBox="0 0 24 24">
              <path
                fill="rgb(120,120,120)"
                d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
              />
            </svg>
          </div>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item xs={2} md={2}>
              <img
                src="/img/root-test2/regicon.png"
                alt="ВШСДТ"
                style={{
                  width: 38,
                  marginRight: 0, // "1rem",
                  marginTop: 0,
                  marginLeft: 0,
                  marginBottom: 0
                }}
              />
            </Grid>
            <Grid item xs={9} md={9} style={{ lineHeight: "1rem" }}>
              <Link to="/">
                <span
                  style={{
                    fontFamily: "PT Sans Narrow", //"Alice",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "rgb(187,144,41)" // "rgb(200,200,200)"
                  }}
                >
                  АНО ДПО
                  <br />
                  «Высшая школа стилистики,
                  <br />
                  дизайна и технологий»
                </span>
              </Link>
            </Grid>
          </Grid>
          <div style={{ height: "15vh" }} />
          <Link to="/pro-education">
            <span className={classes.topLink}>
              Профессиональное образование
            </span>
          </Link>
          <br />
          <Link to="/practice">
            <span className={classes.topLink}>Практики, стажировки</span>
          </Link>
          <br />
          <Link to="/video">
            <span className={classes.topLink}>Видео курсы</span>
          </Link>
          <br />
          <Link to="/master-class">
            <span className={classes.topLink}>Лекции, мастер-классы</span>
          </Link>
          <div
            style={{
              height: 1,
              background: "rgb(100,100,100)",
              width: 200,
              margin: "1rem",
              marginLeft: 0
            }}
          />
          <Link to="/shedule">
            <span className={classes.topLink}>Расписание курсов</span>
          </Link>
          <br />
          <Link to="/order">
            <span className={classes.topLink}>Запись на обучение</span>
          </Link>
          <br />
          <Link to="/career">
            <span className={classes.topLink}>Центр Карьеры</span>
          </Link>
          <br />
          <Link to="/contacts">
            <span className={classes.topLink}>Контакты</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(wStyles)(Page);
