import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";
import List from "../../../components/list";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Сценарий освещения — залог комфортного жилья."
      teacher="Марина Костарнова"
      descript={<span>Лекция онлайн</span>}
      onlineText="Лекция онлайн"
      descriptString
      onlineIcon
      date={DateToString(dates.masterClasses.lightingScenario, true)}
      time={TimeToString(dates.masterClasses.lightingScenario)}
      duration=""
      image="/img/master-class/lighting-scenario.jpg"
      text={
        <Paragraph
          content={[
            <span>
              <b>Лектор</b>: Марина Костарнова, Бельгия(Брюссель)-Россия — коуч
              дизайна, Член международных союзов ICSID, Icograda, практикующий
              дизайнер, Член Союза Дизайнеров России.
            </span>,
            <b>Сценарий освещения – залог комфортного жилья.</b>,
            "Комфорт в доме создается не только его оформлением и эргономикой, но и грамотно спроектированным освещением. Для этого я вам советую создать свой индивидуальный «сценарий освещения», который будет полностью отвечать вашим потребностям и настроению.",
            "Вы узнаете:",
            <List
              arr={[
                "то такое «сценарий освещения»",
                "почему так важно создавать сценарий освещения",
                "какие типы освещения существуют",
                "как правильно подобрать освещение для разных зон интерьера"
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
