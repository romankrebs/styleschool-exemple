import React from "react";
import InfoBlock from "../../components/infoblock";

export default function Tesisses() {
  const content = {
    head: "",
    a: {
      block: "Узнайте о профессии и этапах дизайн-проектирования",
      image: "/img/check.svg"
    },
    b: {
      block: "Научитесь искать идеи и создавать концепцию интерьера",
      image: "/img/check.svg"
    },
    c: {
      block: "Воплотите свою идею на основе проекта квартиры-студии",
      image: "/img/check.svg"
    },
    background: "rgba(255,255,255,1.0)",
    style: {
      fontFamily: "Futura-Normal"
    }
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
