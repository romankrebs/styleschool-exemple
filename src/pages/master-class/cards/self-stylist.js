import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Сам Себе Стилист, Часть 1"
      teacher="Светлана Кононец"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.selfStyle.part1, true)}
      time="20:00"
      duration=""
      image="/img/master-class/self-style.jpg"
      text={
        <Paragraph
          content={[
            <b>Сам Себе Стилист, Часть 1</b>,
            "Индивидуальный стиль сегодня в тренде. Но под стилем в современном мире понимаются разные явления: стиль одежды, стиль художника, стиль исторической эпохи, индивидуальный стиль человека, стиль деятельности и т.д. Что же объединяет все эти явления? Чем стильный человек отличается от не стильного? И есть ли у каждого человека свой неповторимый стиль от рождения или его нужно специально создавать? А если создавать, то, как именно? Ответам на эти вопросы и будет посвящена встреча."
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
