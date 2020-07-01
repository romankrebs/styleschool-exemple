import React from "react";

import Paragraph from "../../components/paragraph";
//import Slider from "../../pages/base-image-style/slider-img";
import Slider from "../../components/slider-images";

export default function Component() {
  const cont = [
    {
      src: "/img/base-image-style/foto1.jpg"
    },
    {
      src: "/img/base-image-style/foto2.jpg"
    },
    {
      src: "/img/base-image-style/foto3.jpg"
    },
    {
      src: "/img/base-image-style/foto4.jpg"
    },
    {
      src: "/img/base-image-style/foto5.jpg"
    },
    {
      src: "/img/base-image-style/foto6.jpg"
    },
    {
      src: "/img/base-image-style/foto7.jpg"
    },
    {
      src: "/img/base-image-style/foto8.jpg"
    },
    {
      src: "/img/base-image-style/foto9.jpg"
    }
  ];
  const content = {
    left: (
      <React.Fragment>
        <p style={{ textAlign: "left", paddingTop: 0, marginTop: 0 }}>
          Чтобы следовать современному стилю жизни
          <br />
          Чтобы изучать модные тренды и управлять впечатлением
          <br />
          Чтобы раскрывать новые перспективы и сферы общения
        </p>
        <p style={{ textAlign: "left" }}>
          Этот курс заменяет консультации у стилистов
          <br />
          Помогает максимально разобраться в своем стиле
          <br />
          Дает систему новых знаний для использования в профессии
        </p>
        <p style={{ textAlign: "left" }}>
          Очно или дистанционно, Вас ждет много практики
          <br />
          Сертификат или удостоверение о повышении квалификации
          <br />
          Самореализация, успешные кейсы, новое хобби или карьера
        </p>
        <p style={{ textAlign: "left" }}>
          Записывайтесь и получите больше информации
        </p>
      </React.Fragment>
    ),
    right: <Slider content={cont} play={3000} />
  };
  return <Paragraph content={content} />;
}
