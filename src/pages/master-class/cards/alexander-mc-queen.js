import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Слабость героической женщины Маккуина. Alexander McQueen FALL 2020"
      teacher="Татьяна Котенко"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      onlineIcon
      date={DateToString(dates.masterClasses.alexanderMcQueen, true)}
      time="20:30"
      duration=""
      image="/img/master-class/alexander-mc-queen.jpg"
      text={
        <Paragraph
          content={[
            <b>
              Слабость героической женщины Маккуина. Alexander McQueen FALL 2020
            </b>,
            "«Я хотела, чтобы эта коллекция была действительно смелой и героической» Сара Бертон. Может ли истинный героизм  без хрупкости?! Если да, то как их органично соединить."
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
    />
  );
}
