import React from "react";
import { HorizontalForm } from "../../components/forms";

export default function Component() {
  return (
    <div>
      <div
        style={{
          fontFamily: "Roboto",
          fontWeight: 700,
          fontSize: "1.8em",
          textAlign: "center",
          color: "rgb(100,100,100)"
        }}
      >
        Хотите узнать больше? Оставьте заявку или задайте вопрос
      </div>
      <HorizontalForm />
    </div>
  );
}
