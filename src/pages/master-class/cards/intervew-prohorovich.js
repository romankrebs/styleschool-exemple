import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
// import Button from "../../../components/tickets-button";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title={
        <span style={{ fontSize: "0.8em" }}>
          Интервью с преподавателем ВШСДТ, специалистом по фешн-маркетинку и
          коммуникациям Еленой Прохорович
        </span>
      }
      teacher="Елена Прохорович"
      descript="Лекция, онлайн"
      descriptString
      onlineText="Лекция, онлайн"
      onlineIcon
      date={DateToString(dates.masterClasses.intervewProhorovich, true)}
      time={TimeToString(dates.masterClasses.intervewProhorovich)}
      duration=""
      image="/img/master-class/intervew-prohorovich.jpg"
      imageHeight
      text={
        <div>
          <b>
            Интервью с преподавателем ВШСДТ, специалистом по фешн-маркетингу и
            коммуникациям Еленой Прохорович
          </b>
          <br />
          Мода — это бизнес или искусство? Кто главный дирижер модной индустрии:
          дизайнер, маркетолог или люди на улицах? Как бросить вызов самому себе
          и победить? Где женщине найти свою точку опоры, силу, уверенность и
          радость? Как в погоне за коммерческим успехом сохранить свою
          собственную индивидуальность и почему за каждым успешным брендом
          всегда стоит личность? Эти и многие другие вопросы обсудим с
          преподавателем #ВШСДТ, специалистом по фешн-маркетингу и коммуникациям
          Еленой Прохорович.
        </div>
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
