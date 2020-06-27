import React from "react";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import { Link } from "react-router-dom";
// import Img from "../../patterns/pattern-fs/img";
import Forma from "../../components/credit-form";
import Images from "../../components/images-in-line";
import { dates, Month } from "../shedule/dates";

const styles = {
  h1: {
    fontFamily: "Roboto",
    fontSize: "2rem",
    fontWeight: 700,
    color: "rgb(80,80,80)",
    textAlign: "center",
    margin: 0,
    padding: "2rem 0",
    paddingTop: 0
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1.6rem 0 1.4rem 0"
  },
  h3Big: {
    fontFamily: "Roboto",
    fontSize: "1.3em",
    fontWeight: 700,
    color: "rgb(123,143,87)",
    textAlign: "center",
    margin: 0,
    padding: "1em 0"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1em 0"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pJust: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "justify",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pCenter: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 0,
    paddingBottom: "0.5em",
    lineHeight: "1.5em"
  },
  pIll: {
    fontFamily: "Roboto",
    fontSize: "0.8em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 0,
    lineHeight: "1.2em"
  },
  image: {
    maxHeight: 350
  },
  imageBox: {
    textAlign: "center"
  }
};

const stylesPrice = {
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.2em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 12,
    paddingBottom: 12,
    margin: 0
  },
  price: {
    fontFamily: "Roboto",
    fontSize: "1.3em",
    color: "rgb(100,100,100)",
    textAlign: "justify",
    fontWeight: 400,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "1em",
    color: "rgb(100,100,100)",
    textAlign: "justify",
    fontWeight: 400,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0
  }
};

export const contents = {
  titlePage: "ВШСДТ – Профессия Дизайнер",
  head: {
    headDescript: "Профессиональное образование",
    head: (
      <div
        style={{
          fontSize: "2.2rem",
          fontWeight: 500,
          padding: "1rem 0"
        }}
      >
        Дизайн и декорирование интерьеров
      </div>
    ),
    headAfterDescript:
      "Обучение профессии, диплом дизайнера интерьера через 10 месяцев",
    descript: [
      "Очно, дистанционно",
      "Преподаватели из России, Бельгии, Италии",
      "Диплом установленного государством образца",
      "9 месяцев, 360 академических часов",
      "Рассрочка, налоговый вычет",
      "От 9900 руб. в месяц"
    ],
    text: "",
    imageComment: false,
    imageSource: "/img/living-interior-design-and-decoration/fullscreen-sm.jpg",
    video: "z7IMSjqkLmQ"
  },
  text1:
    "Наш курс нацелен на тех, кто не боится мечтать и воплощать свои мечты в жизнь, на тех, кто готов созидать и преображать мир вокруг, привносить эстетику и гармонию в повседневную жизнь людей. Дизайн – это отражение внутреннего содержания человека, особая философия, форма мышления.",
  tags1: (
    <span style={{ fontSize: 0 }}>
      {/* теги:
      <span style={{ color: "rgb(180,180,180)" }}>#модаистиль&ensp;</span>
      <span style={{ color: "rgb(180,180,180)" }}>#стильодежда&ensp;</span>
      <span style={{ color: "rgb(180,180,180)" }}>#имиджконсультант&ensp;</span>
      <span style={{ color: "rgb(180,180,180)" }}>#стилистодежды</span> */}
    </span>
  ),
  screen2: {
    dates: [
      {
        d: dates.designInterior.online.getDate(),
        t: Month(dates.designInterior.online.getMonth()),
        c: "дистанционно"
      },
      {
        d: dates.designInterior.ofline.getDate(),
        t: Month(dates.designInterior.ofline.getMonth()),
        c: <span>&ensp;очно</span>
      }
    ],
    quote: {
      text: "«Всё кажется невозможным, пока не будет сделано.»",
      author: "Нельсон Мандела"
    },
    text: (
      <List
        arr={[
          "Овладейте одной из самых востребованных креативных профессий",
          "Сделайте свой 1-ый проект для заказчика во время обучения",
          "Освойте тонкости коммуникаций с клиентами и исполнителями",
          "Узнайте юридические составляющие профессии",
          "Выйдете на международный рынок труда"
        ]}
      />
    ),
    video: false,
    image: {
      source: "/img/living-interior-design-and-decoration/3d-interior.png",
      comment: ""
    }
  },
  text2: {
    title: "Ищете идеальное образование?",
    text: (
      <Paragraph
        content={[
          "Вы можете выбрать интересующие Вас темы и форматы их освоения. Здесь Вы найдете как формат классического образования — в составе группы и единой программы, так и возможность индивидуальной траектории обучения.",
          "Мы не просто готовим специалистов в сфере дизайна интерьера. Мы даем возможность человеку стать настоящим художником жизни, который тонко чувствует внутреннюю природу человека и умеет найти для неё идеальное внешнее  обрамление.",
          "Мы — Автономная некоммерческая организация Дополнительного профессионального образования «Высшая школа стилистики, дизайна и технологий», одна из ведущих образовательных площадок в индустрии"
        ]}
        style={styles.p}
      />
    )
  },
  aboutProfeshion: {
    title: "О профессии",
    short:
      "Дизайнер интерьера – это тонкий психолог, который может уловить \
      и реализовать самые глубинные желания клиента. Настоящий творец, \
      способный с помощью фундаментальных знаний, тонкого эстетичес\
      кого вкуса и неординарного видения не просто изменить простран\
      ство, но помочь человеку по-новому взглянуть на самого себя       и своё место в этом мире.…",
    detail: false
  },
  principes: [
    "Время. За 9 месяцев вы изучите программу, альтернативную 4-х лет\
    нему образованию! Системно и эффективно, благодаря уникальному \
    подходу и опыту преподавателей и ограниченным по количеству \
    слушателей группам.",
    "Проектно-ориентированное обучение. В процессе обучения изучаются \
    как самые основы дизайн-мышления и дизайн-проектирования, так и \
    вся полнота процессов создания дизайн-проектов от и до. Не выходя \
    из дома. Финал обучения для Вас – уже собственный проект для \
    реального заказчика.",
    "Наставники. У Вас не останется шансов не применить знания на \
    практике. «Послушать и забыть» не получится. Наши преподаватели \
    требовательны и внимательны к Вашим работам и к Вашей успеваемости.",
    "Актуальность. Квалифицированные педагоги обучают Вас всем этапам \
    дизайна — от подбора цвета и материалов до технической и правовой \
    стороны. Каждую дисциплину читает лектор — эксперт и практик в \
    своей области"
  ],
  programma: {
    head: "Программа курса",
    content: [
      <List
        style={styles.p}
        num="none"
        olStyle={{ marginLeft: 0, paddingLeft: 0 }}
        arr={[
          "Обучение делится на 4 уровня. Каждый уровень содержит практические блоки, где студенты закрепляют полученные знания и навыки, используя профессиональные инструменты и профильные компьютерные программы. Оценкой полученных знаний и навыков являются промежуточное тестирование и дипломная работа.",
          "Курс обучения студентов разработан на основе международных стандартов профессии"
        ]}
      />,
      <List
        style={styles.p}
        num="none"
        olStyle={{ marginLeft: 0, paddingLeft: 0 }}
        arr={[
          <b>Дисциплины и темы занятий</b>,
          "Архитектурные и интерьерные стили",
          "Стили в современном интерьере",
          "Методики развития креативности",
          "Эргономика пространства",
          "Цвет и композиция в интерьере",
          "Подготовка сметы и работа с бюджетом",
          "Разработка концепции пространства",
          "Строительные нормы и правила",
          "Создание планов Вашего помещения",
          "Зонирование интерьера и организация хранения",
          "Сценарий освещения",
          "Электрика",
          "Создание чертежей и проектной документации",
          "2D-моделирование: Photoshop и Archicad",
          "3D-моделирование и создание визуализаций",
          "Декоративно-отделочные материалы",
          "Рынок мебели, текстиля, аксессуаров. Бренды",
          "Декорирование интерьера",
          "Авторское право",
          "Работа со специалистами из смежных областей",
          "Алгоритм поиска и работы с клиентами",
          "Международные выставки и сотрудничество",
          "Коммуникации: специфика работы дизайнера или как найти баланс с самим собой, клиентом, подрядчиком и строителями"
        ]}
      />,
      <h2
        style={{
          ...styles.h2,
          fontFamily: "PT Sans Narrow",
          textAlign: "left"
        }}
      >
        Результат успешной учебы
      </h2>,
      <List
        style={styles.p}
        olStyle={{ marginLeft: 0, paddingLeft: 0 }}
        arr={[
          "Защита итоговой работы и подтверждение дипломом изученных компетенций",
          "Владение программами:",
          <Images
            justify="flex-start"
            size={50}
            imgs={[
              {
                image: "img/living-interior-design-and-decoration/ps.png",
                text: "Adobe Photoshop"
              },
              {
                image: "img/living-interior-design-and-decoration/archicad.png",
                text: "Archicad"
              },
              {
                image: "img/living-interior-design-and-decoration/3d-max.png",
                text: "3D Max"
              }
            ]}
          />,
          "Проект квартиры в портфолио",
          "Новые партнеры, команда, клиенты",
          "План развития личного бренда"
        ]}
        num="none"
      />
    ]
  },
  variants: {
    head: "Варианты",
    content: [
      {
        head: "Дипломная программа",
        text: (
          <List
            arr={[
              "Обучение по программе «Дизайн и декорирование интерьеров» реализуется на основании Лицензии на образовательную деятельность и соответствует требованиям, предъявляемым к программам профессиональной переподготовки",
              "Программа реализуется в очном, онлайн и дистанционном форматах",
              <span>
                Длительность программы:
                <br />
                360 академических часов,
                <br />
                9+1 месяцев
              </span>,
              "Группы: дневные, вечерние, выходного дня",
              <span>
                График:
                <br />
                2-3 занятия в неделю + самостоятельная работа
              </span>,
              "Требования к уровню знаний поступающих: нет",
              "Требования в процессе обучения: \
              обязательно выполнение д/з, тестов, экзамен.",
              "Выпускники других курсов/школ в области дизайна среды принимаются с зачетом соответствующих дисциплин (определяется на собеседовании)"
            ]}
            num="none"
            olStyle={{ padding: 0, margin: 0 }}
            style={{ ...styles.p, textAlign: "right" }}
          />
        )
      },
      {
        head: "Вольный слушатель",
        text: (
          <List
            arr={[
              "Этот вариант для тех, кто хочет изучать материал без выполнения заданий и экзаменов (что является обязательным требованием в дипломной программе). Требования к поступлению и обучению — минимальны."
            ]}
            style={{ ...styles.p, textAlign: "right" }}
            olStyle={{ padding: 0, margin: 0 }}
            num="none"
          />
        )
      },
      {
        head: "Конструктор обучения",
        text: (
          <List
            arr={[
              "Индивидуальная траектория. Формат дает возможность \
              выбора интересующих дисциплин/модулей с полноценным \
              вовлечением в образовательный процесс по выбранным \
              дисциплинам/модулям с получением удостоверения о \
              повышении квалификации (для дисциплин от 16 академ. часов)"
            ]}
            style={{ ...styles.p, textAlign: "right" }}
            olStyle={{ padding: 0, margin: 0 }}
            num="none"
          />
        )
      },
      {
        head: "Альтернативные программы обучения",
        text: (
          <List
            arr={[
              "Дизайн среды (Высшее образование дистанционно), бакалавриат 4 года",
              <Link to="/interior-design">
                Дизайн интерьера (интенсив), 3 месяца
              </Link>,
              "Декорирование интерьера (интенсив), 3 месяца",
              <a href="https://intensive-online.ru/">
                Сам себе дизайнер (видео курс), 10 занятий
              </a>
            ]}
            style={{ ...styles.p, textAlign: "left" }}
            // olStyle={{ padding: 0, margin: 0 }}
          />
        )
      }
    ]
  },
  afterEducation: false,
  // {
  //   head: "Карьера, бизнес, профессия",
  //   videos: ["fOZzI3bKXIU", "2_fcNTHeV3g", "NzsSXUy2GMk"]
  // },
  aboutEducation: (
    <span>
      Программа обучения в очном и онлайн форматах состоит из 125&nbsp;занятий
      по 2&nbsp;академических часа.
      <br />
      График проведения занятий: по 2&nbsp;занятия 2-3&nbsp;раза в неделю.
      <br />
      Длительность всего курса — 5+&nbsp;месяцев.
    </span>
  ),
  formats: {
    head: "Форматы обучения",
    content: [
      {
        title: "Максимальный (очно)",
        icon: <img src="/img/green/teach.svg" alt="" style={{ height: 48 }} />,
        text:
          "Это очное обучение с частичным применением \
          дистанционных технологий, в которых более 80% занятий \
          проходят в непосредственном контакте с преподавателями \
          и экспертами. Такой формат актуален для тех, кому \
          привычен четкий график занятий, у кого есть возможность \
          посещать занятия по этому графику, кто планирует уделять \
          обучению максимальное количество времени. Практики на \
          проектах и мастер-классы с экспертами в большей степени \
          доступны именно в этом формате. В данный формат включено \
          создание продающего лендинга и оформление соцсетей \
          в едином стиле."
      },
      {
        title: "Гибкий график (онлайн обучение)",
        icon: <img src="/img/green/earth.svg" alt="" style={{ height: 48 }} />,
        text:
          "Это обучение, где основное внимание уделяется живому \
          общению с преподавателями онлайн в сочетании с изучением \
          учебного материала в записи. Такой формат прекрасно \
          заменяет очное обучение, когда в силу занятости или \
          удаленности необходимо гибко подходить к планированию \
          времени и его длительности для изучения отдельных дисциплин. \
          На основе этого формата можно эффективно подбирать \
          индивидуальную траекторию обучения. В процессе обучения \
          предусмотрены защиты проектных и дипломных работ онлайн. \
          В данный формат включено создание продающего лендинга и \
          оформление соцсетей в едином стиле."
      },
      {
        title: "Эконом (Дистанционное обучение)",
        icon: (
          <img
            src="/img/green/monitor-dashboard.svg"
            alt=""
            style={{ height: 48 }}
          />
        ),
        text:
          "Традиционный и привычный многим формат обучения, в \
          котором более 80% учебного материала обучающиеся могут \
          изучать в записи. В этом формате на все вопросы  по тем \
          или иным темам отвечают наставники — опытные практикующие \
          выпускники. Предусмотрена обратная связь и консультации \
          с основными преподавателями курса. По итогам обучения \
          экзамены проходят также в дистанционном формате. В данном \
          формате предусмотрены консультации по созданию лендинга \
          и другим каналам продвижения. Классический дистанционный \
          формат оптимален с позиции сочетания гибкого графика, \
          обратной связи в процессе и, главное, стоимости обучения."
      }
    ]
  },
  pay: {
    ofline: {
      textButton: "Очное и заочное обучение",
      text: (
        <div>
          <h3 style={styles.h3}>Стоимость очного и заочного обучения</h3>
          <p style={{ ...stylesPrice.text, textAlign: "center" }}>
            (Дипломная работа, максимальный формат)
          </p>
          <List
            style={stylesPrice.text}
            num="decimal"
            arr={[
              <div>
                Вариант оплаты: рассрочка на время обучения
                <List
                  style={stylesPrice.text}
                  arr={[
                    <span>
                      <b>
                        16
                        <sup>000</sup>
                         рублей
                      </b>{" "}
                      — 2й и последующие ежемесячные платежи
                    </span>,
                    <span>
                      первый платеж — 32
                      <sup>000</sup>
                       рублей
                    </span>,
                    <span>
                      полная стоимость — 160
                      <sup>000</sup>
                       рублей
                    </span>
                  ]}
                />
              </div>,
              <span>
                Вариант оплаты: единовременно со скидкой
                <br />
                При единовременной оплате обучения предоставляется
                скидка&nbsp;10%
              </span>,
              "Важно: по запросу мы предоставляем документы для \
              налогового вычета"
            ]}
          />
          {/* <Forma
            sum="205000.00"
            name="Дизайн и декорирование интерьера, курс профессиональной переподготовки (Дипломная программа, максимальный формат)"
            test={false}
            yellow
          /> */}
        </div>
      )
    },
    online: {
      textButton: "Онлайн обучение",
      text: (
        <div>
          <h3 style={styles.h3}>Стоимость онлайн обучения</h3>
          <p style={{ ...stylesPrice.text, textAlign: "center" }}>
            (Дипломная программа, гибкий формат)
          </p>
          <List
            style={stylesPrice.text}
            num="decimal"
            arr={[
              <div>
                Вариант оплаты: рассрочка на время обучения
                <List
                  style={stylesPrice.text}
                  arr={[
                    <span>
                      <b>
                        15
                        <sup>000</sup>
                         рублей
                      </b>{" "}
                      — ежемесячные платежи со 2-го по 10-й
                    </span>,
                    <span>
                      первый платеж — 25
                      <sup>000</sup>
                       рублей
                    </span>,
                    <span>
                      полная стоимость — 160
                      <sup>000</sup>
                       рублей
                    </span>
                  ]}
                />
              </div>,
              <span>
                Вариант оплаты: единовременно со скидкой
                <br />
                При единовременной оплате обучения предоставляется
                скидка&nbsp;10%
              </span>,
              "Важно: по запросу мы предоставляем документы для \
              налогового вычета"
            ]}
          />
          <Forma
            sum="160000.00"
            name="Дизайн и декорирование интерьера, курс профессиональной переподготовки (Дипломная программа, гибкий формат)"
            test={false}
            yellow
          />
        </div>
      )
    },
    distant: {
      textButton: "Дистанционное обучение",
      text: (
        <div>
          <h3 style={styles.h3}>Стоимость обучения в дистанционном формате</h3>
          <List
            style={stylesPrice.text}
            num="decimal"
            arr={[
              <div>
                Вариант оплаты: рассрочка на время обучения
                <List
                  style={stylesPrice.text}
                  arr={[
                    <span>
                      <b>
                        9<sup>900</sup>
                         рублей
                      </b>{" "}
                      — 2й и последующие ежемесячные платежи
                    </span>,
                    <span>
                      первый платеж — 19
                      <sup>900</sup>
                       рублей
                    </span>,
                    <span>
                      полная стоимость — 109
                      <sup>200</sup>
                       рублей
                    </span>
                  ]}
                />
              </div>,
              <span>
                Вариант оплаты: единовременно со скидкой
                <br />
                При единовременной оплате обучения предоставляется
                скидка&nbsp;10%
              </span>,
              "Важно: по запросу мы предоставляем документы для \
              налогового вычета"
            ]}
          />
          <Forma
            sum="109200.00"
            name="Дизайн и декорирование интерьера, курс профессиональной переподготовки (Дипломная программа, эконом формат)"
            test={false}
            yellow
          />
        </div>
      )
    },
    free: {
      textButton: "Дисциплины по выбору",
      text: (
        <div>
          <h3 style={styles.h3}>Стоимость обучения на отдельных дисциплинах</h3>
          <List
            style={stylesPrice.text}
            num="decimal"
            arr={[
              "Стоимость обучения для вольного слушателя соответствует стоимости выбранного формата обучения",
              "Стоимость освоения отдельных модулей в дистанционном формате определяется на основании ставки от 500 рублей за академический час",
              "Стоимость индивидуальных консультаций в рамках образовательных программ составляет 2000 рублей за академический час",
              "Итоговую стоимость обучения в выбранном формате по отдельным дисциплинам уточняйте у специалистов учебного отдела"
            ]}
          />
          {/* <Forma
            sum="59400.00"
            name="Fasion-стилистика, курс профессиональной переподготовки (вольный слушатель)"
            test={false}
            yellow
          /> */}
        </div>
      )
    }
  },
  info: {
    head: "Информационные материалы и документация",
    iconDocs: (
      <svg width={24} height={24} viewBox="0 0 24 24">
        <path
          fill="rgb(100,100,100)"
          d="M16 0H8C6.9 0 6 .9 6 2V18C6 19.1 6.9 20 8 20H20C21.1 20 22 19.1 22 18V6L16 0M20 18H8V2H15V7H20V18M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4Z"
        />
      </svg>
    ),
    iconMonitor: (
      <svg width={24} height={24} viewBox="0 0 24 24">
        <path
          fill="rgb(100,100,100)"
          d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z"
        />
      </svg>
    )
  },
  teachers: [
    {
      image: "/img/living-interior-design-and-decoration/lamonova.jpg",
      name: "Елена Ламонова (Россия)",
      text:
        "Дизайнер. Специалист в области интерьерного, ландшафтного, \
        предметного дизайна, создатель концепций и проектов \
        оформления мероприятий всероссийского уровня, создатель \
        собственного дизайн бюро, преподаватель Высшей школы стилистики",
      instagram: false,
      buttons: {
        detail: "/elena-lamonova",
        linkInside: true
      }
    },
    {
      image:
        "/img/living-interior-design-and-decoration/prepodavatel-marina-kostarnova-2.jpg",
      name: "Марина Костарнова (Бельгия)",
      text: (
        <span>
          Практикующий дизайнер и декоратор. Член Между&shy;народ&shy;ного Союза
          ди&shy;зай&shy;неров.
        </span>
      ),
      instagram: false,
      buttons: {
        detail: "/marina_kostarnova",
        linkInside: true
      }
    },
    {
      image: "/img/living-interior-design-and-decoration/varakina.jpg",
      name: "Галина Варакина (Россия)",
      text:
        "Член редакционной коллегии журнала «Культура и цивилизация». Эксперт Российского научного и Российского гуманитарного научного фондов. Автор более 60-ти научных публикаций, в том числе, учебников, монографий, научных статей.",
      instagram: false,
      buttons: {
        detail: "/galina_varakina",
        linkInside: true
      }
    },
    {
      image: "/img/living-interior-design-and-decoration/rotar.jpg",
      name: "Татьяна Ротарь (Россия, Италия)",
      text: "Дизайнер интерьера, преподаватель #ВШСДТ",
      instagram: false,
      buttons: {
        detail: "/tatyana_rotar",
        linkInside: true
      }
    },
    {
      image: "/img/living-interior-design-and-decoration/nenasheva.jpg",
      name: "Эрика Ненашева (Россия)",
      text:
        "Практикующий дизайнер интерьера. Художник. Технический директор собственной студии дизайна интерьеров ArtStreet Design.",
      instagram: false,
      buttons: {
        detail: "/erika_nenasheva",
        linkInside: true
      }
    },
    {
      image: "/img/living-interior-design-and-decoration/islamova.jpg",
      name: "Камила Исламова (Италия)",
      text:
        "Сейчас я являюсь руководителем и главным дизайнером ателье интерьеров Dreamers.",
      instagram: false,
      buttons: {
        detail: "/islamova",
        linkInside: true
      }
    },
    {
      image: "/img/living-interior-design-and-decoration/prohorovich.jpg",
      name: "Елена Прохорович (Россия)",
      text:
        "Автор и куратор курсов Высшей школы стилистики дизайна и технологий. Специалист по fashion-коммуникациям, рекламе и PR, коммуникационный тренер, ТВ-эксперт, предприниматель.",
      instagram: false,
      buttons: {
        detail: "/elena_prohorovich",
        linkInside: true
      }
    }
  ],
  review: {
    head: "Наши преподаватели и выпускники в проектах",
    text: (
      <div
        style={{
          background: "rgb(220,220,220)",
          padding: "1rem",
          maxWidth: 666,
          margin: "3rem auto",
          fontSize: "1rem",
          textAlign: "justify",
          color: "rgb(100,100,100)",
          lineHeight: "1.5rem"
        }}
      >
        La Botanica Magazine (Франция), Faddy Magazine (Италия), Feroce Magazine
        (Великобритания), Imirage Magazine (Канада), F.R.W.L. Magazine (Россия),
        L'affaire Magazine (Великобритания), Surreal Magazine (Германия),
        Scorpio Jin Magazine (США), BeautyMute Magazine (Франция), Voque
        (Италия), Baby Moda Magazine (Россия), LM Magazine (Россия), The Look
        (www), Fashion Time (www). А также на Russian Fashion Week, в Музее
        Моды, в Музее Музыки, на радио и ТВ, на Всероссийском Съезде
        Стилистов-Имиджмейкеров, с корпоративными и частными клиентами.
      </div>
    )
  },
  videos: [
    {
      link: "fOZzI3bKXIU",
      text:
        "Цикл интервью преподавателя Высшей Школы Стилистики, \
      Дизайна и Технологий, дизайнера, имидж — стилиста Татьяны \
      Фоминой @fominafashionstyle. Интервью с выпускницей #ВШСДТ\
      , имидж-стилистом Лидой Акимовой @lididilisa. Тема \
      беседы: доступная мода."
    },
    {
      link: "2_fcNTHeV3g",
      text:
        "Интервью с имидж-стилистом, организатором светских \
      мероприятий, выпускницей ВШСДТ Мариной Федоровой. В чем \
      принципиальная разница между подходом к моде и стилю в \
      России и Германии? Как внешние изменения способствуют смене \
      жизненного курса? На что в первую очередь нужно \
      ориентироваться при подборе своего индивидуального и \
      узнаваемого образа? Обсудим с имидж-стилистом, организатором \
      светских мероприятий, выпускницей ВШСДТ Мариной Федоровой \
      (Германия)."
    },
    {
      link: "NzsSXUy2GMk",
      text:
        "Интервью преподавателя ВШСДТ Татьяны Фоминой с \
      выпускницей Софией Саввиди. Цикл интервью преподавателя \
      Высшей Школы Стилистики, Дизайна и Технологий, дизайнера, \
      имидж-стилиста Татьяны Фоминой @fominafashionstyle. Интервью \
      с выпускницей #ВШСДТ, семейным имидж-стилистом Софией Саввиди\
       @sofi_savvidistyle. Тема беседы: качественное образование \
      стилиста."
    },
    {
      link: "rYKZAsSnC84",
      text:
        "Интервью преподавателя ВШСДТ Татьяны Фоминой с основа\
      телем ВШС в Новосибирске Надеждой Исхаковой. Интервью препода\
      вателя Высшей Школы Стилистики, Дизайна и Технологий, дизайн\
      ера, имидж-стилиста Татьяны Фоминой с международным fashion \
      экспертом, основателем Высшей Школы Стилистики в Новосибирске \
      Надеждой Исхаковой. Тема беседы: карьерный рост для стилистов."
    }
  ],
  notAbout: true,
  notExample: true
};
