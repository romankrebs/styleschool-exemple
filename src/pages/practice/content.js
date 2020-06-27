import React from "react";
import Paragraph from "../../components/p-array";
import { styles } from "../../patterns/pattern-educations/style";
import { stylesDark } from "../../components/styles";

export const content = {
  head: "Практики и стажировки",
  tiles: [
    {
      head: (
        <span>
          ИМИДЖ КОНСУЛЬТИРОВАНИЕ
          <br />
          Практика #1 для студентов
        </span>
      ),
      typeEducation: "Краткосрочный курс",
      duration: "5 дней. Очно, Москва",
      specialisation: "Практика #1 после 3-х месяцев обучения",
      price: (
        <span>
          от 25
          <sup>000</sup> руб.
          <span style={{ color: "rgb(100,0,0)" }}>*</span>
        </span>
      ),
      process:
        "Говорим о клиентах, изучаем модные тенденции, ассортимент, закрепляем навыки планирования индивидуального гардероба на «все случаи жизни», практикуемся в выборе и реализации стилевых решений на основе базовых методик: колоритов, коррекции фигуры, стилей в одежде и принципов их сочетания.",
      diplom: "сертификат",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/practice-image-consulting"
      }
      //space: "2.7rem"
    },
    {
      head: (
        <span>
          ИМИДЖ КОНСУЛЬТИРОВАНИЕ
          <br />
          Практика #2 для студентов
        </span>
      ),
      typeEducation: "Краткосрочный курс",
      duration: "5 дней. Очно, Москва",
      specialisation: "Практика #2 после 6-ти месяцев обучения",
      price: (
        <span>
          25
          <sup>000</sup> руб.
          <span style={{ color: "rgb(100,0,0)" }}>*</span>
        </span>
      ),
      process:
        "Изучаем модные тенденции, закрепляем навыки консультирования клиентов, практикуемся в выборе и реализации стилевых решений на основе: базовых методик, методик создания стиля с учетом художественных решений, на основе психологических особенностей разработки имиджа.",
      diplom: "сертификат",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/practice-image-consulting"
      },
      space: "1.4rem"
    },
    {
      head: (
        <span>
          ШОПИНГ СТАЖИРОВКА
          <br />
          Milan Fashion Week
        </span>
      ),
      typeEducation: "Краткосрочный курс",
      duration: "5 дней. Очно, Милан",
      specialisation:
        "Сопровождение клиентов в Милан с целью шопинга и культурно-развлекательного отдыха",
      price: (
        <span>
          от 50
          <sup>000</sup> руб.
          <span style={{ color: "rgb(100,0,0)" }}>*</span>
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Знаковые галереи, торговые центры, винтажные магазины, аутлеты Милана",
            "Флагманские бутики известных мировых брендов в районе Золотого квадрата",
            "Street style look во время Milan fashion week",
            "Подготовка шопинг-путеводителя и тренд-прогнозов для будущей работы",
            "А так же музей моды Armani Silos, посещение города Бергамо и конечно гастрономические достижения итальянской кухни"
          ]}
        />
      ),
      diplom: "сертификат",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/internship-in-milan"
      }
      //space: "2.7rem"
    },
    {
      head: (
        <span>
          ПРАКТИКА
          <br />
          Milan Design Week
        </span>
      ),
      typeEducation: "Краткосрочный курс",
      duration: "5 дней. Очно, Милан",
      specialisation:
        "Профессиональная ориентация, источники вдохновения и networking в индустрии моды и дизайна",
      price: (
        <span>
          от 85
          <sup>000</sup> руб.
          <span style={{ color: "rgb(100,0,0)" }}>*</span>
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Выставки (ISaloni), презентации, инсталляции, шоу-румы, галереи, инновационные перформансы, арт-зоны, виллы, музейные пространства, вечеринки",
            "Workshop от архитектора мирового уровня и культового итальянского дизайнера Luigi Baroli",
            "Международные коммуникации — что необходимо знать и делать, чтобы стать мировым брендом",
            "Обзор трендов в дизайне на 2 года вперёд"
          ]}
        />
      ),
      diplom: "сертификат",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/milan-design-week"
      },
      space: "1.4rem"
    }
  ],
  descript:
    "* Стоимость приведена для студентов и выпускников курсов профессиональной переподготовки ВШСДТ"
};
