import React from "react";
import Card from "../card";
import Links from "../links";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title={
        <span>
          Философия японской моды: творцы, идеи, образы (часть&nbsp;
          {props.part})
        </span>
      }
      teacher="Наталья Горских"
      descript="Лекция, online"
      descriptString
      onlineText="Лекция, online"
      date={props.date}
      online
      onlineIcon={props.onlineIcon ? true : false}
      time={props.time}
      duration=""
      image={props.image || "/img/japanese-fashion-philosophy/titul-card.jpg"}
      imageHeight={props.imageHeight === false ? false : true}
      text={
        <div>
          {props.noLink ? null : (
            <Links
              link="/japanese-fashion-philosophy"
              text="Перейти на страницу мероприятия"
            />
          )}
          {props.text ||
            "Японская мода давно стала брендом, который аудитория мирового рынка  модной индустрии связывает с понятиями «авангард», «деконструктивизм», «художественная революция». И каждый год новые коллекции Issey Miyake, Yohji Yamamoto, Comme des Garçons, Junya Watanabe, Undercover и др. современных японских брендов оправдывают ожидания своих поклонников и fashion-экспертов, подтверждают свой особый статус и символическое место в мировой системе моды."}
        </div>
      }
      q
      part
      noView
      partPrice={props.price || "0"}
      free={props.free}
      color="rose"
      setBillingId={props.setBillingId}
    />
  );
}
