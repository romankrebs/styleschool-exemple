import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title="Визуальный мерчендайзинг и витринистика"
      teacher="Куратор: Маргарита Хлестова"
      descript="Дистанционно. Диплом."
      descriptString
      onlineText="Дистанционно. Диплом."
      date={"c " + DateToString(dates.visualMerchandising, true)}
      duration=""
      image="/img/banners/banner-visual.jpg"
      imageHeight
      onlineIcon
      q
      part
      color="rose"
      link="/visual-merchandising-and-showcases-design"
    />
  );
}
