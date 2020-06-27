import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Бизнес и Карьера"
      title="Продюсирование личного бренда. Почему соцсети не работают"
      teacher="Ольга Олюшина"
      descript={<span>Онлайн-лекция</span>}
      onlineText="Онлайн-лекция"
      date="3 апреля"
      time="20:00"
      duration="45 минут"
      image="/img/modern-fashion-style/hare.jpg"
      text={
        <span>
          Как развивать свой бизнес, не поддаваясь на всеобщую истерию с
          ведением соцсетей. Как научиться извлекать прибыль из общения и
          эффективно выстраивать коммуникацию с клиентами и партнерами. Что
          такое информационный повод и как на этом зарабатывать.
        </span>
      }
      free
      view
      id="kfPxGqBCEJ83np2v4"
      setBillingId={props.setBillingId}
    />
  );
}
