import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Button from "../../../components/tickets-button";

export default function CardModern(props) {
  return (
    <Card
      head="Имидж и стиль"
      title="Тренды и трендсеттеры, стиль в одежде 2020"
      teacher="Юлия Фролова"
      descript="Лекция, очно, Москва"
      descriptString
      onlineText="Лекция, очно, Москва"
      date={DateToString(dates.masterClasses.trands, true)}
      time="19:00"
      duration=""
      image="/img/master-class/trand-trandsetter.jpg"
      text={
        <div>
          <Button event="5e6a411d9ac894fc1968700a" />
          «Мода циклична» — это правило которое заставляет «хорошо забытое
          старое» возвращаться из прошлого в каждый новый сезон. Что же из
          Вашего гардероба пора достать на первую линию и использовать в
          гардеробе сезона Весна-Лето 2020?
          <br />
          <br />
          Тренды. Цвета. Фактуры. Модели. Нюансы. Интересные приемы.
          <br />
          <br />
          Смотрим дизайнеров, коллекции одежды и принципы комбинирования для
          жизни, карьеры и мероприятий в новом году
        </div>
      }
      oflineIcon={props.oflineIcon ? true : false}
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
