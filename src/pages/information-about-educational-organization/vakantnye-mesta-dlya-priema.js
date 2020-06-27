import React from "react";
import Pattern from "./pattern";
import { style } from "./style";
import List from "../../components/list";

const Mesta = props => {
  return (
    <div>
      <Pattern
        title="Вакантные места для приема (перевода)"
        content={
          <div>
            <h3 style={style.h3}>Данные о наборе:</h3>
            <p style={style.text}>
              Набор в группы и обучение ведется в течение всего календарного
              года. Информация о вакантных местах для приема (перевода)
              предоставляется по запросу для каждого конкретного случая по
              телефонам +7 495 221-89-35, 8 (800) 550-78-93 или электронной
              почте <a href="mailto:info@styleschool.ru">info@styleschool.ru</a>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Mesta;
