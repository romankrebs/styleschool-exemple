import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Мечтатель в дневное время. Schiaparelli FALL 2020"
      teacher="Татьяна Котенко"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      onlineIcon
      date={DateToString(dates.masterClasses.schiaparelli, true)}
      time="11:00"
      duration=""
      image="/img/master-class/schiaparelli.jpg"
      text={
        <Paragraph
          content={[
            <b>Мечтатель в дневное время. Schiaparelli FALL 2020</b>,
            "Сюрреалистичность, богемность и повседневность в одном флаконе от модного дома Скиапарелли. Как создать изысканный и современный образ?!"
          ]}
        />
      }
      onlineIcon
      q
      free
      part
      noView
      partPrice="0"
      color="rose"
    />
  );
}
