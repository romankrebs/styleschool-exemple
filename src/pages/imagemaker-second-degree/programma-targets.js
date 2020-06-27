import React from "react";
import List from "../../components/list";
import ScrollableAnchor from "react-scrollable-anchor";
import { dates, DateToString } from "../shedule/dates";

const ProgrammaTargets = props => {
  const styles = {
    h2: {
      fontFamily: props.font ? props.font.title : "inherit",
      fontSize: "1.8em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      fontWeight: 500,
      margin: 8,
      marginTop: 32,
      padding: "12px 0"
    },
    p: {
      fontSize: "1.1em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      fontWeight: 400
    },
    h3: {
      fontFamily: props.font ? props.font.title : "inherit",
      fontSize: "1.6em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontWeight: 500,
      margin: 8,
      marginTop: 32,
      padding: "12px 0"
    },
    color: {
      color: "rgb(100,123,67)",
      fontWeight: 700
    }
  };

  return (
    <div>
      <ScrollableAnchor id={"programma"}>
        <h2 style={styles.h2}>Программа обучения</h2>
      </ScrollableAnchor>
      <p style={styles.p}>
        длительность 11 месяцев, периодичность 3 раза в неделю по 4
        академических часа, 480 академических часов занятий и практик +
        мастер-классы с практиками индустрии
      </p>
      <h3 style={styles.h3}>Расписание групп на 2020 год</h3>
      <List
        arr={[
          <span>
            <span style={styles.color}>
              {DateToString(dates.imagemaker.online, true)}
            </span>
            , программа Имидж-консалтинг и Fashion-styling, дистанционно
          </span>,
          <span>
            <span style={styles.color}>
              {DateToString(dates.imagemaker.ofline, true)}
            </span>
            , программа Имидж-консалтинг и Fashion-styling, очно
          </span>,
          <span>
            <span style={styles.color}>Спец. набор</span>: в апреле заключаются
            договора на программу двух дипломов «Имиджмейкер-стилист»
          </span>
        ]}
        style={{ ...styles.p, textAlign: "left" }}
        num="none"
        olStyle={{ padding: 12 }}
      />
    </div>
  );
};

export default ProgrammaTargets;
