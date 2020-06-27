import React from "react";
import Page from "./page";
import Content from "./content-maker";
import { dates, DateToString } from "./dates";

const Component = props => {
  const content = (
    <Content
      content={[
        // {
        //   data: DateToString(dates.fashionStyling.online), // "22 марта",
        //   head: "Fashion-стилистика",
        //   link: "/fashion-styling",
        //   descript: "Дистанционно, 6 месяцев"
        // },
        // {
        //   data: DateToString(dates.profashion.online, true),
        //   head: "Имидж-консультант",
        //   link: "/profashion",
        //   descript: "Дистанционно, 6 месяцев"
        // },
        {
          data: DateToString(dates.profashion.ofline, true),
          head: "Имидж-консультант",
          link: "/profashion",
          descript: "Очно, 6 месяцев"
        },
        {
          data: DateToString(dates.visualMerchandising, true),
          head: "Визуальный мерчендайзинг и витринистика",
          link: "/visual-merchandising-and-showcases-design",
          descript: "Дистанционно, 6 месяцев"
        },
        {
          data: DateToString(dates.designInterior.online, true),
          head: "Дизайн и декорирование интерьеров",
          link: "/living-interior-design-and-decoration",
          descript: "Дистанционно, 9 месяцев"
        },
        {
          data: DateToString(dates.fashionStyling.ofline), // "18 марта",
          head: "Fashion-стилистика",
          link: "/fashion-styling",
          descript: "Очно, 6 месяцев"
        },
        {
          data: DateToString(dates.imagemaker.online, true),
          head: "Имидж-консалтинг и Fashion-styling",
          link: "/second-degree-imagemaker",
          descript: "Дистанционно, 11 месяцев"
        },
        {
          data: DateToString(dates.imagemaker.ofline, true),
          head: "Имидж-консалтинг и Fashion-styling",
          link: "/second-degree-imagemaker",
          descript: "Очно, 11 месяцев"
        },
        {
          data: DateToString(dates.designInterior.ofline, true),
          head: "Дизайн и декорирование интерьеров",
          link: "/living-interior-design-and-decoration",
          descript: "Очно, 9 месяцев"
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
