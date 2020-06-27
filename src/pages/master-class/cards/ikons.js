import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Искусство"
      title="Язык иконы"
      teacher="Галина Варакина"
      descript={<span>on-line</span>}
      online
      date="9 июля"
      time={<span>19:00</span>}
      duration=""
      image="/img/modern-fashion-style/ikons.jpg"
      text={
        <span>
          Об иконописи, особенно последнее время, пишут и говорят достаточно
          активно. Однако разговор, который мы хотим Вам предложить,
          принципиально отличается от всего, что Вы могли слышать ранее. Мы
          предлагаем Вам взглянуть на икону как бы изнутри, познакомившись с
          особенностями ее языка, узнав наиболее важные символы, позволяющие
          понять сакральный смысл иконы. Только после этого мы отправимся с Вами
          в путешествие по истории древнерусской иконописи и познакомимся с
          наиболее важными ее этапами: византизирующим XI-XIV вв., рублевским XV
          &mdash; начала XVI вв. и неканоническим XVI-XVII вв.
        </span>
      }
      q
      part
      color="rose"
      id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
