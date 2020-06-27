import React from "react";
import Card from "../card";
import Paragraph from "../../../components/p-array";
import { dates, DateToString } from "../../shedule/dates";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Как с помощью аксессуаров создать эффектный образ и разнообразить гардероб"
      teacher="Юлия Пындычук"
      descript="Тренинг, очно, Москва"
      descriptString
      onlineText="Тренинг, очно, Москва"
      date={DateToString(dates.masterClasses.spectacularLook, true)}
      time="19:00"
      duration=""
      image="/img/master-class/spectacular-look.jpg"
      text={
        <Paragraph
          content={[
            <b>
              «Акценты»: как с помощью аксессуаров создать эффектный образ,
              подчеркнуть достоинства, разнообразить гардероб.
            </b>,
            "Часто мы не придаём аксессуарам важного значения, а ведь с их помощью можно не только дополнились свой стиль или подчеркнуть свой социальный статус, но порой даже создать определённые зрительные иллюзии, которые помогут вам казаться стройнее и привлекательнее.",
            "Аксессуары — это своеобразная вишенка на торте нашего образа.",
            "В рамках мастер-класса мы научимся грамотно пользоваться аксессуарами и бижутерией, узнаём, какие аксессуары подходят к нашему типу лица и фигуры, познакомимся с базовым набором аксессуаров, который должен быть в гардеробе каждой женщины. Ну, и конечно, все примерим на себя!"
          ]}
        />
      }
      q
      part
      noView
      partPrice="900"
      color="rose"
      // id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
