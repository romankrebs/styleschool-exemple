import React from "react";
import Card from "../card";
import Links from "../links";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title={
        <span>
          «Бедная» мода (часть&nbsp;
          {props.part})
        </span>
      }
      teacher="Наталья Горских"
      descript="Лекция, online"
      descriptString
      onlineText="Лекция, online"
      date={props.date}
      online
      onlineIcon
      time={props.time}
      duration=""
      image="/img/master-class/poor-fashion.jpg"
      text={
        <div>
          {/* <Links
            link="/future_of_fashion"
            text="Перейти на страницу мероприятия"
          /> */}
          <b>«Бедная мода» (часть 1, 2, 3, 4, 5, 6)</b>
          <br />
          <b>«Бедная» мода: прошедшее, будущее</b>. Цикл лекций о том, что
          кроется за понятием «бедная» мода и как это явление связано с
          направлением «бедное искусство», концепция «бедности» — это временная
          маркетинговая уловка, искренняя авторская позиция или постоянный тренд
          нашего социального будущего, какую цель преследуют бренды, отказываясь
          от «игры по правилам», означает ли «бедность» форм «бедность»
          содержания, в чем суть послания одного из самых одиозных современных
          дизайнеров — Maurizio Altieri и почему его послание так напоминает
          послание творцов итальянского искусства arte povera. Курс из 6 лекций.
        </div>
      }
      q
      part
      noView
      partPrice="0"
      free
      color="rose"
    />
  );
}
