import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Винтаж: современный стиль, индивидуальный подход"
      teacher="Светлана Шабалина"
      descript={<span>Лекция онлайн</span>}
      onlineText="Лекция онлайн"
      descriptString
      onlineIcon
      date={DateToString(dates.masterClasses.vintage, true)}
      time={TimeToString(dates.masterClasses.vintage)}
      duration=""
      image="/img/master-class/vintage-individ.jpg"
      text={
        <Paragraph
          content={[
            <b>Винтаж: современный стиль, индивидуальный подход</b>,
            "Несмотря на то, что целый век отделяет нас от эпохи ар-деко, дух 20-х годов XX века как никакое другое время близок современному миру.",
            "Это ломка старых отживших устоев через глобальные катастрофы, и рождение нового мировоззрения, нового образа человека — современного человека, новых отношений. Это начало тех безумных ритмов, в которых мы живем сегодня. Наверное, поэтому так часто в последние годы мы видим на подиумах цитаты эпохи ар-деко. И, конечно, в гардеробах всех модников. Поэтому вписать винтажную вещь из бурных 20х в современный комплект проще, чем из какого бы то ни было другого десятилетия.Но и здесь есть свои особенности. О них и поговорим на встрече."
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
