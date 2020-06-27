import React from "react";
import Paragraph from "../../components/p-array";
import { styles } from "../../patterns/pattern-educations/style";

export const content = {
  head: "Репутационные технологии, PR",
  tiles: [
    {
      head: (
        <span>
          ИМИДЖМЕЙКИНГ
          <br />
          Репутационные технологии
        </span>
      ),
      typeEducation: "Профессиональная переподготовка",
      duration: "2 года. Очно или Онлайн",
      specialisation:
        "Работа с частными и корпоративными заказчиками в области моды и рекламы, PR; формирование имиджа лидеров, публичных персон, корпораций",
      price: (
        <span>
          от 30
          <sup>000</sup> руб. в месяц
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Изучение дисциплин в области имидж консалтинга",
            "Изучение дисциплин в области стилизации проектов",
            "Психология лидерства",
            "Методики управления репутацией",
            "Основы формирования общественного мнения",
            "Подготовка и проведение PR мероприятий",
            "Практика работы в fashion и PR проектах под руководством наставника"
          ]}
        />
      ),
      diplom: "два диплома — ВШСДТ и РГСУ",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      space: "1.4rem"
    },
    {
      head: (
        <span>
          ИМИДЖ-КОНСАЛТИНГ
          <br />
          Персональный, деловой стиль
        </span>
      ),
      typeEducation: "Профессиональная переподготовка",
      duration: "6 месяцев. Очно или Дистанционно",
      specialisation:
        "Развитие личного стиля для карьеры, бизнеса. Консультирование клиентов по стилю в одежде, управление впечатлением",
      price: (
        <span>
          от 9<sup>900</sup> руб. в месяц
        </span>
      ),
      process:
        "Правила создания стиля от А до Я: в одежде, аксессуарах, прическе (макияже). Подбор рационального гардероба. Создание Style Book. Мужская и женская стилистика. Дресс-коды. Практика эффективного шопинга. Психологические особенности разработки имиджа и работы с клиентами. Управление впечатлением. Имиджевое восприятие и инструменты влияния",
      diplom: "диплом установленного государством образца",
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/image-consulting"
      }
    },
    {
      head: (
        <span>
          ЛИЧНЫЙ БРЕНД
          <br />
          Профессиональное продвижение
        </span>
      ),
      typeEducation: "Повышение квалификации",
      duration: "1 месяц. Очно или Дистанционно",
      specialisation: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={["Создание личного бренда", "Продвижение личного бренда"]}
        />
      ),
      price: (
        <span>
          от 9<sup>900</sup> руб. в месяц
        </span>
      ),
      process:
        "Этапы создания личного бренда, формирование личной айдентики и профессионального стиля, разработка стратегии продвижения бренда и услуг, монетизация бренда",
      diplom: <span>удостоверение о повышении ква&shy;лифи&shy;кации</span>,
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/personal-brand"
      }
      // space: "2.7rem"
    },
    {
      head: (
        <span>
          ФОРМИРОВАНИЕ ИМИДЖА
          <br />
          Инструменты политтехнологий
        </span>
      ),
      typeEducation: "Повышение квалификации",
      duration: "3 месяца. Очно или Дистанционно",
      specialisation:
        "Консультирование клиентов — работа с публичными персонами, политиками, гос служащими",
      price: (
        <span>
          от 20
          <sup>000</sup> руб. в месяц
        </span>
      ),
      process:
        "Необходимые инструменты для работы с имиджем публичных персон с учетом политической и организационной культуры, специфики восприятия лидеров современным обществом",
      diplom: <span>удостоверение о повышении ква&shy;лифи&shy;кации</span>,
      link: {
        type: "form",
        text: "записаться",
        link: false
      },
      link2: {
        type: "insideLink",
        text: "подробнее",
        link: "/political-style"
      }
    }
  ]
};
