import React from "react";
import Page from "./page";
import Content from "./content-maker";
import { dates, DateToString } from "./dates";

const Component = props => {
  const content = (
    <Content
      content={[
        // {
        //   data: dates.fashionStyling.online), // "22 марта",
        //   head: "Fashion-стилистика",
        //   link: "/fashion-styling",
        //   descript: "Дистанционно, 6 месяцев"
        // },
        // {
        //   data: dates.profashion.online, true),
        //   head: "Имидж-консультант",
        //   link: "/profashion",
        //   descript: "Дистанционно, 6 месяцев"
        // },
        // {
        //   data: dates.profashion.ofline, true),
        //   head: "Имидж-консультант",
        //   link: "/profashion",
        //   descript: "Очно, 6 месяцев"
        // },
        {
          data: dates.imagemaker.ofline,
          head: "Имидж-консалтинг и fashion-styling",
          link: "/second-degree-imagemaker",
          descript: "Обучение профессии: Модный стилист. 11 месяцев",
          type: "Очно"
        },
        {
          data: dates.imagemaker.online,
          head: "Имидж-консалтинг и fashion-styling",
          link: "/second-degree-imagemaker",
          descript: "Обучение профессии: Модный стилист. 11 месяцев",
          type: "Дистанционно"
        },
        {
          data: dates.imagemaker2.ofline,
          head: "Имидж-консалтинг и fashion-styling",
          link: "/second-degree-imagemaker",
          descript: "Обучение профессии: Модный стилист. 11 месяцев",
          type: "Очно"
        },
        {
          data: dates.imagemaker2.online,
          head: "Имидж-консалтинг и fashion-styling",
          link: "/second-degree-imagemaker",
          descript: "Обучение профессии: Модный стилист. 11 месяцев",
          type: "Дистанционно"
        },
        {
          data: dates.designInterior.online,
          head: "Дизайн и декорирование интерьеров",
          link: "/living-interior-design-and-decoration",
          descript: "Обучение профессии: Дизайнер интерьера. 9 месяцев",
          type: "Дистанционно"
        },
        {
          data: dates.designInterior.ofline,
          head: "Дизайн и декорирование интерьеров",
          link: "/living-interior-design-and-decoration",
          descript: "Обучение профессии: Дизайнер интерьера. 9 месяцев",
          type: "Очно"
        },
        {
          data: dates.fashionStyling.online,
          head: "Fashion-styling. Стилизация фотосессий и проектов",
          link: "/fashion-styling",
          descript:
            "Практика продюссирования, подготовки и реализации фотосессий и фэшн проектов. 6 месяцев",
          type: "Дистанционно"
        },
        {
          data: dates.fashionStyling.ofline,
          head: "Fashion-styling. Стилизация фотосессий и проектов",
          link: "/fashion-styling",
          descript:
            "Практика продюссирования, подготовки и реализации фотосессий и фэшн проектов. 6 месяцев",
          type: "Очно"
        },
        {
          data: dates.visualMerchandising.ofline,
          head: "Визуальный мерчендайзинг и витринистика",
          link: "/visual-merchandising-and-showcases-design",
          descript:
            "Обучение визуальным концепциям и технологиям увеличения продаж в Fashion retail. 6 месяцев",
          type: "Очно"
        },
        {
          data: dates.visualMerchandising.online,
          head: "Визуальный мерчендайзинг и витринистика",
          link: "/visual-merchandising-and-showcases-design",
          descript:
            "Обучение визуальным концепциям и технологиям увеличения продаж в Fashion retail. 6 месяцев",
          type: "Дистанционно"
        },
        {
          data: dates.visualMerchandising2.ofline,
          head: "Визуальный мерчендайзинг и витринистика",
          link: "/visual-merchandising-and-showcases-design",
          descript:
            "Обучение визуальным концепциям и технологиям увеличения продаж в Fashion retail. 6 месяцев",
          type: "Очно"
        },
        {
          data: dates.visualMerchandising2.online,
          head: "Визуальный мерчендайзинг и витринистика",
          link: "/visual-merchandising-and-showcases-design",
          descript:
            "Обучение визуальным концепциям и технологиям увеличения продаж в Fashion retail. 6 месяцев",
          type: "Дистанционно"
        },
        {
          data: dates.imagemakingReputation.ofline,
          head: "Имиджмейкинг. Репутационные технологии",
          link: false, //"/visual-merchandising-and-showcases-design",
          type: "Очно",
          descript: ""
        },
        {
          data: dates.imageConsulting.online,
          head: "Имидж-консалтинг: индивидуальный и деловой стиль",
          link: "/image-consulting",
          descript: "Технологии успеха для бизнеса и карьеры, 6 месяцев",
          type: "Дистанционно"
        },
        {
          data: dates.imageConsulting.ofline,
          head: "Имидж-консалтинг: индивидуальный и деловой стиль",
          link: "/image-consulting",
          descript: "Технологии успеха для бизнеса и карьеры, 6 месяцев",
          type: "Очно"
        }
      ]}
    />
  );

  return (
    <div>
      <Page
        index={0}
        inner={true}
        content={content}
        head="Дипломные курсы"
        descript="(Документ об окончании: Диплом о профессиональной переподготовке  установленного государством образца)"
      />
    </div>
  );
};

export default Component;
