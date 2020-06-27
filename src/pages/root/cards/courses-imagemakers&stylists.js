import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title="Курсы имиджмейкеров, стилистов, шоперов"
      teacher="Куратор: Татьяна Фомина"
      descript="Очно и дистанционно. Диплом."
      descriptString
      onlineText="Очно и дистанционно. Диплом."
      date={"c " + DateToString(dates.imagemaker.online, true)}
      duration=""
      image="/img/root-cards/group2.jpg"
      onlineIcon
      oflineIcon
      imageHeight
      q
      part
      color="rose"
      link="/second-degree-imagemaker"
    />
  );
}
