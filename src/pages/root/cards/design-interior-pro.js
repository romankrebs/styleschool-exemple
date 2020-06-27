import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title="Дизайн и декорирование интерьеров"
      teacher="Куратор: Елена Ламонова"
      descript="Очно и дистанционно. Диплом."
      descriptString
      onlineText="Очно и дистанционно. Диплом."
      date={"c " + DateToString(dates.designInterior.online, true)}
      duration=""
      image="/img/banners/banner_design_interior_prof.jpg"
      imageHeight
      onlineIcon
      oflineIcon
      q
      part
      color="rose"
      link="/living-interior-design-and-decoration"
    />
  );
}
