import React from "react";
import Paragraph from "../../components/p-array";
import { styles } from "../../patterns/pattern-educations/style";

export const content = {
  head: "Видео курсы",
  tiles: [
    {
      head: (
        <span>
          ИДЕАЛЬНЫЙ ИНТЕРЬЕР
          <br />
          Как сделать для себя
        </span>
      ),
      typeEducation: "Видео курс",
      duration: "12 занятий. Дистанционно",
      specialisation:
        "Определение стратегий развития бизнеса по франшизе для брендов индустрии моды",
      price: (
        <span>
          5<sup>000</sup> руб.
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Стили в современном интерьере",
            "Цвет и композиция в идеальном интерьере",
            "Источники креативности и визуализация идей",
            "Зонирование, эргономика, строительные нормы",
            "Декоративные материалы и стилизация",
            "Планирование бюджета и сметы"
          ]}
        />
      ),
      diplom: "сертификат",
      link: {
        type: "outerLink",
        text: "купить",
        link: "https://tickets.ru"
      },
      link2: {
        type: "outerLink",
        text: "подробнее",
        link: " https://intensive-online.ru/"
      },
      space: "2.7rem"
    },
    {
      head: (
        <span>
          ИНДИВИДУАЛЬНЫЙ СТИЛЬ
          <br />
          Как сделать для себя
        </span>
      ),
      typeEducation: "Видео курс",
      duration: "12 занятий. Дистанционно",
      specialisation:
        "Умение раскрывать уникальность и неповторимость своей личности через внешний образ с помощью одежды и аксессуаров",
      price: (
        <span>
          5<sup>000</sup> руб.
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Индивидуальность и мода",
            "Индивидуальная цветовая палитра",
            "Идеальный силуэт",
            "Стилевые направления в одежде, смешение стилей. Аксессуары",
            "Рациональный гардероб",
            "Секреты удачного шопинга"
          ]}
        />
      ),
      diplom: "сертификат",
      link: {
        type: "outerLink",
        text: "купить",
        link: "https://tickets.ru"
      },
      link2: {
        type: "outerLink",
        text: "подробнее",
        link: "https://lectorium.club/stilkakiskusstvo"
      }
      //space: "3.55rem"
    },
    {
      head: (
        <span>
          ПСИХОЛОГИЯ ЦВЕТА
          <br />
          Как обрести гармонию
        </span>
      ),
      typeEducation: "Видео курс",
      duration: "15 занятий. Дистанционно",
      specialisation:
        "Понимать семантику цветов в мировой культуре, а также психофизиологии их восприятия, их воздействия на моду и стиль жизни",
      price: (
        <span>
          5<sup>000</sup> руб.
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Первобытная цветовая триада и ее семантика.",
            "Палитра цветов. Оттенки, смыслы, тренды.",
            "Эстетика пастельных цветов.",
            "«Неоновые» цвета: назначение и воздействие.",
            "«Земли»: ассоциативное восприятие  и тренды.",
            "Сочетания цветов и визуальное впечатление"
          ]}
        />
      ),
      diplom: "сертификат",
      link: {
        type: "outerLink",
        text: "купить",
        link: "https://tickets.ru"
      },
      link2: {
        type: "outerLink",
        text: "подробнее",
        link: "https://lectorium.club/psihologiya_cveta"
      }
      //space: "3.55rem"
    },
    {
      head: (
        <span>
          ПРЕРАФАЭЛИТЫ
          <br />
          Быть самим собой
        </span>
      ),
      typeEducation: "Видео курс",
      duration: "9 занятий. Дистанционно",
      specialisation:
        "Умение видеть, как выглядит синтез прошлого, настоящего и будущего в искусстве",
      price: (
        <span>
          2<sup>000</sup> руб.
        </span>
      ),
      process:
        "В курсе рассмотрена знаково-символическая система художественного образа «Братства»: новое понимание цвета и композиции, правдоподобие и символизм, натурализм и мистичность, синтез литературы, жизни и творчества, двойственность и психологизм, вариативность категории красоты и образа Женщины.",
      diplom: "сертификат",
      link: {
        type: "outerLink",
        text: "купить",
        link: "https://tickets.ru"
      },
      link2: {
        type: "outerLink",
        text: "подробнее",
        link: "https://lectorium.club/prerafaelity"
      }
      //space: "3.55rem"
    },
    {
      head: (
        <span>
          ИСТОРИЯ МОДЫ
          <br />С Русланом Миграновым
        </span>
      ),
      typeEducation: "Видео курс",
      duration: "5 занятий. Дистанционно",
      specialisation: "Понимать изменчивость и красоту моды",
      price: (
        <span>
          5<sup>000</sup> руб.
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Основные характеристики костюма каждого десятилетия",
            "Создатели моды, их идеи и образы",
            "Иконы стиля и «уличная» мода",
            "Развитие моды как развитие идей искусства и технологий XX века",
            "Суть творческого метода французских, итальянских, британских и американских дизайнеров-кутюрье"
          ]}
        />
      ),
      diplom: "сертификат",
      link: {
        type: "outerLink",
        text: "купить",
        link: "https://tickets.ru"
      },
      link2: {
        type: "outerLink",
        text: "подробнее",
        link: "https://lectorium.club/istoriya_mody"
      }
      //space: "3.55rem"
    },
    {
      head: (
        <span>
          МАСТЕРСТВО СОЗДАНИЯ
          <br />
          ТЕКСТА
        </span>
      ),
      typeEducation: "Видео курс",
      duration: "10 занятий. Дистанционно",
      specialisation:
        "Профессионально или творчески писать статьи, эссе, обзоры, анонсы, готовить презентации",
      price: (
        <span>
          5<sup>000</sup> руб.
        </span>
      ),
      process: (
        <Paragraph
          style={{ ...styles.p, padding: 0 }}
          content={[
            "Как легко и с удовольствием подбирать тему, жанр, название тексту в любой ситуации",
            "Как выражать мысли ясно, просто, интересно, смело и по делу",
            "Как не бояться высказываться, пробовать, самовыражаться",
            "Как стройно и структурно мыслить"
          ]}
        />
      ),
      diplom: "сертификат",
      link: {
        type: "outerLink",
        text: "купить",
        link: "https://tickets.ru"
      },
      link2: {
        type: "outerLink",
        text: "подробнее",
        link: "https://lectorium.club/mastertext"
      }
      //space: "3.55rem"
    }
  ]
};
