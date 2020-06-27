import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";
import List from "../../../components/list";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Как при помощи цвета создать свой интерьер счастья."
      teacher="Марина Костарнова"
      descript={<span>Лекция онлайн</span>}
      onlineText="Лекция онлайн"
      descriptString
      onlineIcon
      date={DateToString(dates.masterClasses.interiorOfHeppines, true)}
      time={TimeToString(dates.masterClasses.interiorOfHeppines)}
      duration=""
      image="/img/master-class/interior-of-heppines.jpg"
      text={
        <Paragraph
          content={[
            <span>
              <b>Лектор</b>: Марина Костарнова, Бельгия(Брюссель)-Россия — коуч
              дизайна, Член международных союзов ICSID, Icograda, практикующий
              дизайнер, Член Союза Дизайнеров России.
            </span>,
            <b>Как при помощи цвета создать свой интерьер счастья.</b>,
            "Тайна цвета в интерьере… Продумывая интерьер, надо правильно выбирать цветовое оформление в зависимости от размера, функций помещения, пропорций стен, потолка, личных предпочтений. Цвет в интерьере служит не только для создания нужного настроения, но и позволяет решить много практических задач. Зная основные принципы работы цвета, можно сделать пространство максимально комфортным.Правильный подбор цветов, их комбинаций позволяет добиться удивительных оптических эффектов — сделать квартиру визуально просторнее, поднять или опустить потолок, сделать климат комнаты теплее, уютнее или наоборот аскетичнее. Как правильно сочетать теплые и холодные цвета и какие задачи можно решить с помощью цвета.",
            "Вы узнаете:",
            <List
              arr={[
                "как цвет влияет на наше настроение",
                "как правильно сочетать цвета в интерьере",
                "что такое тепло-холодность и как с ней работать в интерьере"
              ]}
            />
          ]}
        />
      }
      q
      part
      noView
      free
      partPrice="0"
      color="rose"
    />
  );
}
