import React from "react";

import Blocks from "../../components/blocks.js";

export default function BlocksComponent() {
  const content = {
    a: {
      image: "/img/green/earth.svg",
      head: "Формы обучения",
      text: "Очное и дистанционное, позволяющее обучаться из любой точки мира."
    },
    b: {
      image: "/img/green/calendar-clock.svg",
      head: "Длительность",
      text: "Курс длится 3 месяца, занятия проводятся 2-3 раза в неделю"
    },
    c: {
      image: "/img/green/cash-100.svg",
      head: "Цена успеха",
      text: "Варианты оплаты: со скидкой или рассрочка от 10000 руб. в месяц"
    },
    d: {
      image: "/img/green/file-video.svg",
      head: "Всегда в теме",
      text:
        "Пропущенные занятия можно посмотреть в записи или посетить с другой группой."
    },
    e: {
      image: "/img/green/school.svg",
      head: "Теория и практика",
      text: "Необходимая теория и реальная практика с опытными имидж-стилистами"
    },
    f: {
      image: "/img/green/chart-line.svg",
      head: "Личностный рост",
      text: "Новые знания, новые возможности, творчество и модные технологии"
    }
  };

  return (
    <Blocks
      a={{
        image: content.a.image,
        head: content.a.head,
        text: content.a.text
      }}
      b={{
        image: content.b.image,
        head: content.b.head,
        text: content.b.text
      }}
      c={{
        image: content.c.image,
        head: content.c.head,
        text: content.c.text
      }}
      d={{
        image: content.d.image,
        head: content.d.head,
        text: content.d.text
      }}
      e={{
        image: content.e.image,
        head: content.e.head,
        text: content.e.text
      }}
      f={{
        image: content.f.image,
        head: content.f.head,
        text: content.f.text
      }}
      style={{
        head: { fontFamily: "Roboto" },
        text: { fontFamily: "Roboto" }
      }}
    />
  );
}
