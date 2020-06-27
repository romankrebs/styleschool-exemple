import React from "react";
import Card from "../card";
import { dates, DateToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Личный бренд"
      title="Как предсказать реакцию толпы на работу имиджмейкера?"
      teacher="Мария Родина"
      descript="Лекция, очно, Москва"
      descriptString
      onlineText="Место проведения: ВШСДТ"
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.crowdReaction, true)}
      time="19:00"
      duration=""
      image="/img/master-class/crowd-reaction.jpg"
      text={
        <div>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: 13,
              fontWeight: 700,
              textAlign: "center",
              margin: 0,
              padding: 0,
              color: "rgb(100,100,100)"
            }}
          >
            Психологические аспекты восприятия работы имиджмейкера публикой: как
            предсказать реакцию толпы.
          </h3>
          <Paragraph
            style={{
              fontStyle: "italic",
              fontFamily: "Roboto", // "Lora"
              fontSize: 13,
              fontWeight: 400,
              textAlign: "left",
              padding: 0,
              paddingTop: 10,
              margin: 0,
              color: "rgb(100,100,100)"
            }}
            content={[
              "Очень часто создавая образы в публичном пространстве профессиональные имиджмейкеры, стилисты, журналисты не достигают желаемого результата. Очень обидно, когда потрачено много творческой энергии, ресурсов, но ожидаемая реакция публики не наступает: за политика не голосуют, на концерты певцов не раскупаются билеты, блогер не получает популярности.",
              "Почему? В процессе работы все нравилось профессиональной команде: коллеги высоко оценивали работу друг друга. Все нравилось клиенту: заказчик был доволен работой имиджмейкера и его команды, полностью поддерживал концепцию и не жалел средств. Почему провал?",
              "Ответить на этот вопрос могут только социальные психологи, которые изучают законы восприятия информации большими группами людей. Незнание таких законов, неизбежно приводит к провалу.",
              "Давайте разбираться, как лучше понять тех, ради кого мы с вами трудимся."
            ]}
          />
        </div>
      }
      q
      imageHeight
      part
      noView
      free
      partPrice="0"
      color="rose"
    />
  );
}
