import React from "react";
import Pattern from "./pattern";
import { style } from "./style";
import List from "../../components/list";

const Programms = props => {
  return (
    <div>
      <Pattern
        title="Образование"
        content={
          <div>
            <p
              style={{
                ...style.h2,
                fontSize: "1.3em",
                color: "rgb(130,130,130)"
              }}
            >
              Информация об образовательных программах с указанием учебных
              предметов, курсов, дисциплин (модулей), практики, предусмотренных
              соответствующей образовательной программой
            </p>
            <h2 style={style.h2}>Программы профессиональной переподготовки:</h2>
            <List
              arr={[
                <a href="/download/programma-prof-podgotovki-image-consulting&fashion-styling.pdf">
                  Имидж-консалтинг и fashion-styling
                </a>,
                <a href="/download/programma-prof-podgotovki-design-i-dekorirovanie-interjera.pdf">
                  Дизайн и декорирование интерьеров
                </a>
              ]}
              style={style.text}
            />
            <h2 style={style.h2}>
              Информация о численности обучающихся по реализуемым
              образовательным программам
            </h2>
            <List
              arr={[
                <span>
                  за счет бюджетных ассигнований федерального бюджета &ndash; 0%
                </span>,
                <span>
                  за счет бюджетов субъектов Российской Федерации &ndash; 0%
                </span>,
                <span>за счет местных бюджетов &ndash; 0%</span>,
                <span>
                  по договорам об образовании за счет средств физических и (или)
                  юридических лиц &ndash; 100%
                </span>
              ]}
              style={style.text}
            />
            <h2 style={style.h2}>Информация о языках образования</h2>
            <p style={style.text}>
              В процесс образовательной деятельности используется русский язык
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Programms;
