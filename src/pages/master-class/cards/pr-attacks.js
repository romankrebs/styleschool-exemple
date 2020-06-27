import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";
import Button from "../../../components/tickets-button";

export default function CardModern(props) {
  return (
    <Card
      head="Реклама и PR"
      title="PR-атака: креативные войны в публичном пространстве"
      teacher="Мария Родина"
      descript="Лекция, очно, Москва."
      descriptString
      onlineText={
        <span>
          Лекция, очно, Москва.
          <br />
          Место проведения: ВШСДТ
        </span>
      }
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.prAttacks, true)}
      time="19:00"
      duration=""
      image="/img/master-class/pr-attacks.jpg"
      text={
        <Paragraph
          content={[
            <Button event="5e6a493eb303be204c4734ed" />,
            "Публичное пространство полно информации, которую целенаправленно формируют различные специалисты с целью получить внимание, любовь и поддержку публики. Часто мы претендуем на одну и ту же аудиторию или перед нами стоит цель сформировать определенное мнение, но над трактовкой фактов уже поработали наши конкуренты, а может быть ситуация вышла из-под контроля и мы просто опаздываем и мнение сформировал случай.",
            "В любом варианте информационное противостояние неизбежно, а значит, нужна быстрая, точная и хорошо рассчитанная информационная работа. А может перед нами стоит задача быть первыми и перебить информационную активность наших конкурентов, привлечь внимание аудитории и внедрить свою трактовку фактов.",
            "По всем правилам войны, информационная война также не обходится без атак. Давайте поговорим  о том, как разработать стратегию информационной атаки, подобрать коммуникационный канал, как отбить информационные нападки конкурентов."
          ]}
        />
      }
      oflineIcon={props.oflineIcon ? true : false}
      q
      imageHeight
      free={false}
      part
      noView
      partPrice="900"
      color="rose"
      // id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
