import React from "react";
import { Link } from "react-router-dom";
import { DateToString } from "./dates";

const ContentMaker = props => {
  const styles = {
    head: {
      fontFamily: "inherit",
      fontSize: "1.2em",
      fontWeight: 700,
      color: "rgb(122,101,89)", // "rgb(123,143,87)",
      paddingLeft: 3,
      paddingTop: "1rem"
    },
    h2: {
      fontFamily: "PT Sans Narrow",
      fontWeight: 700,
      color: "rgb(122,101,89)",
      padding: "2rem 0 1rem",
      fontSize: "1.6rem",
      textAlign: "left",
      margin: 0
    },
    data: {
      fontFamily: "inherit",
      fontSize: "1em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      paddingLeft: 3
    },
    descript: {
      fontFamily: "inherit",
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      paddingLeft: 3
    }
  };

  let months = [[], [], [], [], [], [], [], [], [], [], [], []];
  let result = [];
  let monthsName = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];

  if (props.content[0]) {
    let temp = [];
    props.content.map(el => {
      if (el.data) {
        temp.push(el);
      }
    });
    let content = temp.sort((a, b) => a.data.getTime() - b.data.getTime());
    // let content = props.content;
    content.map(el => {
      months[el.data.getMonth()].push(el);
    });
    months.map((month, i) => {
      if (month.length > 0) {
        result.push(
          <div>
            <h2 style={styles.h2}>{monthsName[i]}</h2>
            {month.map((el, i) => (
              <div key={"month" + i.toString()}>
                <Link to={el.link}>
                  <p style={styles.head}>{el.head}</p>
                </Link>
                <p style={styles.descript}>{el.descript}</p>
                <p style={styles.descript}>
                  <b>
                    {el.type} — {DateToString(el.data, true)}
                  </b>
                </p>
              </div>
            ))}
          </div>
        );
      }
    });
  }

  return (
    <div>
      {props.content[0] ? (
        result.map(el => <div>{el}</div>)
      ) : (
        <p style={{ ...styles.head, color: "rgb(100,100,100)" }}>
          Курсов в данном разделе пока не запланировано
        </p>
      )}
    </div>
  );
};

export default ContentMaker;
