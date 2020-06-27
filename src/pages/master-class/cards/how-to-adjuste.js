import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import List from "../../../components/list";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Как скорректировать неудобный торговый зал"
      teacher="Анна Качалина"
      descript={<span>Лекция онлайн</span>}
      onlineText="Лекция онлайн"
      descriptString
      onlineIcon
      date={DateToString(dates.masterClasses.howToAdjust, true)}
      time={TimeToString(dates.masterClasses.howToAdjust)}
      duration=""
      image="/img/master-class/how-to-adjuste.jpg"
      text={
        <Paragraph
          content={[
            <b>Как скорректировать неудобный торговый зал</b>,
            "НА КАКИЕ ВОПРОСЫ ВЫ ПОЛУЧИТЕ ОТВЕТЫ",
            <List
              arr={[
                "Какие существуют способы  корректировки торгового пространства.",
                "Как  учитывать  ценовой  сегмент  бренда при планировании пространства магазина.",
                "Какие  VM  может помочь  в корректировке  сложного пространства."
              ]}
            />,
            "ЧТО ВЫ ПОЛУЧИТЕ В РЕЗУЛЬТАТЕ",
            <List
              arr={[
                "Узнаете  несколько способов  корректировки сложного  торгового пространства.",
                "Сможете  учесть  нюансы  позиционирования  вашего fashion магазина, исходя из запросов целевой аудитории.",
                "Научитесь эффективно использовать инструменты VM  при оформлении сложного торгового пространства."
              ]}
            />,
            "ЦЕННОСТЬ ТРЕНИНГА",
            "Максимум  полезной информации при  минимальных затратах  времени",
            "Практические примеры из опыта российских и зарубежных компаний",
            "Возможность получить ответы на  вопросы, касающиеся вашего  fashion бизнеса."
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
