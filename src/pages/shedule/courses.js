import React from "react";
import Page from "./page";
import Content from "./content-maker";
import { dates, DateToString } from "../shedule/dates";

const Component = props => {
  const content = (
    <Content
      content={[
        // {
        //   data: "26 ноября",
        //   head: "Базовый курс по имиджу и стилю",
        //   link: "/image-style",
        //   descript: "Дистанционно, 3 месяца"
        // },
        // {
        //   data: "27 ноября",
        //   head: "Психология стиля",
        //   link: "/psychology-of-style",
        //   descript: "Очно, 1 месяц"
        // },
        // {
        //   data: "30 ноября",
        //   head: "Сам себе стилист",
        //   link: "/self_style",
        //   descript: "Дистанционно, 1 месяц"
        // },
        // {
        //   data: "30 ноября",
        //   head: "Сам себе стилист",
        //   link: "/self_style",
        //   descript: "Очно, 1 месяц"
        // },
        // {
        //   data: "4 декабря",
        //   head: "Художественный образ: от классики к метамодерну",
        //   link: "/from_classic_to_postmodern",
        //   descript: "Дистанционно, 2½ месяца"
        // },
        // {
        //   data: "10 декабря",
        //   head: "Декорирование интерьеров",
        //   link: "/interiordecor",
        //   descript: "Дистанционно, 3 месяца"
        // },
        // {
        //   data: "14 декабря",
        //   head: "Личный бренд в индустрии моды и дизайна",
        //   link: "/personal-brand",
        //   descript: "Дистанционно | Очно"
        // },
        // {
        //   data: "3 февраля",
        //   head: "Интерьерный дизайн",
        //   link: "/interior-design",
        //   descript: "Дистанционно, 3 месяца"
        // },

        {
          data: "c " + DateToString(dates.selfStyle.online, true),
          head: "Сам себе стилист",
          link: "/self_style",
          descript: "Дистанционно, 1 месяц"
        },
        {
          data: DateToString(dates.baseImageStyle.online, true),
          head: "Базовый курс по имиджу и стилю",
          link: "/image-style",
          descript: "Дистанционно, 3 месяца"
        },
        {
          data: DateToString(dates.baseImageStyle.ofline, true),
          head: "Базовый курс по имиджу и стилю",
          link: "/image-style",
          descript: "Очно, 3 месяца"
        },
        {
          data: "c " + DateToString(dates.selfStyle.ofline, true),
          head: "Сам себе стилист",
          link: "/self_style",
          descript: "Очно, 1 месяц"
        },
        {
          data: "c " + DateToString(dates.interiorDecor.online, true),
          head: "Декорирование интерьеров",
          link: "/interiordecor",
          descript: "Дистанционно, 3 месяца"
        },
        {
          data: "с " + DateToString(dates.interiorDesign.online, true),
          head: "Дизайн интерьера",
          link: "/interior-design",
          descript: "Дистанционно, 3 месяца"
        }
      ]}
    />
  );

  return (
    <div>
      <Page
        index={3}
        inner={true}
        content={content}
        head="Краткосрочные курсы"
        descript="(Документ об окончании: Сертификат)"
      />
    </div>
  );
};

export default Component;
