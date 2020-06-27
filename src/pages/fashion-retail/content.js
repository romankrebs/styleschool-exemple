import React from "react";
import Paragraph from "../../components/p-array";
import { styles } from "../../patterns/pattern-educations/style";

export const content = {
  head: "Fashion retail, технологии продаж",
  tiles: [
    {
      head: <span>ВИЗУАЛЬНЫЙ МЕРЧЕНДАЙЗИНГ И ВИТРИНИСТИКА</span>,
      typeEducation: "Профессиональная переподготовка",
      duration: "6 мес. Очно или Онлайн",
      specialisation:
        "Реализация технологий для организации и стимулирования продаж в розничных магазинах модной индустрии",
      price: (
        <span>
          от 9<sup>900</sup> руб. в месяц
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Основы визуального мерчендайзинга и витринистики",
            "Организация пространства магазина",
            "Мерчендайзинг как инструмент успешных продаж",
            "Витрина как коммуникация: эстетика и продажи",
            "Женская стилистика, мужская стилистика",
            "Карьера и бизнес. Личный брендинг"
          ]}
        />
      ),
      diplom: "диплом установленного государством образца",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/visual-merchandising-and-showcases-design"
      }
    },
    {
      head: (
        <span>
          FASHION ФРАНЧАЙЗИНГ
          <br />
          Стратегии выбора
        </span>
      ),
      typeEducation: "Повышение квалификации",
      duration: "2 дня. Очно или Дистанционно",
      specialisation:
        "Практические аспекты франчайзинга на fashion-рынке России, параметры выбора и успешного владения франшизой",
      price: (
        <span>
          10
          <sup>000</sup> руб.
        </span>
      ),
      process:
        "Обучающий модуль создан для предпринимателей, которые хотят открыть свой бизнес по франшизе или уже управляют розницей. Особенное внимание – практике франчайзинга на fashion-рынке России, параметрам выбора и успешного владения франшизой.",
      diplom: "удостоверение о повышении квалификации",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/fashion-franchising"
      }
      // space: "1.4rem"
    }
  ]
};
