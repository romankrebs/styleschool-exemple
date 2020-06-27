import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardCourse(props) {
  return (
    <Card
      title="Практика на Milan Design Week"
      teacher="Елена Прохорович"
      descript="Сертификат"
      descriptString
      onlineText="Сертификат"
      date={"c " + dates.milanDesignWeek} // DateToString(dates.milanDesignWeek, true)}
      duration=""
      image="/img/milan-design-week/for-card.jpg"
      imageHeight
      oflineIcon
      q
      part
      color="rose"
      link="/milan-design-week"
    />
  );
}
