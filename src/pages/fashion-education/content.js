import React from "react";
import Paragraph from "../../components/p-array";
import { styles } from "../../patterns/pattern-educations/style";

export const content = {
  head: "Индустрия моды, креативные технологии",
  tiles: [
    {
      head: (
        <span>
          МОДНЫЙ СТИЛИСТ
          <br />
          Профессия как призвание
          <br />
          Обучение как второе высшее
        </span>
      ),
      typeEducation: "Профессиональная переподготовка",
      duration: "11 мес. Очно или Онлайн",
      specialisation:
        "Консультирование клиентов по стилю. Стилизация и продюссирование фото проектов. Работа с журналами, дизайнерами, модными брендами",
      price: (
        <span>
          от 12
          <sup>000</sup> руб. в месяц
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Система создания имиджа и стиля от А до Я",
            "Алгоритмы имидж-консультирования клиентов",
            "Маршруты и особенности шопинга в России, Европе",
            "Практика стилизации фото, ТВ, модных проектов",
            "Возможности коллабораций с дизайнерами, бутиками",
            "Пути развития своего бизнеса, карьеры",
            "Создание и продвижение бренда стилиста"
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
        link: "/second-degree-imagemaker"
      }
    },
    {
      head: (
        <span>
          СТИЛИ В ОДЕЖДЕ
          <br />
          Принципы подбора
          <br />
          Для женщин
        </span>
      ),
      typeEducation: "Повышение квалификации",
      duration: "3 мес. Очно или Дистанционно",
      specialisation:
        "Система создания стильных и модных комплектов в одежде и аксессуарах. Технологии для расширения спектра услуг и сервиса.",
      price: (
        <span>
          от 9<sup>900</sup> руб. в месяц
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Колористика, цветовой анализ внешности",
            "Типология фигур, визуальная коррекция фигур",
            "Изучение современных стилей как системы транслирования необходимого впечатления",
            "Правила подбора образа, стиля в одежде, аксессуарах, прическе, макияже",
            "Принципы формирования гардероба и правила эффективного шопинга"
          ]}
        />
      ),
      diplom: "удостоверение о повышении квалификации",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/image-style"
      }
      // space: "3.55rem"
    },
    {
      head: (
        <span>
          FASHION STYLING
          <br />
          Стилизация фотосессий и проектов
        </span>
      ),
      typeEducation: "Профессиональная переподготовка",
      duration: "6 мес. Очно или Онлайн",
      specialisation:
        "Стилист фотосессий, стилист модных проектов. Работа с журналами, дизайнерами, модными брендами",
      price: (
        <span>
          от 15
          <sup>000</sup> руб. в месяц
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "История моды и стилей",
            "Система современной индустрии моды",
            "Методики развития креативности для стилистов",
            "Арт дирекшн, работа с командой",
            "Теория и практика fashion съемок",
            "Специфика проектов для журналов, ТВ, fashion retail",
            "Формирование портфолио стилиста"
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
        link: "/fashion-styling"
      }
    },
    {
      head: (
        <span>
          ТЕОРИЯ МОДЫ
          <br />
          Социальные и художественные концепции
        </span>
      ),
      typeEducation: "Повышение квалификации",
      duration: "3 месяца. Очно или Дистанционно",
      specialisation:
        "Курс предназначен для повышения квалификации специалистов индустрии моды, преподавателей. А так же для интеллектуалов",
      price: (
        <span>
          10
          <sup>000</sup> руб. в месяц
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Мода в мире креативной индивидуальности, сетевых коммуникаций и продаж, новых форм социальных свобод и запретов",
            "Кто создает моду — профессионалы или дилетанты, чьи образы транслируют дизайнеры, кому предназначены высказывания моды и что оказывает воздействие на аудиторию"
          ]}
        />
      ),
      diplom: <span>удостоверение о повышении ква&shy;лифи&shy;кации</span>,
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/concepts_of_fashion"
      }
      // space: "1rem"
    }
  ],
  subMenu: true
};
