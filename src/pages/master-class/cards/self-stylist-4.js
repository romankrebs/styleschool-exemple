import React from "react";
import Card from "../card";
import { dates, DateToString, TimeToString } from "../../shedule/dates";
import Paragraph from "../../../components/p-array";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Сам Себе Стилист, Часть 4"
      teacher="Светлана Шабалина"
      descript="Лекция, онлайн."
      descriptString
      onlineText="Лекция, онлайн."
      oflineIcon={props.oflineIcon}
      date={DateToString(dates.masterClasses.selfStyle.part4, true)}
      time={TimeToString(dates.masterClasses.selfStyle.part4)}
      duration=""
      image="/img/master-class/self-style-4.jpg"
      imageHeight
      text={
        <Paragraph
          content={[
            <b>Сам Себе Стилист, Часть 4</b>,
            "Стильный образ — это определенное впечатление. Романтический — нежное и женственное, классический — спокойное и элегантное, спортивный — простое и динамичное. Но мода, отражая происходящие в современном мире процессы, редко представляет нам сегодня моностилевые примеры. Гораздо чаще мы наблюдаем смешение разных стилей в одном комплекте, порой даже их столкновение. И умение соединить элементы из разных стилей в одном ансамбле становится необходимостью, чтобы получать стильные современные образы, а не набор не связанных друг с другом вещей. О принципах, лежащих в основе данного искусства и поговорим на встрече."
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
      // id="SsWoqRF9vFPJYP3Z8"
      // setBillingId={props.setBillingId}
    />
  );
}
