import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Секрет стиля деним"
      teacher="Марина Бонецкая"
      descript={<span>Лекция онлайн</span>}
      onlineText="Лекция онлайн"
      descriptString
      onlineIcon
      date={DateToString(dates.masterClasses.denimStyle, true)}
      time={TimeToString(dates.masterClasses.denimStyle)}
      duration=""
      image="/img/master-class/denim-style-secret.jpg"
      text={
        <Paragraph
          content={[
            <b>Секрет стиля деним</b>,
            "«Я жалею в жизни только об одном: что джинсы придумал не я!» — однажды изрек знаменитый кутюрье Ив Сен-Лоран. Этот прозорливый гений моды понял: джинсы бессмертны! Мало ценить джинсы, как потребитель. Можно получать интеллектуальное удовольствие от того, что на свете существует это чудо дизайна, в котором воплощены все мыслимые требования к одежде. А что там сейчас, на джинсовом модном фронте?"
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
