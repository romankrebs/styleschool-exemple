import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Forma from "./credit-form";
import Button from "./button-reserved";

const wStyles = theme => ({
  boxsLeft: {
    padding: 0,
    paddingRight: "0.7em"
  },
  boxsRight: {
    padding: 0,
    paddingLeft: "0.7em"
  },
  "@media (max-width: 959px)": {
    boxsRight: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: "0.7em",
      paddingBottom: "0.7em"
    },
    boxsLeft: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: "0.7em",
      paddingBottom: "0.7em"
    }
  }
});

function Dates(props) {
  const { classes } = props;
  const styles = {
    h2: {
      fontFamily: "Roboto",
      fontSize: "1.4em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "left",
      padding: "1.4em 0",
      margin: 0
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "1.1em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "center",
      padding: "1.1em 0",
      margin: 0
    },
    h2small: {
      fontFamily: "Roboto",
      fontSize: "1.1em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "left",
      padding: "1.4rem 0",
      margin: 0
    },
    p: {
      fontFamily: "Roboto",
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: 0,
      paddingTop: "1em",
      paddingBottom: "1em"
      // lineHeight: "1.4em"
    }
  };

  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} md={12}>
        {props.smallHead ? (
          <h3 style={styles.h2small}>Ближайший набор</h3>
        ) : (
          <h2 style={styles.h2}>Ближайший набор</h2>
        )}
      </Grid>
      <Grid item xs={12} md={6} className={classes.boxsLeft}>
        <Paper
          style={{
            minHeight: "15.5rem",
            paddingBottom: "1.1rem",
            boxSizing: "border-box"
          }}
        >
          <h3 style={styles.h3}>
            {props.formsEducation ? props.formsEducation : "Дистанционно"}
          </h3>
          <p
            style={{
              ...styles.p,
              background: "rgb(240,240,240)",
              textAlign: "center",
              padding: "0.2em"
            }}
          >
            {props.data}
          </p>
          <p
            style={{
              ...styles.p,
              textAlign: "center"
            }}
          >
            Забронируйте место, внесите {props.avans ? props.avans : "900"} руб.
            <br />
            Получите доступ к демо лекциям
            <br />
            Начинайте учится с группой
          </p>
          <Button link={props.link} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} className={classes.boxsRight}>
        <Paper
          style={{
            minHeight: "15.5rem",
            boxSizing: "border-box",
            paddingTop: "1rem",
            paddingBottom: "1.1rem",
            ...props.styeleRightBox
          }}
        >
          {props.textRightBlock ? (
            <div
              style={{
                fontFamily: "Roboto",
                fontSize: "1em",
                textAlign: "center",
                color: "rgb(100,100,100)",
                margin: 0,
                padding: 0,
                lineHeight: "1.6rem"
              }}
            >
              {props.textRightBlock}
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontSize: "1.2em",
                  textAlign: "center",
                  lineHeight: "1.4em",
                  fontWeight: 500,
                  color: "rgb(100,100,100)",
                  margin: 0
                }}
              >
                Учиться от
                <span
                  style={{
                    // fontSize: "1.4em",
                    fontWeight: 600,
                    color: "rgb(80,80,80)"
                  }}
                >
                  {" "}
                  5<sup style={{ fontSize: "0.8em" }}>000</sup>{" "}
                </span>
                руб. в месяц в рассрочку
              </p>
              <p
                style={{
                  fontSize: "1em",
                  textAlign: "center",
                  lineHeight: "1.4em",
                  fontWeight: 400,
                  color: "rgb(100,100,100)"
                }}
              >
                После бронирования места в группе Вы получаете доступ к
                демо&nbsp;лекциям, мы оформляем зачисление на&nbsp;курс.
              </p>
              <p
                style={{
                  fontSize: "1em",
                  textAlign: "center",
                  lineHeight: "1.4em",
                  fontWeight: 400,
                  color: "rgb(100,100,100)"
                }}
              >
                В случае отказа от обучения сумма брони возвращается.
              </p>
            </div>
          )}
          <div style={{ paddingTop: "1em" }}>
            <Forma
              sum={`${props.price}.00`}
              name={props.nameCourse}
              white
              test={false}
              textButton="Оформить рассрочку можно здесь"
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(wStyles)(Dates);
