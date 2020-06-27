import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Сам Себе Стилист, Часть 3"
      teacher="Светлана Шабалина"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.selfStyle.part3, true)}
      time={TimeToString(dates.masterClasses.selfStyle.part3)}
      duration=""
      image="/img/master-class/self-style-3.jpg"
      imageHeight
      text={
        <Paragraph
          content={[
            <b>Сам Себе Стилист, Часть 3</b>,
            "«Ваш идеальный силуэт» — этот заголовок всегда привлекает внимание. Обладательницы самых разных фигур и размеров стремятся выглядеть стройнее. Поэтому к теме визуальной коррекции интерес не ослабевает. На встрече мы рассмотрим форму одежды под чуть более широким углом. А также я расскажу об одном универсальном приеме, который позволяет придать фигуре заветную стройность, и поговорим о том, как выбирать правильную длину изделий."
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
