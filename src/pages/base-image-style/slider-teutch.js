import React from "react";

import Slider from "../../components/slider-block";

const images = [
  {
    src: "/img/base-image-style/avatar0.jpg",
    head: "Лиана Бахова",
    text:
      "Имидж-консультант, профайлер, автор программ по управлению впечатлением в бизнесе и межличностных коммуникациях",
    link: "liana_bahova"
  },
  {
    src: "/img/base-image-style/avatar1.jpg",
    head: "Татьяна Фомина",
    text: (
      <span>
        Художник-модельер, преподаватель и практикующий имидж-консультант. В
        Высшей Школе Стилистики ведет занятия в рамках дисциплины
        &laquo;Профессинальные имидж-технологии&raquo;
      </span>
    ),
    link: "tatiana_fomina"
  },
  {
    src: "/img/base-image-style/avatar2.jpg",
    head: "Екатерина Брицова",
    text: (
      <span>
        Журналист, блоггер, основатель &laquo;Школы осознанного пиара и
        писательского ремесла&raquo;. Автор книги: &laquo;Кафе. Читай по главе в
        день&raquo; и проекта &laquo;Пишем книгу год&raquo;. Преподаватель
        пиара, smm, писательского ремесла в социальных сетях
      </span>
    ),
    link: "/catherine_britsova"
  }
];

export default function SliderBlock() {
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "left" }}>Преподаватели</h2>
      <Slider content={images} />
    </React.Fragment>
  );
}
