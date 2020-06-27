import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Трагедия и праздник Dries Van Noten SPRING 2020"
      teacher="Татьяна Котенко"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      onlineIcon
      date={DateToString(dates.masterClasses.drienVanNoten, true)}
      time="11:00"
      duration=""
      image="/img/master-class/dries-van-noten.jpg"
      text={
        <Paragraph
          content={[
            <b>Трагедия и праздник Dries Van Noten SPRING 2020</b>,
            "Рассмотрим эксцентричный и богатый на эмоции образ в коллекции Dries Van Noten SPRING 2020. Как и с помощью каких элементов можно позаимствовать фееричный образ в свой гардероб."
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
