import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Сам Себе Стилист, Часть 2"
      teacher="Светлана Кононец"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.selfStyle.part2, true)}
      time="10:30"
      duration=""
      image="/img/master-class/self-style-2.jpg"
      imageHeight
      text={
        <Paragraph
          content={[
            <b>Сам Себе Стилист, Часть 2</b>,
            "Цвет – уникальное явление! Он раскрашивает нашу жизнь красками, создает настроение, влияет на самочувствие и реакции окружающих нас людей. Цвет может украшать внешность, а может, наоборот, подчеркивать недостатки. Изучение «цветной» науки позволит не просто выглядеть привлекательнее и моложе, но и создавать желаемое эмоциональное впечатление."
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
      // id="SsWoqRF9vFPJYP3Z8"
      // setBillingId={props.setBillingId}
    />
  );
}
