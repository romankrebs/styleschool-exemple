import React from "react";
import List from "../../components/list";
import { Link } from "react-router-dom";
import Paragraph from "../../components/p-array";
import Img from "../../patterns/pattern-fs/img";
import Forma from "../../components/credit-form";

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
  titlePage: "Имидж-консалтинг и управление впечатлением",
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
        Имидж-консалтинг: индивидуальный и деловой стиль
      </div>
    ),
    headAfterDescript:
      "Курс о профессии. Применение знаний в карьере и бизнесе уже после 3 месяца обучения",
    descript: [
      "Очно, дистанционно",
      "Диплом установленного государством образца",
      "6 месяцев, 254 академических часа",
      "Рассрочка, налоговый вычет",
      "От 9900 руб. в месяц"
    ],
    text: "",
    imageComment: false,
    imageSource: "/img/profashion/bkg.jpg",
    styleImage: {
      maxHeight: 334
    },
    styleImageBox: {
      marginTop: "2rem",
      textAlign: "right",
      background: "rgb(237,236,227)",
      padding: 0
    }
  },
  text1:
    "Если Вам важно личное развитие, если Вы готовы к изменениям, если Вы ищете больше, чем просто курсы по смене стиля в одежде. Вы сможете раскрыть свой потенциал. Сделайте важный шаг к воплощению мечты в реальность. На курсе Вы получите новые знания и навыки, и научитесь пользоваться имидж-технологиями как инструментом. В бизнесе и карьере. После обучения Вы будете убедительно пользоваться всем, что дала Вам природа.",
  tags1: (
    <span>
      <a href="#career">
        <span style={{ color: "rgb(180,180,180)" }}>#чтоговорят&ensp;</span>
      </a>{" "}
      <a href="#profession">
        <span style={{ color: "rgb(180,180,180)" }}>#имиджиуспех&ensp;</span>
      </a>{" "}
      <a href="#formats">
        <span style={{ color: "rgb(180,180,180)" }}>#какучиться&ensp;</span>
      </a>
    </span>
  ),
  screen2: {
    dates: [
      {
        d: 21,
        t: "мая",
        c: "дистанционно"
      },
      {
        d: 10,
        t: "июня",
        c: <span>&ensp;очно</span>
      }
    ],
    quote: {
      text: "«Всё, что нужно для серьёзного успеха – это быть уникальным»",
      author: "Стинг"
    },
    text: (
      <List
        arr={[
          "Откройте мир через формы гармонии и красоты",
          "Используйте свою индивидуальность в достижении целей",
          "Используйте имидж-технологии в работе с клиентами, партнерами",
          "Если нужно, сделайте имидж-консультирование своей профессией"
        ]}
      />
    ),
    video: "rYKZAsSnC84"
  },
  text2: {
    title: "Ищете идеальное образование?",
    text: (
      <Paragraph
        content={[
          "Вы можете выбрать интересующие Вас темы и форматы их освоения. Здесь Вы найдете как формат классического образования — в составе группы и единой программы, так и возможность индивидуальной траектории обучения.",
          "Мы не даем готовые решения, мы вне шаблонов и стандартов. Изучение стилистики — это Ваш личный поиск в мире культуры и красоты, где каждый находит свои собственные ответы. Свой путь. Свой стиль жизни. Своя стилевая стратегия, дающая возможность делиться этими знаниями с окружающими и получать от этого удовлетворение и прибыль.",
          "Мы — Автономная некоммерческая организация Дополнительного профессионального образования «Высшая школа стилистики, дизайна и технологий», одна из ведущих образовательных площадок в индустрии"
        ]}
        style={styles.p}
      />
    )
  },
  aboutProfeshion: {
    title: "Об имидже, консалтинге, успехе и самореализации",
    short:
      "Сегодня часто и много говорят о необходимости выработать лидерские качества и уметь управлять своими страхами и эмоциями, чтобы стать убедительным, что нужно уметь самовыражаться и управлять впечатлением, чтобы добиться признания и достичь успеха.…",
    detail: [
      <Paragraph
        style={styles.p}
        content={[
          "В условиях «креативной» экономики и общества «впечатлений», где у каждого есть возможность  индивидуальной самопрезентации, нужно сделать так, чтобы тебя не только услышали, но и признали.",
          "А как это сделать? Сегодня есть выбор способов самопрезентации: кто-то с разной степенью громкости и выразительности заявляето себе в социальных сетях, кто-то осознанно подходит к разработке привлекательного и убедительного внешнего образа, используя возможности моды и искусства, кто-то работает над созданием личного бренда, преимуществом которого является доверие и лояльность со стороны общества,  кто-то — развивается в профессии и получает желаемый результат, а кто-то использует многое из всего перечисленного.",
          "Для кого-то важно признание своих творческих способностей и умения вдохновлять, кому-то важно признание близкого круга, а кому-то — признание профессионального круга, подтверждение своей ценности для организации. Современное внешнее выражение — такой же показатель личных целей и предпочтений: есть приверженцы всего яркого, контрастного, необычного, оригинального, есть сторонники традиций и консерватизма, есть интеллектуальный дендизм, есть стремление подчеркнуть демократизм, есть представители нормкорна и «антимодники», есть те, кому в той или иной степени «все равно, что вы про меня думаете».",
          "Вопрос выбора индивидуальной стилевой стратегии — это ответ на вопрос: почему я выгляжу и одеваюсь так, а не иначе, соответствует ли мой стиль общения внешней самопрезентации и что еще нужно сделать для достижения возможного лучшего результата, в чем причина моей коммуникативной некомпетентности и как достичь эффективности общения, почему я принимаю именно такие решения и приводят ли они к желаемому результату и пр.",
          "И как только вы начинаете задумываться о себе и пытаетесь ответить на вопрос «Кто я?», начинается процесс осознанного формирования индивидуального стиля, а желание реализовать себя в профессии, достичь  успеха в бизнесе, получить социальное признание становится вполне достижимым результатом.",
          "Пройдите обучение по программе «Имидж-консалтинг и управление впечатлением» и Вы научитесь работать с собой и с окружающими:",
          <List
            arr={[
              "как с личностью, имеющей свой индивидуальный стиль одежды и поведения",
              "как с личностью, которая живет в современности и хочет соответствовать актуальным критериям красоты и успешности",
              "как с личностью, которая имеет определенную профессию и статус"
            ]}
            style={styles.p}
          />,
          "Эти профессиональные навыки помогут реализовываться профессионально, формировать карьерную траекторию и соответствовать статусу современного успешного специалиста, бизнесмена, консультанта."
        ]}
      />
    ]
  },
  principes: [
    "Компиляция актуальных практических знаний как базовой системы в создании индивидуального и делового стиля женщин и мужчин, с учетом социального ожидания и психологических особенностей людей.",
    "Изучение осознанных подходов в разработке привлекательного и убедительного внешнего образа, используя возможности моды и искусства.",
    "Развитие творческих способностей и умения вдохновлять. Реализация личных целей и предпочтений, подтверждение ценности для окружающих и общества в целом."
  ],
  programma: [
    <List
      style={styles.p}
      num="none"
      olStyle={{ marginLeft: 0, paddingLeft: 0 }}
      arr={[
        <b>Дисциплины и темы занятий</b>,
        "Колористика и подбор индивидуальной цветовой палитры",
        "Психология формы и силуэтов, типологии фигур",
        "Возможности и способы визуальной коррекции фигуры",
        "Изучение основных групп современных стилей как системы транслирования необходимого впечатления",
        "Изучение аксессуаров, головных уборов, обуви, правил и способов их подбора с учетом fashiontrends",
        "Профессиональный глоссарий, изучение профессиональной лексики и терминологии",
        "Концепция индивидуального стиля, смешение стилевых направлений",
        "Мужская стилистика, ее особенности, практика применения и современные тренды",
        "Типы современного гардероба, формирование гардеробных капсул",
        "Теория и практика шопинга, в том числе on-line шопинг",
        "Имиджевые элементы и принципы: дресс-коды, этикет",
        "Психологические особенности разработки имиджа и стиля",
        "Имиджевое восприятие и инструменты влияния",
        "Управление впечатлением, современная система профайлинга и психотипирования",
        "Особенности своей профессиональной презентации в Instagram",
        "Алгоритмы работы с клиентами, правила эффективных коммуникаций",
        "Создание и презентация STYLE BOOK"
      ]}
    />,
    <h2
      style={{
        ...styles.h2,
        fontFamily: "PT Sans Narrow",
        textAlign: "left"
      }}
    >
      В процессе обучения:
    </h2>,
    <List
      style={styles.p}
      arr={[
        "Практика в шоурумах и торговых пространствах",
        "Практика подбора цвета, кроя, силуэта, пропорций в одежде",
        "Практика создания комплектов в разных стилях",
        "Практика выбора аксессуаров, прически, макияжа",
        "Практика создания релукингов «до и после»",
        "Навыки эффективных коммуникаций",
        "Базовые принципы в создании личного бренда",
        "Для лучших студентов — участие в проектах",
        "Мастер-классы с приглашенными экспертами",
        "Знакомство с будущими партнерами и единомышленниками",
        "Творческая атмосфера"
      ]}
      olStyle={{ marginLeft: 0, paddingLeft: 0 }}
      num="none"
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
        "Креатив — сформированный индивидуальный стиль",
        "Имидж-консалтинг как дополнительная профессия, которую можно сделать основной",
        "Новые партнеры, команда, клиенты",
        "План развития личного бренда"
      ]}
      num="none"
    />
  ],
  variants: {
    head: "Варианты",
    content: [
      {
        head: "Дипломная программа",
        text: (
          <List
            arr={[
              "Обучение по программе «Имидж-консалтинг и управление впечатлением» реализуется на основании Лицензии на образовательную деятельность и соответствует требованиям, предъявляемым к программам профессиональной переподготовки",
              "Программа реализуется в очном, онлайн и дистанционном форматах",
              <span>
                Длительность программы:
                <br />
                254 академических часа, 6 месяцев
              </span>,
              "Группы: дневные, вечерние, выходного дня",
              <span>
                График:
                <br />
                2-3 занятия в неделю + самостоятельная работа
              </span>,
              "Требования к уровню знаний поступающих: нет",
              "Требования в процессе обучения: обязательно выполнение д/з, тестов, экзамен.",
              "Выпускники других курсов/школ в области индустрии моды принимаются с зачетом соответствующих дисциплин (определяется на собеседовании)"
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
              "Индивидуальная траектория. Формат дает возможность выбора интересующих дисциплин/модулей с полноценным вовлечением в образовательный процесс по выбранным дисциплинам/модулям с получением удостоверения о повышении квалификации (для дисциплин от 16 академ. часов)"
            ]}
            style={{ ...styles.p, textAlign: "right" }}
            olStyle={{ padding: 0, margin: 0 }}
            num="none"
          />
        )
      },
      {
        head: "Альтернативные программы обучения (два диплома)",
        text: (
          <List
            arr={[
              <span>
                Имидж-консалтинг и Fashion styling (профессиональная
                переподготовка), 11 месяцев
                <Link to="/second-degree-imagemaker">&emsp;&gt;&gt;&gt;</Link>
              </span>,
              <span>
                Fashion styling (профессиональная переподготовка),
                6&nbsp;месяцев
                <Link to="/fashion-styling">&emsp;&gt;&gt;&gt;</Link>
              </span>,
              <span>
                Стили в одежде. Принципы подбора (интенсив), 3 месяца
                <Link to="/image-style">&nbsp;&gt;&gt;&gt;</Link>
              </span>
            ]}
            style={{ ...styles.p, textAlign: "right" }}
            olStyle={{ padding: 0, margin: 0 }}
            num="none"
          />
        )
      }
    ]
  },
  afterEducation: {
    head: "Карьера, бизнес, профессия",
    videos: ["fOZzI3bKXIU", "2_fcNTHeV3g", "NzsSXUy2GMk"]
  },
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
          "Это очное обучение с частичным применением дистанционных технологий, в которых более 80% занятий проходят в непосредственном контакте с преподавателями и экспертами. Такой формат актуален для тех, кому привычен четкий график занятий, у кого есть возможность посещать занятия по этому графику, кто планирует уделять обучению максимальное количество времени. Практики на проектах и мастер-классы с экспертами в большей степени доступны именно в этом формате. В данный формат включено создание продающего лендинга и оформление соцсетей в едином стиле."
      },
      {
        title: "Гибкий график (онлайн обучение)",
        icon: <img src="/img/green/earth.svg" alt="" style={{ height: 48 }} />,
        text:
          "Это обучение, где основное внимание уделяется живому общению с преподавателями онлайн в сочетании с изучением учебного материала в записи. Такой формат прекрасно заменяет очное обучение, когда в силу занятости или удаленности необходимо гибко подходить к планированию времени и его длительности для изучения отдельных дисциплин. На основе этого формата можно эффективно подбирать индивидуальную траекторию обучения. В процессе обучения предусмотрены защиты проектных и дипломных работ онлайн. В данный формат включено создание продающего лендинга и оформление соцсетей в едином стиле."
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
          "Традиционный и привычный многим формат обучения, в котором более 80% учебного материала обучающиеся могут изучать в записи. В этом формате на все вопросы  по тем или иным темам отвечают наставники — опытные практикующие выпускники. Предусмотрена обратная связь и консультации с основными преподавателями курса. По итогам обучения экзамены проходят также в дистанционном формате. В данном формате предусмотрены консультации по созданию лендинга и другим каналам продвижения. Классический дистанционный формат оптимален с позиции сочетания гибкого графика, обратной связи в процессе и, главное, стоимости обучения."
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
                        20
                        <sup>000</sup>
                         рублей
                      </b>{" "}
                      — 2й и последующие ежемесячные платежи
                    </span>,
                    <span>
                      первый платеж — 25
                      <sup>000</sup>
                       рублей
                    </span>,
                    <span>
                      полная стоимость — 125
                      <sup>000</sup>
                       рублей
                    </span>
                  ]}
                />
              </div>,
              <div>
                Вариант оплаты: банковская рассрочка без переплаты на 10 месяцев
                <List
                  style={stylesPrice.text}
                  arr={[
                    <span>
                      <b>
                        12
                        <sup>500</sup> рублей
                      </b>{" "}
                      ежемесячный платеж
                    </span>,
                    <span>
                      итого 10 платежей в сумме — 125
                      <sup>000</sup>
                       рублей
                    </span>,
                    "возможно оформление кредита на более длительный срок на условиях банка партнера"
                  ]}
                />
                <Forma
                  sum="125000.00"
                  name="Имидж-консалтинг, курс профессиональной переподготовки (Дипломная программа, максимальный формат)"
                  test={false}
                  yellow
                />
              </div>,
              <span>
                Вариант оплаты: единовременно со скидкой
                <br />
                При единовременной оплате обучения предоставляется
                скидка&nbsp;10%
              </span>,
              "Важно: по запросу мы предоставляем документы для налогового вычета"
            ]}
          />
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
                      — 2й и последующие ежемесячные платежи
                    </span>,
                    <span>
                      первый платеж — 25
                      <sup>000</sup>
                       рублей
                    </span>,
                    <span>
                      полная стоимость — 99
                      <sup>000</sup>
                       рублей
                    </span>
                  ]}
                />
              </div>,
              <div>
                Вариант оплаты: банковская рассрочка без переплаты на 10 месяцев
                <List
                  style={stylesPrice.text}
                  arr={[
                    <span>
                      <b>
                        9<sup>000</sup> рублей
                      </b>{" "}
                      ежемесячный платеж
                    </span>,
                    <span>
                      итого 10 платежей в сумме — 99
                      <sup>000</sup>
                       рублей
                    </span>,
                    "возможно оформление кредита на более длительный срок на условиях банка партнера"
                  ]}
                />
                <Forma
                  sum="99000.00"
                  name="Имидж-консалтинг, курс профессиональной переподготовки (Дипломная программа, гибкий формат)"
                  test={false}
                  yellow
                />
              </div>,
              <span>
                Вариант оплаты: единовременно со скидкой
                <br />
                При единовременной оплате обучения предоставляется
                скидка&nbsp;10%
              </span>,
              "Важно: по запросу мы предоставляем документы для налогового вычета"
            ]}
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
                      полная стоимость — 69
                      <sup>400</sup>
                       рублей
                    </span>
                  ]}
                />
              </div>,
              <div>
                Вариант оплаты: банковская рассрочка без переплаты на 10 месяцев
                <List
                  style={stylesPrice.text}
                  arr={[
                    <span>
                      <b>
                        6<sup>940</sup> рублей
                      </b>{" "}
                      ежемесячный платеж
                    </span>,
                    <span>
                      итого 10 платежей в сумме — 69
                      <sup>400</sup>
                       рублей
                    </span>,
                    "возможно оформление кредита на более длительный срок на условиях банка партнера"
                  ]}
                />
                <Forma
                  sum="69400.00"
                  name="Имидж-консультант, курс профессиональной переподготовки (Дипломная программа, эконом формат)"
                  test={false}
                  yellow
                />
              </div>,
              <span>
                Вариант оплаты: единовременно со скидкой
                <br />
                При единовременной оплате обучения предоставляется
                скидка&nbsp;10%
              </span>,
              "Важно: по запросу мы предоставляем документы для налогового вычета"
            ]}
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
      image: "/img/profashion/teacher03.jpg",
      name: "Татьяна Фомина",
      text: (
        <List
          arr={[
            "Имидж-стилист, дизайнер",
            "Куратор курса и старший преподаватель дисциплин  имиджа и стилистики в Высшей школе стилистики дизайна и технологий",
            "Спикер «3-го Международного Съезда Стилистов»",
            "Автор издания «Книга Стиля», психологической программы «Психология красоты», ведущая передачи о стиле и моде на TВ, лауреат и призер конкурса дизайнеров «Новая Россия 21 век»"
          ]}
        />
      ),
      instagram: false,
      buttons: {
        detail: "/tatiana_fomina",
        linkInside: true,
        video: "8s_7e-79VUI",
        videoText: "видео "
      }
    },
    {
      image: "/img/about/marina-bonetskaya.jpg",
      name: "Марина Бонецкая",
      text:
        "Художник-дизайнер, доцент, автор курсов по созданию корпоративного и персонального имиджа и стиля, член Международной Организации «Союз дизайнеров».",
      instagram: false,
      buttons: {
        detail: "/marina_bonetskaya",
        linkInside: true,
        video: "IUMo8Cp92Kk"
      }
    },
    {
      image: "/img/about/liana-bahova.jpg",
      name: "Лиана Бахова",
      text:
        "Имидж-консультант, профайлер, автор программ по управлению впечатлением в бизнесе и межличностных коммуникациях",
      instagram: false,
      buttons: {
        detail: "/liana_bahova",
        linkInside: true,
        video: "m7lYgO78wNM",
        videoText: "видео"
      }
    },
    {
      image: "/img/about/svetlana-kononets.jpg",
      name: "Светлана Кононец",
      text:
        "Практикующий имидж-стилист, дизайнер одежды, преподаватель Санкт-Петербургской школы телевидения, преподаватель Высшей школы стилистики.",
      instagram: false,
      buttons: {
        detail: "/svetlana_kononets",
        linkInside: true,
        video: "a1T_ln5fDlE"
      }
    },
    {
      image: "/img/about/ruslan-migranov.jpg",
      name: "Руслан Мигранов",
      text:
        "Ведущий лекций по теме «История моды XX века» в рамках программы профессиональной переподготовки «Современные технологии в работе имиджмейкера: персональный и корпоративный стиль». Преподаватель курса «Визуальный мерчендайзинг и витринистика», ведущий отдельных мастер-классов по моде и витринистике, а также выездного арт-тура в Венецию «Мода и искусство Венеции»",
      instagram: false,
      buttons: {
        detail: "/ruslan_migranov",
        linkInside: true,
        video: "KqPi8CZl6_Y",
        videoText: "видео"
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
  examples: [
    {
      image: "/img/fs-test/kazakova-01.jpg",
      description: [
        "Concept, produce, style: Elena Kazakova",
        "Photo: Elena Slyusar",
        "Model: Valeria Solovieva"
      ]
    },
    {
      image: "/img/fs-test/kazakova-02.jpg",
      description: [
        "Concept, produce, style: Elena Kazakova",
        "Photo: Elena Slyusar",
        "Model: Valeria Solovieva"
      ]
    },
    {
      image: "/img/fs-test/kazakova-03.jpg",
      description: [
        "Concept, produce, style: Elena Kazakova",
        "Photo: Elena Slyusar",
        "Model: Begymay Karybekova"
      ]
    },
    {
      image: "/img/fs-test/kazakova-04.jpg",
      description: [
        "Concept, produce, style: Elena Kazakova",
        "Photo: Elena Slyusar",
        "Model: Begymay Karybekova"
      ]
    },
    {
      image: "/img/fs-test/kolomytsyna-01.jpg",
      description: [
        "Blind Side",
        "Wardrobe Stylist: Evelina Kolomytsyna",
        "Photographer: Denis Nemyachenko",
        "Model: Victoria Nikitina"
      ]
    },
    {
      image: "/img/fs-test/kolomytsyna-02.jpg",
      description: ["Faddy magazine", "Style: Evelina Kolomytsyna"]
    },
    {
      image: "/img/fs-test/kolomytsyna-03.jpg",
      description: ["la botanica", "Style: Evelina Kolomytsyna"]
    },
    {
      image: "/img/fs-test/merfi-01.jpg",
      description: ["Style: Светлана Мерфи"]
    },
    {
      image: "/img/fs-test/merfi-02.jpg",
      description: ["Style: Светлана Мерфи"]
    },
    {
      image: "/img/fs-test/merfi-03.jpg",
      description: ["Style: Светлана Мерфи"]
    },
    {
      image: "/img/fs-test/patrysheva.jpg",
      description: ["Style: Марина Патрышева"]
    },
    {
      image: "/img/fs-test/troepolskaya-01.jpg",
      description: [
        "Журнал «Пульс-Prime»",
        "Art end Beaty.",
        "Md: @_lia_alexy",
        "Mua: @vitovskih] & @nastya19cat",
        "Style: Любовь Троепольская",
        "Pf: @platonova_alena"
      ]
    },
    {
      image: "/img/fs-test/troepolskaya-02.jpg",
      description: [
        "Noir Desire.",
        "Style: Art Nouveau.",
        "For Picton Magazine",
        "Нью Йорк",
        "Photo: преподаватель курса @solaris_foto",
        "Model: преподаватель курса @evmaltseva",
        "Style: преподаватель курса @troepolskayalstyle"
      ]
    },
    {
      image: "/img/fs-test/troepolskaya-03.jpg",
      description: [
        "Noir Desire.",
        "Style: Art Nouveau.",
        "For Picton Magazine",
        "Нью Йорк",
        "Photo: преподаватель курса @solaris_foto",
        "Model: преподаватель курса @evmaltseva",
        "Style: преподаватель курса @troepolskayalstyle"
      ]
    }
  ],
  reviewImgs: [
    <Img src="/img/root-test2/review-01.jpg" />,
    <Img src="/img/root-test2/review-02.jpg" />,
    <Img src="/img/root-test2/review-03.jpg" />,
    <Img src="/img/root-test2/review-04.jpg" />,
    <Img src="/img/root-test2/review-05.jpg" />,
    <Img src="/img/root-test2/review-06.jpg" />,
    <Img src="/img/root-test2/review-07.jpg" />,
    <Img src="/img/root-test2/review-08.jpg" />,
    <Img src="/img/root-test2/review-09.jpg" />
  ],
  videos: [
    {
      link: "fOZzI3bKXIU",
      text:
        "Цикл интервью преподавателя Высшей Школы Стилистики, Дизайна и Технологий, дизайнера, имидж — стилиста Татьяны Фоминой @fominafashionstyle. Интервью с выпускницей #ВШСДТ, имидж-стилистом Лидой Акимовой @lididilisa. Тема беседы: доступная мода."
    },
    {
      link: "2_fcNTHeV3g",
      text:
        "Интервью с имидж-стилистом, организатором светских мероприятий, выпускницей ВШСДТ Мариной Федоровой. В чем принципиальная разница между подходом к моде и стилю в России и Германии? Как внешние изменения способствуют смене жизненного курса? На что в первую очередь нужно ориентироваться при подборе своего индивидуального и узнаваемого образа? Обсудим с имидж-стилистом, организатором светских мероприятий, выпускницей ВШСДТ Мариной Федоровой (Германия)."
    },
    {
      link: "NzsSXUy2GMk",
      text:
        "Интервью преподавателя ВШСДТ Татьяны Фоминой с выпускницей Софией Саввиди. Цикл интервью преподавателя Высшей Школы Стилистики, Дизайна и Технологий, дизайнера, имидж-стилиста Татьяны Фоминой @fominafashionstyle. Интервью с выпускницей #ВШСДТ, семейным имидж-стилистом Софией Саввиди@sofi_savvidistyle. Тема беседы: качественное образование стилиста."
    },
    {
      link: "rYKZAsSnC84",
      text:
        "Интервью преподавателя ВШСДТ Татьяны Фоминой с основателем ВШС в Новосибирске Надеждой Исхаковой. Интервью преподавателя Высшей Школы Стилистики, Дизайна и Технологий, дизайнера, имидж-стилиста Татьяны Фоминой с международным fashion экспертом, основателем Высшей Школы Стилистики в Новосибирске Надеждой Исхаковой. Тема беседы: карьерный рост для стилистов."
    }
  ],
  videosAfter: [
    "0s4k1IH3Pik",
    "9Ns4tVxzE_8",
    "VG3HCLBilGc",
    "fR9JZaYZLOU",
    "gZeWO85gha0",
    "npJ2B4syBMk"
  ],
  notAbout: true,
  notExample: true
};
