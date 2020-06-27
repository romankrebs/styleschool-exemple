import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Бизнес"
      title="Сайт для стартапа бизнеса"
      teacher="Алина Ермолаева"
      descript={<span>online,</span>}
      online
      date="15 мая"
      time="20:00"
      duration=""
      image="/img/modern-fashion-style/startup.jpg"
      text={<span>Какой минимум нужен для вашей визитки в интернете</span>}
      q
      part
      view
      // partPrice="600"
      color="blue"
      id="XCNtFp2qckqBA3qQK"
      setBillingId={props.setBillingId}
    />
  );
}
