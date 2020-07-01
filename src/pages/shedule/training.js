import React from "react";
import Page from "./page";
import Content from "./content-maker";
import { dates, DateToString } from "./dates";

const Component = props => {
  const content = (
    <Content
      content={[
        {
          data: dates.conceptsOfFashion,
          head: "Теория моды",
          link: "/concepts_of_fashion",
          descript: "3 месяца",
          type: "Дистанционно"
        },
        {
          data: dates.personalBrand.ofline,
          head: "Личный бренд в индустрии моды и дизайна",
          link: "/personal-brand",
          type: "Очно",
          descript: ""
        },
        {
          data: dates.personalBrand.online,
          head: "Личный бренд в индустрии моды и дизайна",
          link: "/personal-brand",
          type: "Дистанционно",
          descript: ""
        },
        {
          data: dates.interiorDesign.online,
          head: "Консультант по интерьеру",
          link: "/interior-design",
          type: "Дистанционно",
          descript: ""
        },
        {
          data: dates.interiorDesign.ofline,
          head: "Консультант по интерьеру",
          link: "/interior-design",
          type: "Очно",
          descript: ""
        },
        {
          data: dates.fashionFranchising.online,
          head: "Фэшн франчайзинг",
          link: "/fashion-franchising",
          type: "Дистанционно",
          descript: ""
        }
        // {
        //   data: "6 декабря",
        //   head: "Типология архитектурных форм",
        //   link: "/typology-of-architectural-forms",
        //   descript: "Дистанционно, 2 месяца"
        // },
        // {
        //   data: "11 января",
        //   head: "Реклама в индустрии моды и дизайна",
        //   link: "/advertising-as-a-communication",
        //   descript: "Дистанционно | Очно"
        // },
        // {
        //   data: "15 января",
        //   head: "Формирование имиджа. Инструменты политтехнологий",
        //   link: "/political-style",
        //   descript: "Дистанционно, 3 месяца"
        // },
        // // {
        // //   data: "18 января",
        // //   head: "Fashion-журналистика в цифровую эпоху",
        // //   link: "/fashion-media-digital",
        // //   descript: "Дистанционно, 3 месяца"
        // // },
        // {
        //   data: "18 января",
        //   head: "Как создать франшизу и продвигать её",
        //   link: "/how-to-create-a-franchise",
        //   descript: "Дистанционно, 1½ месяца"
        // },

        // {
        //   data: "25 января",
        //   head:
        //     "Технология запуска startup – проектов в индустрии моды и дизайна",
        //   link: "/launch-technology-startup",
        //   descript: "Дистанционно | Очно"
        // },
        // {
        //   data: "25 января",
        //   head: "Руководство по продвижению модного бренда на глобальном рынке",
        //   link: "/fashion-brand-promotion-gid",
        //   descript: "Дистанционно | Очно"
        // },
        // {
        //   data: "27 января",
        //   head: "Как выбрать франшизу и успешно с ней работать",
        //   link: "/how-to-choose-a-franchise",
        //   descript: "Дистанционно, 1½ месяца"
        // },
        // {
        //   data: "с " + DateToString(dates.internshipInMilan, true),
        //   head:
        //     "Шоппинг стажировка в Италии на Milan fashion week 17.02-23.02.2020",
        //   link: "/internship-in-milan",
        //   descript: "Очно"
        // },
        // {
        //   data: "10 марта",
        //   head:
        //     "Международные коммуникации, презентация бренда на глобальном рынке",
        //   link: "/international-communications",
        //   descript: "Дистанционно | Очно, 3 месяца"
        // }
      ]}
    />
  );

  return (
    <div>
      <Page
        index={1}
        inner={true}
        content={content}
        head="Повышение квалификации"
        descript="(Документ об окончании: Диплом о профессиональной переподготовке  установленного государством образца)"
      />
    </div>
  );
};

export default Component;
