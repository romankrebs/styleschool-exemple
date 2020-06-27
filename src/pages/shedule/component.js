import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  rows: {
    background: "rgb(255,255,255)",
    // transition: 'background 0.5s',
    borderTop: "1px solid rgb(240,240,240)",
    padding: "8px 4px",
    margin: 0,
    "&:hover": {
      background: "rgb(245,245,245)"
    }
  },
  head: {
    fontSize: "1.6em",
    fontWeight: 700,
    color: "rgb(123,143,87)",
    textAlign: "left"
  },
  date: {
    fontSzie: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    margin: 0,
    padding: 4
  },
  text: {
    fontSzie: "1em",
    fontWeight: 400,
    color: "rgb(123,143,87)",
    padding: 4,
    margin: 0,
    textAlign: "center"
  },
  link: {
    fontSzie: "1em",
    fontWeight: 400,
    color: "rgb(123,143,87)",
    textAlign: "center",
    "&:hover": {
      color: "rgb(200,123,67)"
    }
  },
  coll: {
    borderLeft: "1px solid rgb(123,143,87)",
    textAlign: "center",
    "@media (max-width: 600px)": {
      coll: {
        borderLeft: 0
      }
    }
  }
});

function CreateRows(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={1}>
        <p className={classes.date}>{props.date}</p>
      </Grid>
      <Grid item xs={12} md={3} className={classes.coll}>
        <Link to={props.link} className={classes.link}>
          {props.name}
        </Link>
      </Grid>
      <Grid item xs={12} md={2} className={classes.coll}>
        <p className={classes.text}>{props.duration}</p>
      </Grid>
      <Grid item xs={12} md={2} className={classes.coll}>
        <p className={classes.text}>{props.periodicity}</p>
      </Grid>
      <Grid item xs={12} md={2} className={classes.coll}>
        <p className={classes.text}>
          {props.online === true
            ? "Дистанционно"
            : props.online === false
              ? "Очно"
              : props.online}
        </p>
      </Grid>
      <Grid item xs={12} md={1} className={classes.coll}>
        <p className={classes.text}>{props.diplom}</p>
      </Grid>
      <Grid item xs={12} md={1} className={classes.coll}>
        <Link to={props.link} className={classes.link}>
          Подробнее
        </Link>
      </Grid>
    </React.Fragment>
  );
}

function Month(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.rows}>
        <Grid item xs={12} md={12}>
          <h3 className={classes.head}>{props.head}</h3>
        </Grid>
      </Grid>
      {props.datas.map((el, i) => (
        <Grid container className={classes.rows} justify="space-between">
          <CreateRows
            link={el.link}
            date={el.date}
            name={el.name}
            duration={el.duration}
            periodicity={el.periodicity}
            online={el.online}
            diplom={el.diplom}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
}

export default Month;
