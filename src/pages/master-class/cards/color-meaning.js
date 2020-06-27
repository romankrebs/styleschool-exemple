import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Цвет: смыслы, символы, тренды"
      teacher="Марина Бонецкая"
      descript={<span>Лекция онлайн</span>}
      onlineText="Лекция онлайн"
      descriptString
      onlineIcon
      date={DateToString(dates.masterClasses.colorMeanings, true)}
      time={TimeToString(dates.masterClasses.colorMeanings)}
      duration=""
      image="/img/master-class/color-meanings.jpg"
      text={
        <Paragraph
          content={[
            <b>Цвет: смыслы, символы, тренды</b>,
            "Является ли модная палитра простым капризом дизайнеров? Отнюдь, ведь за каждым цветом стоит череда определенных смыслов, знание которых превращает изучение трендов в настоящее откровение. Наблюдая цветовые тенденции, пытаемся понимать, чем дышит современный социум."
          ]}
        />
      }
      q
      part
      noView
      free
      partPrice="0"
      color="rose"
    />
  );
}
