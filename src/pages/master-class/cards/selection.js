import React from "react";
import Card from "../card-short";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title={
        <span style={{ fontSize: "1em" }}>
          Подбор аксессуара для клиента: стиль, эстетика и тренды
        </span>
      }
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
      date={DateToString(dates.masterClasses.srm.accessuaries, true)}
      time={"13:00"}
      duration=""
      image="/img/master-class/selection.jpg"
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
