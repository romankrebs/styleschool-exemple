import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Button from "../../../components/tickets-button";

export default function CardModern(props) {
  return (
    <Card
      head="Личный бренд"
      title="Личный бренд, путь к увеличению прибыли"
      teacher="Елена Прохорович"
      descript="Лекция, очно, Москва"
      descriptString
      onlineText="Лекция, очно, Москва"
      oflineIcon={props.oflineIcon ? true : false}
      date={DateToString(dates.masterClasses.personalBrand, true)}
      time="19:00"
      duration=""
      image="/img/master-class/personal-brand.jpg"
      text={
        <div>
          <Button event="5e6a4466a4f499a42cfc0114" />
          Поговорим о стратегиях развития личного бренда, которые позволят вам
          увеличить прибыль бизнеса и стоимость своих услуг. Определим основные
          этапы и разработаем план с чего начать работу над личным брендом.
        </div>
      }
      q
      part
      noView
      partPrice="900"
      color="rose"
      id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
