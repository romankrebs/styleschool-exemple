import React from "react";

const Docs = props => {
  return (
    <div>
      <h2
        style={{
          fontFamily: props.font ? props.font.title : "inherit",
          fontSize: "1.8em",
          color: "rgb(80,80,80)",
          textAlign: "center",
          fontWeight: 500,
          margin: 8,
          padding: "12px 0"
        }}
      >
        Дипломы
      </h2>
      <h3
        style={{
          fontFamily: props.font ? props.font.title : "inherit",
          fontSize: "1.2em",
          color: "rgb(80,80,80)",
          textAlign: "center",
          fontWeight: 400,
          margin: 8,
          padding: "12px 0"
        }}
      >
        Образец дипломов о професиональной переподготовке
      </h3>
      <div
        style={{
          textAlign: "center",
          padding: "24px 0"
        }}
      >
        <img
          src="/img/diplom.jpg"
          alt="Диплом ВШСДТ и РГСУ"
          style={{ maxWidth: 800, margin: "0 auto" }}
        />
        <div style={{ height: 48 }} />
        <img
          src="/img/diplom-vshsdt.jpg"
          alt="Диплом ВШСДТ и РГСУ"
          style={{ maxWidth: 800, margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Docs;
