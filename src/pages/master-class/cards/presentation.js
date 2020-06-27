import React from "react";
import Card from "../card-short";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title={
        <span style={{ fontSize: "1em" }}>
          Эффективная презен&shy;тация эксклюзивного продукта
        </span>
      }
      teacher="Маргарита Хлестова"
      descript={
        <span>
          Открытая лекция. Очно.
          <br />
          Место проведения: павильон&nbsp;2
          <sub>3</sub>
          &nbsp;D25
        </span>
      }
      descriptString
      // onlineText=
      date={DateToString(dates.masterClasses.srm.presentation, true)}
      time={"14:00"}
      duration=""
      image="/img/master-class/podarochnaja-upakovka.jpg"
      oflineIcon
      // imageHeight
      q
      free
      noCorner
      part
      color="rose"
      link={false}
    />
  );
}
