import React from "react";

import InfoBlock from "../../components/infoblock";

export default function InfoBlockComponent() {
  const content = {
    head:
      "Имидж-технологии: когда обучение становится более, чем просто инвестиции в себя",
    a: {
      block: "Профессия XXI века в области моды и коммуникаций",
      image: "/img/check-bold.svg"
    },
    b: {
      block: "Эффективные технологии для работы с клиентами в Fashion Retail",
      image: "/img/check-bold.svg"
    },
    c: {
      block: "Приемы и секреты имиджмейкеров для жизни и успешной карьеры",
      image: "/img/check-bold.svg"
    },
    background: "rgba(240,240,240,1.0)"
    // style: { boxShadow: "none" }
  };
  return (
    <InfoBlock
      head={content.head}
      a={{
        block: content.a.block,
        text: content.a.text,
        image: content.a.image
      }}
      b={{
        block: content.b.block,
        text: content.b.text,
        image: content.b.image
      }}
      c={{
        block: content.c.block,
        text: content.c.text,
        image: content.c.image
      }}
      style={content.style}
      bg={content.background}
    />
  );
}
