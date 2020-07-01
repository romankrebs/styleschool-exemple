import React from "react";
import Paragraph from "../../components/p-array";
import { styles } from "../../patterns/pattern-educations/style";

export const content = {
  head: "Репутационные технологии, PR",
  tiles: [
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
      },
      space: "7rem"
    }
  ],
  subMenu: true
};
