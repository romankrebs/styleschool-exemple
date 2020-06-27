import React from "react";
import Card from "../card-short";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title="Тренды в аксуссуарах SS20. Винтаж и Handmade"
      teacher="Татьяна Фомина"
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
      date={DateToString(dates.masterClasses.srm.trands[props.index], true)}
      time={props.index === 0 ? "13:00" : "16:00"}
      duration=""
      image="/img/master-class/vintage.png"
      oflineIcon
      // imageHeight
      free
      q
      noCorner
      part
      color="rose"
      link={false}
    />
  );
}
