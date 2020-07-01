import React from "react";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import Banner1 from "../../components/banner-imagemaker";
import Banner2 from "../../components/banner-personal-brand";
import Banner3 from "../../components/banner-modern-moda-style2";

var styles = {
  paragraph: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 0,
    paddingBottom: "1em",
    lineHeight: "1.4em"
  },
  list: {
    lineHeight: "1.5em"
  }
};

export var content = {
  head: "Социальные и художественные стратегии моды.",
  about: (
    <Paragraph
      content={[
        "Курс обучения дает представление об основных стратегиях развития индустрии моды эпохи торжества технологий и относительности границ, изменившей подход дизайнеров к проектированию костюма и к созданию визуальных образов, вынужденных работать на стыке социальных, маркетинговых и художественных стратегий, соединять бывшее и актуальность, коллективную мифологию с индивидуальной."
      ]}
      style={styles.paragraph}
    />
  ),
  duration: "32 занятия (96 астр.ч.), 3 месяца",
  programma: [
    {
      title: "I. Основные стратегии современной моды",
      list: (
        <List
          arr={[
            "Мода как форма современного искусства: причины, специфика проявления, способ воздействия.",
            "Стратегии коммуникации — автор-образ-получатель-обратная связь.",
            <React.Fragment>
              Художественные стратегии постмодерна:
              <List
                arr={[
                  "цитирование, ирония и игровой подход",
                  "принципы деконструкции в массовой моде"
                ]}
                style={styles.list}
              />
            </React.Fragment>,
            "Художественная и экономическая суть взаимоотношений искусства и моды.",
            "Модный образ — доступное искусство и поэзия коммерции. Способы презентации тела. Возможное будущее.",
            "Индустрия как система. Что пришло вместо централизованной парижской системы. Место и роль дизайнера в новой системе.",
            "Дома высокой моды. Кого сегодня к ним относят. Столицы моды.",
            <React.Fragment>
              Социальные стратегии:
              <List
                arr={[
                  "демократизация моды, стирание границ между элитарным и массовым",
                  "коммуникация равных с равными, люкс и улица",
                  "уход диктата дизайнера и тенденций",
                  "ретроспективность и футурологизм",
                  "глокализация, уродливое и отказ от моды",
                  "философия эко-тренда и развитие рынка «мусульманской» моды",
                  "интернет-технологии и изменившаяся суть показов."
                ]}
                style={styles.list}
              />
            </React.Fragment>
          ]}
          num="decimal"
          style={styles.list}
        />
      )
    },
    {
      title: "II. Концептуальная мода: стык прошлого, настоящего и будущего",
      list: (
        <List
          arr={[
            <React.Fragment>
              Суть концептуальной моды: о чем, как и для кого
              <List
                arr={[
                  "источники концептуального подхода к костюму",
                  "идеи, а не вещи",
                  "костюм — текст и контекст",
                  "«креативный индивидуализм», коммерческий и некоммерческий посыл",
                  "идея движущейся формы и инновационные технологии: материалы и показы",
                  "концептуальный дизайн сфер от-кутюр и прет-а-порте",
                  "костюмный энвайронмент, wearable art"
                ]}
                style={styles.list}
              />
            </React.Fragment>,
            "Деконструктивизм как одна из форм проектирования концептуального костюма. Суть метода в искусстве и дизайне.",
            "Способы презентации коллекций на Неделях моды. Перформанс, его виды.",
            <React.Fragment>
              Мировые школы концептуального дизайна:
              <List
                arr={[
                  "бельгийская школа",
                  "датские и нидерландские бренды концептуального дизайна",
                  "японский концептуализм и деконструктивизм"
                ]}
                style={styles.list}
              />
            </React.Fragment>,
            <React.Fragment>
              Создатель нового «языка» моды — Мартин Маржела
              <List
                arr={[
                  "практичное искусство, одежда об одежде",
                  "аноним и яркая личность, авангардист и ремесленник",
                  "«коды» и концепты, определившие современную моду",
                  "знаковые стилистические решения и последователи в «упрощенной» форме"
                ]}
                style={styles.list}
              />
            </React.Fragment>
          ]}
          num="decimal"
          style={styles.list}
        />
      )
    },
    {
      title: "III. Философия японской моды",
      list: (
        <List
          arr={[
            "Традиционный костюм и современное «fashion сознание».",
            "Знаково-символическая сущность кимоно.",
            "Основные черты японской философии и эстетики как основа отношения к проектированию современного костюма.",
            "Отношение к пространству в дизайне интерьера и в костюме.",
            "Эволюция японской моды и принципов проектирования: от 70-х до настоящего времени.",
            "Метод деконструкции. Отличие от европейского подхода.",
            "Творчество Йоджи Ямамото, Иссей Мияке, Рей Кавакубо: общая философия и яркая индивидуальность творческого подхода.",
            "Художественные, социальные и проектные принципы молодых японских брендов."
          ]}
          num="decimal"
          style={styles.list}
        />
      )
    }
  ],
  total:
    "Итог курса — творческая работа: анализ самостоятельно выбранной коллекции",
  author: {
    title: (
      <span>
        Автор курса
        <br />
        Наталья Горских
      </span>
    ),
    text:
      "К.филол.наук, преподаватель, специалист в области современных коммуникаций посредством визуального образа: художественного, модного, социального.",
    image: "/img/conceptualfashion/teacher.jpg"
  },
  target: (
    <Paragraph
      content={[
        // "Цель курса – обозначить основные стратегии развития индустрии моды эпохи постмодерна, изменившей подход дизайнеров к проектированию костюма и созданию визуальных образов, вынужденных работать на стыке социальных, маркетинговых и художественных стратегий, соединять историю с актуальной реальностью, коллективную мифологию с индивидуальной.",
        // "Основные вопросы, которые сегодня обсуждают действующие лица мировой индустрии моды, станут вопросами курса: что такое мода и одежда сегодня, кто создает моду — профессионалы или дилетанты, чьи образы транслируют дизайнеры, кому предназначены высказывания моды, что оказывает воздействие на аудиторию — оригинальность, хулиганство и «вау-эффект» или ориентация на вечное, классику и высокое мастерство.",
        // "Особое внимание будет уделено понятию «концептуальная» мода, ее месту в коммерческой моде, ее структурным признакам, связанных с концептуальным искусством 2-й половины XX века: как относится к одежде, которая не принимается и не используется большинством, каковы признаки концептуальности бренда и какова роль личности дизайнера, зачем концептуальной моде Марсель Дюшан, микробиология, ресайклинг, инновационный текстиль и технологии."
        "Основные вопросы курса: что такое мода в мире креативной индивидуальности, сетевых коммуникаций и продаж, новых форм социальных свобод и запретов, кто создает моду — профессионалы или дилетанты, чьи образы транслируют дизайнеры, кому предназначены высказывания моды и что оказывает воздействие на аудиторию.",
        "Особое внимание будет уделено понятию «концептуальная» мода, ее месту в коммерческой моде, ее структурным признакам, связанных с концептуальным искусством 2-й половины XX века: как относится к одежде, которая не принимается и не используется большинством, каковы признаки концептуальности бренда и какова роль личности дизайнера, зачем концептуальной моде Марсель Дюшан, микробиология, ресайклинг и инновационные технологии."
      ]}
      style={styles.paragraph}
    />
  ),
  price: {
    title: "Учитесь от 3000 руб. в месяц в рассрочку на 10 месяцев",
    list: (
      <List
        arr={[
          "Полная стоимость обучения: 30000 рублей",
          "Как платить: Вы вносите аванс, бронируете место, начинаете учится; полную оплату курса необходимо внести до 3 занятия.",
          "Доступна банковская рассрочка на 10 месяцев: 3000 рублей в месяц. (без переплаты)",
          "Доступна скидка 10% при внесении оплаты за курс в течение 48 часов с момента бронирования места"
        ]}
        style={styles.list}
      />
    )
  },
  courses: [<Banner1 />, <Banner2 />, <Banner3 />]
};