import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import List from "../../../components/list";

export default function CardModern(props) {
  return (
    <Card
      head="Дизайн интерьеров"
      title="Профессия дизайнер интерьеров"
      teacher="Елена Ламонова"
      descript="Лекция, online, Москва."
      descriptString
      onlineText={
        <span>
          Лекция, online, Москва.
          <br />
          Место проведения: ВШСДТ
        </span>
      }
      date={DateToString(dates.masterClasses.interiorDesigner, true)}
      time="19:00"
      duration=""
      image="/img/master-class/interior-designer.jpg"
      text={
        <List
          arr={[
            "Важность профессии дизайнер",
            "Что умеет дизайнер и что делает",
            "Что должен знать дизайнер и зачем",
            "График дизайнера и доходы при трудоустройстве или фрилансе",
            "Чем полезна узкая специализация и как ее выбрать",
            "От марафона до курса и бакалавриата: что выбрать",
            "Как поступить на обучение",
            "Что делать после обучения"
          ]}
        />
      }
      oflineIcon={props.oflineIcon ? true : false}
      q
      imageHeight
      free
      onlineIcon
      part
      noView
      partPrice="0"
      color="rose"
      // id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
