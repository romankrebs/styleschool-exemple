import React from "react";
import Card from "../card";
import List from "../../../components/list";
import Paragraph from "../../../components/p-array";
import { dates, DateToString } from "../../shedule/dates";
// import { Link } from "react-router-dom";
import Links from "../links";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Тренды в макияже 2020"
      teacher="Екатерина Медведева"
      descript="Мастер-класс, очно, Москва"
      descriptString
      onlineText="Мастер-класс, очно, Москва"
      oflineIcon={props.oflineIcon ? true : false}
      date={DateToString(dates.masterClasses.trandsInMakeup, true)}
      time="19:00"
      duration=""
      image="/img/master-class/make05032020.jpg"
      text={
        <Paragraph
          content={[
            <Links
              link="/make05032020"
              text="Перейти на страницу мероприятия"
            />,
            "Говорим о трендах в макияже:",
            <List
              arr={[
                "Стрелки цветные",
                "Шимерный вариант макияжа",
                "Нюд",
                "Смоки",
                "Новинки в косметических продуктах",
                "Выполнение макияжа в трендовом варианте"
              ]}
            />
          ]}
        />
      }
      q
      part
      accessText="Доступ студентам"
      noView
      partPrice="500"
      color="rose"
    />
  );
}
