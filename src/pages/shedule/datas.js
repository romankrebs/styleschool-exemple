import React from "react";
import Month from "./component";

const august = [
  {
    date: "с 8 августа",
    name: "Имидж-консалтинг и Fashion styling",
    link: "/second-degree-imagemaker",
    duration: "Профподготовка 11 месяцев",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "с 8 августа",
    name: "Базовый курс по имиджу и стилю",
    link: "/image-style",
    duration: "Курс 3 месяца",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 8 августа",
    name: "Имидж-консультант",
    link: "/profashion",
    duration: "Профподготовка 6 месяцев",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: "Диплом"
  }
];

const septembre = [
  {
    date: "с 12 сентября",
    name: "Имидж-консультант",
    link: "/profashion",
    duration: "Профподготовка 6 месяцев",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "с 17 сентября",
    name: "Имидж-консалтинг и Fashion styling",
    link: "/second-degree-imagemaker",
    duration: "Профподготовка 11 месяцев",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: "Диплом"
  },
  {
    date: "с 17 сентября",
    name: <span>Имидж-консалтинг &mdash; специализация</span>,
    link: "/second-degree-imagemaker",
    duration: "Профподготовка 6 месяцев",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: "Диплом"
  },
  {
    date: "с 17 сентября",
    name: "Базовый курс по имиджу и стилю",
    link: "/image-style",
    duration: "Курс 3 месяца",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 18 сентября",
    name: "Визуальный мерчендайзинг и витринистика",
    link: "/visual-merchandising-and-showcases-design",
    duration: "Профподготовка 6 месяцев",
    periodicity: "",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "с 20 сентября",
    name: "Стратегическое управление имиджем публичной персоны",
    link: "/political-style",
    duration: "Курс 3 месяца",
    periodicity: "",
    online: true,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 21 сентября",
    name: "Эволиция стилей XX века",
    link: "/styleevolution",
    duration: "Курс 9 месяцев",
    periodicity: "",
    online: false,
    diplom: <span>Серти&shy;фикат</span>
  }
  // {
  //   date: "с 25 сентября",
  //   name: "Стилистика для визажистов",
  //   link: "/style4make",
  //   duration: "",
  //   periodicity: "",
  //   online: true,
  //   diplom: <span>Серти&shy;фикат</span>
  // },
  // {
  //   date: "с 25 сентября",
  //   name: "Стилистика для визажистов",
  //   link: "/style4make",
  //   duration: "",
  //   periodicity: "",
  //   online: false,
  //   diplom: <span>Серти&shy;фикат</span>
  // }
];

const octobre = [
  // {
  //   date: "2 октября",
  //   name: "Тренды текущего сезона, как их считывать в бутике/шоуруме",
  //   link: "/current-season-trends",
  //   duration: "Авторский мастер-класс Марины Синевой",
  //   periodicity: "19:00",
  //   online: "Бутик «Garderob», Москва",
  //   diplom: <span>&ndash;</span>
  // },
  // {
  //   date: "9 октября",
  //   name: "Собираем капсулу в отпуск",
  //   link: "/putting-the-capsule-on-vacation",
  //   duration: "Авторский мастер-класс Марины Синевой",
  //   periodicity: "19:00",
  //   online: "Бутик «Garderob», Москва",
  //   diplom: <span>&ndash;</span>
  // },
  {
    date: "с 16 октября",
    name: "Базовый курс по имиджу и стилю",
    link: "/image-style",
    duration: "Курс 3 месяца",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 16 октября",
    name: "Имидж-консультант",
    link: "/profashion",
    duration: "Курс 6 месяцев",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: "Диплом"
  },
  {
    date: "16 октября",
    name: "Модные тенденции в дениме",
    link: "/denim-fashion-trends",
    duration: "Авторский мастер-класс Марины Синевой",
    periodicity: "19:00",
    online: "Бутик «Garderob», Москва",
    diplom: <span>&ndash;</span>
  },
  {
    date: "с 16 октября",
    name: "Дизайн и декорирование интерьеров",
    link: "/living-interior-design-and-decoration",
    duration: "Профподготовка 9 месяцев",
    periodicity: "2 раза в неделю",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "с 16 октября",
    name: "Имиджмейкер. Второе высшее",
    link: "/second-degree-imagemaker",
    duration: "Профподготовка 11 месяцев",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: "Диплом"
  },
  {
    date: "с 19 октября",
    name: "Эволиция стилей XX века",
    link: "/styleevolution",
    duration: "Курс 9 месяцев",
    periodicity: "",
    online: false,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 20 октября",
    name: "Индустрия моды и fashion-журналистика в цифровую эпоху",
    link: "/fashion-media-digital",
    duration: "Курс 3 месяца",
    periodicity: "",
    online: true,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "23 октября",
    name:
      "Знакомство с брендами премиального сегмента с разбором по стилистике",
    link: "/premium-brands",
    duration: "Авторский мастер-класс Марины Синевой",
    periodicity: "19:00",
    online: "Бутик «Garderob», Москва",
    diplom: <span>&ndash;</span>
  },
  {
    date: "с 23 октября",
    name: "Имиджмейкер. Второе высшее",
    link: "/second-degree-imagemaker",
    duration: "Профподготовка 11 месяцев",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "с 23 октября",
    name: "Имидж-консультант",
    link: "/profashion",
    duration: "Курс 6 месяцев",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "с 23 октября",
    name: "Базовый курс по имиджу и стилю",
    link: "/image-style",
    duration: "Курс 3 месяца",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 24 октября",
    name: "Типология архитектурных форм в интерьере",
    link: "/typology-of-architectural-forms",
    duration: "Повышение квалификации",
    periodicity: "16 занятий",
    online: true,
    diplom: <span>Удосто&shy;ве&shy;ре&shy;ние</span>
  },
  {
    date: "с 28 октября",
    name: "Психология стиля",
    link: "/psychology-of-style",
    duration: "Авторский курс",
    periodicity: "32 академ. часа",
    online: true,
    diplom: "—"
  },
  {
    date: "с 30 октября",
    name: "Типология архитектурных форм в интерьере",
    link: "/psychology-of-style",
    duration: "Авторский курс",
    periodicity: "32 академ. часа",
    online: false,
    diplom: "—"
  }
];

const november = [
  {
    date: "5 ноября",
    name: "История моды с Русланом Миграновым",
    link: "/fashion-history",
    duration: "Курс",
    periodicity: "15 академ. часов",
    online: false,
    diplom: <span>&ndash;</span>
  },
  {
    date: "с 5 ноября",
    name: "Антикризисное управление розничным магазином в индустрии моды",
    link: "/crisis_management_fashion_butik",
    duration: "Повышение квалификации",
    periodicity: "2 дня",
    online: false,
    diplom: <span>Удосто&shy;ве&shy;ре&shy;ние</span>
  },
  {
    date: "6 ноября",
    name: "История моды с Русланом Миграновым",
    link: "/fashion-history",
    duration: "Курс",
    periodicity: "15 академ. часов",
    online: true,
    diplom: <span>&ndash;</span>
  },
  {
    date: "с 12 ноября",
    name: "Дизайн и декорирование интерьеров",
    link: "/living-interior-design-and-decoration",
    duration: "Профподготовка 9 месяцев",
    periodicity: "2 раза в неделю",
    online: false,
    diplom: "Диплом"
  },
  {
    date: "13 ноября",
    name: "Социальные и художественные концепции моды",
    link: "/concepts_of_fashion",
    duration: "Курс 3 месяца",
    periodicity: "30 занятий",
    online: true,
    diplom: <span>&ndash;</span>
  },
  {
    date: "с 14 ноября",
    name: "Формирование имиджа. Инструменты политтехнологий",
    link: "/political-style",
    duration: "Курс 3 месяца",
    periodicity: "",
    online: true,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 17 ноября",
    name: "Дизайн интерьера. Подготовительный курс",
    link: "/interior-design",
    duration: "Курс 3 месяца",
    periodicity: "24 занятия",
    online: true,
    diplom: <span>Серти&shy;фикат</span>
  },
  // {
  //   date: "с 18 ноября",
  //   name: "Базовый курс по имиджу и стилю",
  //   link: "/image-style",
  //   duration: "Курс 3 месяца",
  //   periodicity: "3 раза в неделю",
  //   online: false,
  //   diplom: <span>Серти&shy;фикат</span>
  // },
  // {
  //   date: "с 18 ноября",
  //   name: "Имидж-консультант",
  //   link: "/profashion",
  //   duration: "Профподготовка 11 месяцев",
  //   periodicity: "3 раза в неделю",
  //   online: false,
  //   diplom: "Диплом"
  // },
  {
    date: "21 ноября",
    name: "Художественный образ: от классики к метамодерну",
    link: "/from_classic_to_postmodern",
    duration: "Курс 2½ месяца",
    periodicity: "20 занятий",
    online: true,
    diplom: <span>&ndash;</span>
  },
  {
    date: "с 25 ноября",
    name: "Базовый курс по имиджу и стилю",
    link: "/image-style",
    duration: "Курс 3 месяца",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 25 ноября",
    name: "Имидж-консультант",
    link: "/profashion",
    duration: "Курс 6 месяцев",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "с 25 ноября",
    name: "Имиджмейкер. Второе высшее",
    link: "/second-degree-imagemaker",
    duration: "Профподготовка 11 месяцев",
    periodicity: "3 раза в неделю",
    online: true,
    diplom: "Диплом"
  }
];

const decembre = [
  {
    date: "с 17 декабря",
    name: "Дизайн и декорирование интерьеров",
    link: "/living-interior-design-and-decoration",
    duration: "Профподготовка 9 месяцев",
    periodicity: "2 раза в неделю",
    online: true,
    diplom: "Диплом"
  }
];

const fevruariy = [
  {
    date: "со 2 февраля",
    name: "Дизайн и декорирование интерьеров",
    link: "/living-interior-design-and-decoration",
    duration: "Профподготовка 9 месяцев",
    periodicity: "2 раза в неделю",
    online: true,
    diplom: "Диплом"
  },
  {
    date: "со 2 февраля",
    name: "Дизайн и декорирование интерьеров",
    link: "/living-interior-design-and-decoration",
    duration: "Профподготовка 9 месяцев",
    periodicity: "2 раза в неделю",
    online: false,
    diplom: "Диплом"
  },
  {
    date: "с 3 февраля",
    name: "Базовый курс по имиджу и стилю",
    link: "/image-style",
    duration: "Курс 3 месяца",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: <span>Серти&shy;фикат</span>
  },
  {
    date: "с 3 февраля",
    name: "Имидж-консультант",
    link: "/profashion",
    duration: "Курс 6 месяцев",
    periodicity: "3 раза в неделю",
    online: false,
    diplom: "Диплом"
  },
  {
    date: "с 3 февраля",
    name: "Имиджмейкер. Второе высшее",
    link: "/second-degree-imagemaker",
    duration: "Профподготовка 11 месяцев",
    periodicity: "3 раза в неделю",
    online: "Заочно",
    diplom: "Диплом"
  },
  {
    date: "с 22 февраля",
    name: "Визуальный мерчендайзинг и витринистика",
    link: "/visual-merchandising-and-showcases-design",
    duration: "Профподготовка 6 месяцев",
    periodicity: "",
    online: true,
    diplom: "Диплом"
  }
];

export default function Datas() {
  return (
    <div>
      {/* <Month head="Август" datas={august} /> */}
      {/* <Month head="Сентябрь" datas={septembre} /> */}
      <Month head="Октябрь" datas={octobre} />
      <Month head="Ноябрь" datas={november} />
      <Month head="Декабрь" datas={decembre} />
      <Month head="Февраль 2020" datas={fevruariy} />
    </div>
  );
}
