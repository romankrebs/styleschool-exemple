import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title="Шопинг стажировка в Милане"
      teacher="Елена Прохорович"
      descript="Сертификат"
      descriptString
      onlineText="Сертификат"
      date={"c " + DateToString(dates.internshipInMilan, true)}
      duration=""
      image="/img/internship-in-milan/fullscreen-for-news.jpg"
      imageHeight
      oflineIcon
      q
      part
      color="rose"
      link="/internship-in-milan"
    />
  );
}
