import React from "react";

import Paragraph from "../../components/paragraph";
import List from "../../components/list";

export default function Component() {
  const content = {
    left: (
      <div
        style={{
          fontSize: "1.2em",
          textAlign: "left",
          lineHeight: "1.4em"
        }}
      >
        <p style={{ textAlign: "left", paddingTop: 0, marginTop: 0 }}>
          Ведущая курса &ndash; Марина Синева, исполнительный директор и байер
          Бутика &laquo;Garderob&raquo;
        </p>
        <p style={{ textAlign: "left" }}>
          Курс составлен на профессиональном опыте успешного управления бизнес
          процессами, в частности:
        </p>
        <List
          arr={[
            "управления (бутик Etro (ГУМ), Бутик Emporio Armani (ГУМ))",
            <span>
              реорганизации процессов (бутик &laquo;Success Avenue&raquo;)
            </span>,
            "личных коммуникациях с Джорджо Армани, Джироламо и Кин Этро, Rabih  Kayrouz, Cedric Charlier"
          ]}
        />
        <p style={{ textAlign: "left" }}>
          Цель курса: повысить производительность в условиях кризиса
        </p>
      </div>
    ),
    right: (
      <div style={{ height: 400, overflow: "hidden" }}>
        <img
          src="/img/crisis-management-fashion-butik/img01.jpg"
          alt=""
          style={{ maxWidth: "100%", objectFit: "cover", marginTop: -50 }}
        />
      </div>
    )
  };
  return <Paragraph content={content} />;
}
