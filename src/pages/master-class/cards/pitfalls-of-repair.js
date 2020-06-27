import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import List from "../../../components/list";
import Links from "../links";

export default function CardModern(props) {
  return (
    <Card
      head="Личный бренд"
      title="Подводные камни ремонта. 9 обязательных шагов перед тем как начать."
      teacher="Елена Ламонова"
      descript="Лекция, очно, Москва."
      descriptString
      onlineText={
        <span>
          Лекция, очно, Москва.
          <br />
          Место проведения: ТК Каширский двор
        </span>
      }
      date={DateToString(dates.masterClasses.pitfallsOfRepair, true)}
      time="13:00"
      duration=""
      image="/img/master-class/9steps.jpg"
      text={
        <React.Fragment>
          <Links
            link="https://kdvor.ru/activity/reg/2075620/"
            text="Перейти на страницу мероприятия"
            external
          />
          ,
          <List
            arr={[
              "С чего начинается ремонт.",
              "Дизайнер и дизайн проект. Плюсы работы с дизайнером.",
              "Самостоятельно. Что предусмотреть.",
              "Оценка помещения.",
              "Концепция. Планировочное решение. Список необходимых чертежей.",
              "Перепланировка. Что можно узаконить, а что нет?",
              "Поиск строительной бригады.",
              "Подбор чистовой отделки.",
              "Планирование электрики, освещения.",
              "Мебель.",
              "Цвет и свет фактура в интерьере. Текстиль.",
              "Начало ремонта. Ключевые подводные камни."
            ]}
          />
        </React.Fragment>
      }
      oflineIcon={props.oflineIcon ? true : false}
      q
      imageHeight
      free
      part
      noView
      partPrice="0"
      color="rose"
      // id="SsWoqRF9vFPJYP3Z8"
      setBillingId={props.setBillingId}
    />
  );
}
