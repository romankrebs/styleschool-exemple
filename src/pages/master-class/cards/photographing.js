import React from "react";
import Card from "../card-short";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title="Съёмка аксессуаров: стилизация, концепция, актуальные темы"
      teacher="Юлия Пындычук"
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
      date={DateToString(
        dates.masterClasses.srm.photographing[props.index],
        true
      )}
      time={"16:00"}
      duration=""
      image="/img/master-class/photo.jpg"
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
