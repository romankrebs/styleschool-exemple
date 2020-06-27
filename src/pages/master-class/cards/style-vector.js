import React from "react";
import Card from "../card";
import List from "../../../components/list";

export default function CardModern(props) {
  return (
    <Card
      head="Клуб выпускников"
      title="Стилевые векторы"
      teacher="Анна Верткова, Катя Лепешкина"
      descript={<span>видео-лекция</span>}
      online
      date="18 июля"
      time=""
      duration=""
      image="/img/modern-fashion-style/style-vector.png"
      imageHeight
      gPos="left 0"
      text={
        <React.Fragment>
          Видео-лекцию проведут выпускники школы, профессиональные имидж
          консультанты.
          <br />
          Векторы стилей что это? Вы получите ответы на самые трендовые вопросы:
          <List
            arr={[
              "как определить стиль образа?",
              "принципы подбора одежды?",
              "правила сочетания вещей?"
            ]}
            style={{ fontFamily: "Lora" }}
          />
          А главное, как определить какой стиль подойдет именно вам!
        </React.Fragment>
      }
      q
      free
      color="rose"
      id="94sKrgWSmE4Nk4fMA"
      setBillingId={props.setBillingId}
    />
  );
}
