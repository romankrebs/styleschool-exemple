import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Button from "../../../components/tickets-button";

export default function CardModern(props) {
  return (
    <Card
      head="Психология стиля"
      title="Психология цвета, актуальные цвета 2020"
      teacher="Марина Бонецкая"
      descript="Лекция, очно, Москва"
      descriptString
      onlineText="Лекция, очно, Москва"
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.psyhologyColor, true)}
      time="19:00"
      duration=""
      image="/img/master-class/psychology-of-colors.jpg"
      text={
        <div>
          <Button event="5e6a464aaa10b18e147d9bd7" />
          <span>
            Что такое модная палитра? Каприз дизайнеров? А ведь за каждым цветом
            стоит череда определенных смыслов…
            <br />
            <br />
            Кем предписаны модные оттенки? Как наблюдают специалисты за
            колористикой коллекций на Неделях Моды?
            <br />
            <br />
            Изучение рекомендаций Института Цвета Pantone превращается в
            настоящее откровение. Научитесь читать цвета, научитесь понимать,
            чем дышит общество… и мода
          </span>
        </div>
      }
      q
      imageHeight
      part
      noView
      partPrice="900"
      color="rose"
      id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
