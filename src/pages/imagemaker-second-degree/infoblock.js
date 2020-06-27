import React from "react";

import InfoBlock from "../../components/infoblock";

export default function InfoBlockComponent() {
  const content = {
    head: "",
    a: {
      head: "Выпускники курса:",
      text: "более 150 человек в год",
      image: "/img/green/account-group.svg"
    },
    b: {
      head: "География выпускников:",
      text: "более 15 стран мира",
      image: "/img/green/earth.svg"
    },
    c: {
      head: "Условия приема на обучение:",
      text: "есть, звоните, пишите",
      image: "/img/green/bank.svg"
    },
    background: "none",
    style: { boxShadow: "none" }
  };
  return (
    <InfoBlock
      head={content.head}
      a={{
        head: content.a.head,
        text: content.a.text,
        image: content.a.image
      }}
      b={{
        head: content.b.head,
        text: content.b.text,
        image: content.b.image
      }}
      c={{
        head: content.c.head,
        text: content.c.text,
        image: content.c.image
      }}
      style={content.style}
      bg={content.background}
    />
  );
}
