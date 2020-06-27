import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Роскошь и спорт буржуазии. Hermès FALL 2020"
      teacher="Татьяна Котенко"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      onlineIcon
      date={DateToString(dates.masterClasses.hermes, true)}
      time="20:30"
      duration=""
      image="/img/master-class/hermes.jpg"
      text={
        <Paragraph
          content={[
            <b>Роскошь и спорт буржуазии. Hermès FALL 2020</b>,
            "Красиво, должно быть полезно! Именно об этом трактует образ в коллекции Herme Fall 2020. Как создать стильный и удобный  образ 2020"
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
