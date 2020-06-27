import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardModern(props) {
  return (
    <Card
      head="Личный бренд"
      title="Личный бренд и продвижение в сети"
      teacher="Елена Прохорович"
      descript="Лекция, online"
      descriptString
      onlineText="Лекция, online"
      oflineIcon={props.oflineIcon ? true : false}
      date={DateToString(dates.masterClasses.personalBrandInNet, true)}
      time="19:00"
      duration=""
      image="/img/master-class/personal-brand-in-net.jpg"
      imageHeight
      text="Рассмотрим все этапы разработки стратегии продвижения личного бренда. Определим пошаговый план действий: как провести аудит, найти ресурсы, создать легенду и пр. Разберем на примере кейсов возможные способы и варианты продвижения личного бренда."
      q
      part
      noView
      free
      partPrice="0"
      color="rose"
      // id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
