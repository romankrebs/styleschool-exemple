import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardModern(props) {
  return (
    <Card
      head="Личный бренд"
      title="SMM: все, что нужно знать…"
      teacher="Мери Саргсян"
      descript="Лекция, online"
      descriptString
      online
      onlineText="Лекция, online"
      onlineIcon={props.onlineIcon ? true : false}
      date={DateToString(dates.masterClasses.smm, true)}
      time="19:00"
      duration=""
      image="/img/master-class/smm.jpg"
      text={
        <span>
          SMM: все, что нужно знать и делать для успешного продвижения бизнеса и
          личного бренда.
          <br />В рамках встречи слушателям будет предоставлена возможность
          узнать о ключевых механизмах эффективного продвижения своего бренда в
          социальных сетях.
          <br />
          Мэри проведет экспертный анализ нескольких кейсов, на примере которых
          расскажет об основных трендах в продвижении.
          <br />
          Глубокое погружение в заданную тему и исследование смежных с ней
          вопросов предусмотрено в рамках авторского курса «SMM: все, что нужно
          знать и делать для успешного продвижения бизнеса и личного бренда»
        </span>
      }
      q
      part
      noView
      partPrice="0"
      free
      color="rose"
      // id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
