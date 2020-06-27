import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Кем и как может работать стилист?"
      teacher="Елена Прохорович"
      descript="Лекция, очно, Москва"
      descriptString
      onlineText="Лекция, очно, Москва"
      oflineIcon={props.oflineIcon ? true : false}
      date={DateToString(dates.masterClasses.stylisWork, true)}
      time="19:00"
      duration=""
      image="/img/master-class/stylist-profession.jpg"
      imageHeight
      text={
        <span>
          <b>Кем и как может работать стилист?</b>
          <br />
          <b>Для кого:</b> Специалистов и людей , которые хотят работать в
          индустрии моды и красоты. Стилистов, имиджмейкеров, визажистов,
          fashion-блоггеров и пр.
          <br />
          <b>Что будет:</b> Вы чувствуете, что fashion индустрия — это Ваше и
          хотите начать свой путь в мире красоты? Или Вы уже нашли свою стихию,
          но хотели бы узнать о новых карьерных и творческих возможностях,
          расширить сферу своей деятельности? На лекции мы обсудим, где может
          работать стилист / имиджмейкер, Вы узнаете о перспективных нишах
          индустрии и о разных вариантах Вашей профессиональной реализации.
        </span>
      }
      q
      part
      noView
      partPrice="0"
      free
      color="rose"
      id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
