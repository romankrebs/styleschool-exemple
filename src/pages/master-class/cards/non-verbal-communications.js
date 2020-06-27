import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";

export default function CardModern(props) {
  return (
    <Card
      head="Личный бренд"
      title="Невербальные коммуникации в бизнесе"
      teacher="Валентин Шишкин"
      descript="Тренинг, очно, Москва"
      descriptString
      onlineText="Тренинг, очно, Москва"
      date={DateToString(dates.masterClasses.nonVerbal, true)}
      time="19:00"
      duration=""
      image="/img/master-class/communications.jpg"
      text={
        <span>
          Как стать сильнее конкурентов? Как быть более уверенным и убедительным
          в глазах партнёра, клиента, инвестора?
          <br />
          Как научиться убеждать собеседника любого уровня с первого шага (до
          того, как произнесены первые слова)?
          <br />
          Как управлять впечатлением о себе: по жестам, мимике и позам узнать,
          что на самом деле думает о вас оппонент?
          <br />
          Для этого необходимы дополнительные навыки. О них Вы узнаете на
          тренинге «Невербальные коммуникации в бизнесе»
          <br />
          <br />
          Для кого будет полезен этот тренинг?
          <br />
          Для руководителей, предпринимателей и специалистов, желающих управлять
          впечатлением окружающих о себе, повысить свою личную эффективность,
          научиться использовать невербалику как секретное оружие при проведении
          переговоров.
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
