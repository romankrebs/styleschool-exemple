import React from "react";

export default function Header() {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Roboto",
          fontSize: "1.6em",
          fontWeight: 700,
          color: "rgb(100,100,100)",
          textAlign: "left",
          margin: 0,
          padding: "20px 0"
        }}
      >
        Расписание
      </h1>
      <p
        style={{
          fontFamily: "inherit",
          fontSize: "1em",
          textAlign: "left",
          color: "rgb(100,100,100)"
        }}
      >
        Откройте интересующий раздел обучения:
      </p>
    </div>
  );
}
