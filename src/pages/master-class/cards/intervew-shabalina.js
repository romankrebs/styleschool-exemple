import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Интервью с коуч-стилистом, преподавателем ВШСДТ Светланой Шабалиной"
      teacher="Светлана Шабалина"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.intervewShabalina, true)}
      time={TimeToString(dates.masterClasses.intervewShabalina)}
      duration=""
      image="/img/master-class/intervew-shabalina.jpg"
      imageHeight
      text={
        <Paragraph
          content={[
            <b>
              Интервью с коуч-стилистом, преподавателем ВШСДТ Светланой
              Шабалиной
            </b>,
            "Открываем серию интервью с преподавателями #ВШСДТ. Истинный стиль непременно приводит к истинному себе. Стиль определяет и отражает содержание человека. Со Светланой Шабалиной обсудим путь к внутренним глубинным изменениям через преображение внешнего, умение открывать прекрасное в повседневном и идти по жизни своим собственным уникальным путем."
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
