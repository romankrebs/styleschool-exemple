import React from "react";
import { styles } from "../../patterns/course/styles";
import Paragraph from "../../components/p-array";
import List from "../../components/list";

export const contents = {
  head: {
    name: "Философия японской моды: творцы, идеи, образы",
    titleHead: "Курс",
    head: (
      <div>
        <div style={styles.h1}>Философия японской моды:</div>
        <div style={{ ...styles.h2, textAlign: "left", paddingTop: 0 }}>
          творцы, идеи, образы
        </div>
      </div>
    ),
    descript:
      "Не бывает устья без истоков. Любое начало относительно, а любой конец — лишь начало чего-то нового."
  },
  imageHead: "/img/japanese-fashion-philosophy/ill01.jpg",
  learningOutcomes: {
    title: "Если Вы хотите", // "Итоги обучения",
    text: [
      {
        text: (
          <span>
            Разобраться, в чем уникальность японского стилеообразования
          </span>
        ),
        icon: <img src="/img/green/star.svg" alt="" style={{ height: 24 }} />
      },
      {
        text: (
          <span>Увидеть отличие японского и европейского подхода к моде</span>
        ),
        icon: <img src="/img/green/star.svg" alt="" style={{ height: 24 }} />
      },
      {
        text: (
          <span>Проследить истоки стиля современных японских дизайнеров</span>
        ),
        icon: <img src="/img/green/star.svg" alt="" style={{ height: 24 }} />
      }
    ]
  },
  info2: [
    {
      text: <span>Онлайн</span>,
      icon: (
        <img
          src="/img/green/check-bold.svg"
          alt=""
          style={{ height: 24, marginTop: "-1rem" }}
        />
      )
    },
    {
      text: <span>10 лекций</span>,
      icon: (
        <img
          src="/img/green/check-bold.svg"
          alt=""
          style={{ height: 24, marginTop: "-1rem" }}
        />
      )
    },
    {
      text: "Рассрочка без Переплаты",
      icon: (
        <img
          src="/img/green/check-bold.svg"
          alt=""
          style={{ height: 24, marginTop: "-1rem" }}
        />
      )
    }
  ],
  teachers: [
    {
      head: "",
      text: (
        <div style={styles.pCenter}>
          <img
            src="/img/about/natalya-gorskih.jpg"
            alt="Наталья Горских"
            style={styles.image}
          />
          <p style={{ ...styles.p, textAlign: "center" }}>
            К.филол.наук, преподаватель, специалист в области современных
            коммуникаций посредством визуального образа: художественного,
            модного, социального.
          </p>
        </div>
      )
    }
  ],
  formates: [
    {
      title: "Видео",
      text: (
        <Paragraph
          style={{ ...styles.p, ...styles.pCenter }}
          content={[
            <b>Доступ сразу ко всем видео урокам после оплаты</b>,
            <span>
              Полная стоимость 5<sup>000</sup>
              &nbsp;&#8381;
            </span>,
            <span>Доступна рассрочка на 10&nbsp;месяцев</span>
          ]}
        />
      )
    },
    {
      title: "Онлайн",
      text: (
        <Paragraph
          style={{ ...styles.p, ...styles.pCenter }}
          content={[
            <b>
              Доступ сразу ко всем материалам курса домашнее задание и обратная
              связь по заданию
            </b>,
            <span>
              Полная стоимость 9<sup>900</sup>
              &nbsp;&#8381;
            </span>,
            <span>Доступна рассрочка на 10&nbsp;месяцев</span>
          ]}
        />
      )
    },
    {
      title: "Повышение квалификации",
      text: (
        <Paragraph
          style={{ ...styles.p, ...styles.pCenter }}
          content={[
            <b>
              Доступ сразу ко всем материалам курса, домашнее задание и обратная
              связь по заданию, индивидуальные консультации
            </b>,
            <span>
              Полная стоимость 19
              <sup>900</sup>
              &nbsp;&#8381;
            </span>,
            <span>Доступна рассрочка на 10&nbsp;месяцев</span>
          ]}
        />
      )
    }
  ],
  string: (
    <p style={{ ...styles.p, ...styles.pCenter }}>
      Стоимость одной лекции — 600 &#8381;
    </p>
  ),
  about: {
    text: (
      <div>
        <p style={styles.p}>
          Японская мода давно стала брендом, который аудитория мирового рынка
          модной индустрии связывает с понятиями «авангард», «деконструктивизм»,
          «художественная революция». И каждый год новые коллекции Issey Miyake,
          Yohji Yamamoto, Comme des Garçons, Junya Watanabe, Undercover и др.
          современных японских брендов оправдывают ожидания своих поклонников и
          fashion-экспертов, подтверждают свой особый статус и символическое
          место в мировой системе моды.
        </p>
        <p style={styles.p}>
          В чем уникальность японского подхода к формообразованию, что дает
          сочетание архаики, ремесленных практик с инновациями и технологиями,
          почему будущее одежды — это ее прошлое, чем японский подход к
          деконструкции отличается от европейского, что объединяет и что
          различает принципы стилеообразования Рей Кавакубо, Иссея Мияке, Йоджи
          Ямомото, молодых японских брендов — основные, но не все вопросы, что
          будут обсуждаться в цикле лекций.
        </p>
      </div>
    )
  },
  programma: {
    title: "Кратко о лекциях",
    content: (
      <List
        arr={[
          <span>
            <b>Первая лекция</b> цикла посвящена основе современного японского
            подхода к дизайну костюма — культуре кимоно как традиционного
            отношения к телу и к одежде, как символической взаимосвязи
            содержания и основных элементов формы: крой, цвет и рисунок, центр
            композиции.
          </span>,
          <span>
            <b>Вторая лекция</b> цикла посвящена основным чертам традиционной
            японской философии и эстетики, поскольку без понимания того, что
            такое красота и гармония в японской художественной системе, каковы
            основные принципы организации пространства (в интерьере, костюме)
            трудно правильно расставить ориентиры в анализе современных
            коллекций японских дизайнеров.
          </span>,
          <span>
            <b>Третья лекция</b> цикла посвящена ключевым характеристикам
            японского fashion-сознания 70-х и 80-х&nbsp;гг.&nbsp;XXв. Особое
            внимание будет уделено методу деконструктивизма как важнейшему
            принципу проектирования костюма, имеющего непосредственную связь с
            архитектурой деконструктивизма. Для пояснения этой аналогии будут
            рассмотрены суть и принципы деконструктивизма в искусстве и дизайне.
          </span>,
          <span>
            <b>Четвертая лекция</b> цикла продолжает разговор о принципах и
            приемах деконструктивизма как метода проектирования современного
            костюма на примере японских дизайнеров. Кроме того, будут даны
            ключевые характеристики японского fashion-сознания 90-хгг.XX века.
            Итогом лекции станет начало разговора о философском и художественном
            аспекте творчества Yohji Yamamoto.
          </span>,
          <span>
            <b>Пятая лекция</b> цикла посвящена философским и художественным
            аспектам творчества Yohji Yamamoto, с одной стороны, объединяющих
            его с японским и европейским подходом к созданию концепт-образов, с
            другой стороны — выделяющих его из общей системы, отображением его
            особого, узнаваемого авторского почерка.
          </span>,
          <span>
            <b>Шестая лекция</b> цикла посвящена особенностям
            художественно-проективного метода творчества Issey Miyake: поиск
            многофункциональной ткани, эксперименты с преобразованием
            двухмерности, «метаморфозы» традиционных ручных техник, авторское
            решение проблемы соединения концепт-идей haute couture и
            prêt-a-porter.
          </span>,
          <span>
            <b>Седьмая лекция</b> цикла продолжает разговор об особенностях
            художественно-проективного метода творчества Issey Miyake: признаки
            концептуальности бренда, связь тела, одежды и архитектуры,
            применение новых технологий в создании ткани, проект «A Piece of
            Cloth» и концепция одежды будущего.
          </span>,
          <span>
            <b>Восьмая лекция</b> цикла посвящена Rei Kawakubo как
            представительнице интеллектуального дизайна, во многом определившей
            коды современной моды и оказавшей влияние даже на те бренды, что
            работают в иной плоскости, чем концептуальный дизайн. Творчество Rei
            Kawakubo будет рассмотрено через оппозицию и диалог с европейской
            традицией проектирования одежды и взаимоотношения одежды тела, через
            концептуальный подход, через социокультурные авторские декларации,
            переведенные на язык костюма.
          </span>,
          <span>
            <b>Девятая лекция</b> цикла — продолжение обсуждения творчества Rei
            Kawakubo как представительнице интеллектуального дизайна, во многом
            определившей коды современной моды. Творчество Rei Kawakubo будет
            рассмотрено через оппозицию и диалог с европейской традицией
            проектирования одежды и взаимоотношения одежды тела, через
            концептуальный подход, через социокультурные авторские декларации,
            переведенные на язык костюма.
          </span>,
          <span>
            <b>Десятая лекция</b> цикла посвящена содержательным и проективным
            принципам дизайна костюма молодых японских брендов — Undercover,
            Anrealage, Attachment, Final Houm как развитие, диалог и полемика с
            традиционными принципами японского и европейского дизайна, как
            визуальная демонстрация событий настоящего и прогноза на будущее.
          </span>
        ]}
        style={{
          ...styles.p,
          borderBottom: "1px solid rgb(200,200,200)",
          padding: "1em 0"
        }}
      />
    )
  }
};

/*
import React from "react";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import { HorizontalForm } from "../../components/forms";
import { styles } from "../profession-imagemaker-stylist-shopper/styles";
import Socnets from "../../components/want-to-know";
import ProCourses from "../root/cards-courses";

const icons = {
  size: 30,
  color: "rgb(123,143,87)"
};

const pathImages = "/img/japanese-fashion-philosophy/";

const title = "Философия японской моды: творцы, идеи, образы";

export const content = {
  title: title,
  faqultet: "Мода и стиль",
  illustration: {
    image: pathImages + "ill01.jpg",
    imageComment: false,
    text: (
      <div>
        <h1 style={styles.h1}>Философия японской моды: творцы, идеи, образы</h1>
        <p style={styles.p}>
          Японская мода давно стала брендом, который аудитория мирового рынка
          модной индустрии связывает с понятиями «авангард», «деконструктивизм»,
          «художественная революция». И каждый год новые коллекции Issey Miyake,
          Yohji Yamamoto, Comme des Garçons, Junya Watanabe, Undercover и др.
          современных японских брендов оправдывают ожидания своих поклонников и
          fashion-экспертов, подтверждают свой особый статус и символическое
          место в мировой системе моды.
        </p>
        <p style={styles.p}>
          В чем уникальность японского подхода к формообразованию, что дает
          сочетание архаики, ремесленных практик с инновациями и технологиями,
          почему будущее одежды — это ее прошлое, чем японский подход к
          деконструкции отличается от европейского, что объединяет и что
          различает принципы стилеообразования Рей Кавакубо, Иссея Мияке, Йоджи
          Ямомото, молодых японских брендов — основные, но не все вопросы, что
          будут обсуждаться в цикле лекций.
        </p>
      </div>
    )
  },
  info: [
    {
      title: "10 Лекций",
      image: "/img/green/file-video.svg"
    },
    {
      title: "Online",
      image: "/img/green/monitor-dashboard.svg"
    }
  ],
  formates: [
    {
      title: "Видео",
      text: (
        <Paragraph
          style={{ ...styles.p, ...styles.pCenter }}
          content={[
            <b>Доступ сразу ко всем видео урокам после оплаты</b>,
            <span>
              Полная стоимость 5<sup>000</sup>
              &nbsp;&#8381;
            </span>,
            <span>Доступна рассрочка на 10&nbsp;месяцев</span>
          ]}
        />
      )
    },
    {
      title: "Онлайн",
      text: (
        <Paragraph
          style={{ ...styles.p, ...styles.pCenter }}
          content={[
            <b>
              Доступ сразу ко всем материалам курса домашнее задание и обратная
              связь по заданию
            </b>,
            <span>
              Полная стоимость 9<sup>900</sup>
              &nbsp;&#8381;
            </span>,
            <span>Доступна рассрочка на 10&nbsp;месяцев</span>
          ]}
        />
      )
    },
    {
      title: "Повышение квалификации",
      text: (
        <Paragraph
          style={{ ...styles.p, ...styles.pCenter }}
          content={[
            <b>
              Доступ сразу ко всем материалам курса, домашнее задание и обратная
              связь по заданию, индивидуальные консультации
            </b>,
            <span>
              Полная стоимость 19
              <sup>900</sup>
              &nbsp;&#8381;
            </span>,
            <span>Доступна рассрочка на 10&nbsp;месяцев</span>
          ]}
        />
      )
    }
  ],
  string: (
    <p style={{ ...styles.p, ...styles.pCenter }}>
      Стоимость одной лекции — 600 &#8381;
    </p>
  ),
  teacher: {
    title: (
      <span>
        Автор курса
        <br />
        Наталья Горских
      </span>
    ),
    text:
      "К.филол.наук, преподаватель, специалист в области современных коммуникаций посредством визуального образа: художественного, модного, социального.",
    image: "/img/conceptualfashion/teacher.jpg",
    link: "/natalya_gorskyh"
  },
  // inputFree: "Участие для всех желающих",
  // present: {
  //   title: (
  //     <span>
  //       <Present size={"1em"} color={icons.color} />
  //       &ensp; Подарок участникам мероприятия
  //     </span>
  //   ),
  //   text: "Индивидуальная консультация по стилю Online со студентами ВШСДТ",
  //   icon: <Present size={icons.size} color={icons.color} />
  //   // image: pathImages + "present.jpg"
  // },
  forma: {
    title:
      "Зарегистрируйтесь, за день до мероприятия мы пришлем Вам напоминание",
    content: <HorizontalForm />
  },
  programma: {
    title: "Кратко о лекциях",
    content: (
      <List
        arr={[
          <span>
            <b>Первая лекция</b> цикла посвящена основе современного японского
            подхода к дизайну костюма — культуре кимоно как традиционного
            отношения к телу и к одежде, как символической взаимосвязи
            содержания и основных элементов формы: крой, цвет и рисунок, центр
            композиции.
          </span>,
          <span>
            <b>Вторая лекция</b> цикла посвящена основным чертам традиционной
            японской философии и эстетики, поскольку без понимания того, что
            такое красота и гармония в японской художественной системе, каковы
            основные принципы организации пространства (в интерьере, костюме)
            трудно правильно расставить ориентиры в анализе современных
            коллекций японских дизайнеров.
          </span>,
          <span>
            <b>Третья лекция</b> цикла посвящена ключевым характеристикам
            японского fashion-сознания 70-х и 80-х&nbsp;гг.&nbsp;XXв. Особое
            внимание будет уделено методу деконструктивизма как важнейшему
            принципу проектирования костюма, имеющего непосредственную связь с
            архитектурой деконструктивизма. Для пояснения этой аналогии будут
            рассмотрены суть и принципы деконструктивизма в искусстве и дизайне.
          </span>,
          <span>
            <b>Четвертая лекция</b> цикла продолжает разговор о принципах и
            приемах деконструктивизма как метода проектирования современного
            костюма на примере японских дизайнеров. Кроме того, будут даны
            ключевые характеристики японского fashion-сознания 90-хгг.XX века.
            Итогом лекции станет начало разговора о философском и художественном
            аспекте творчества Yohji Yamamoto.
          </span>,
          <span>
            <b>Пятая лекция</b> цикла посвящена философским и художественным
            аспектам творчества Yohji Yamamoto, с одной стороны, объединяющих
            его с японским и европейским подходом к созданию концепт-образов, с
            другой стороны — выделяющих его из общей системы, отображением его
            особого, узнаваемого авторского почерка.
          </span>,
          <span>
            <b>Шестая лекция</b> цикла посвящена особенностям
            художественно-проективного метода творчества Issey Miyake: поиск
            многофункциональной ткани, эксперименты с преобразованием
            двухмерности, «метаморфозы» традиционных ручных техник, авторское
            решение проблемы соединения концепт-идей haute couture и
            prêt-a-porter.
          </span>,
          <span>
            <b>Седьмая лекция</b> цикла продолжает разговор об особенностях
            художественно-проективного метода творчества Issey Miyake: признаки
            концептуальности бренда, связь тела, одежды и архитектуры,
            применение новых технологий в создании ткани, проект «A Piece of
            Cloth» и концепция одежды будущего.
          </span>,
          <span>
            <b>Восьмая лекция</b> цикла посвящена Rei Kawakubo как
            представительнице интеллектуального дизайна, во многом определившей
            коды современной моды и оказавшей влияние даже на те бренды, что
            работают в иной плоскости, чем концептуальный дизайн. Творчество Rei
            Kawakubo будет рассмотрено через оппозицию и диалог с европейской
            традицией проектирования одежды и взаимоотношения одежды тела, через
            концептуальный подход, через социокультурные авторские декларации,
            переведенные на язык костюма.
          </span>,
          <span>
            <b>Девятая лекция</b> цикла — продолжение обсуждения творчества Rei
            Kawakubo как представительнице интеллектуального дизайна, во многом
            определившей коды современной моды. Творчество Rei Kawakubo будет
            рассмотрено через оппозицию и диалог с европейской традицией
            проектирования одежды и взаимоотношения одежды тела, через
            концептуальный подход, через социокультурные авторские декларации,
            переведенные на язык костюма.
          </span>,
          <span>
            <b>Десятая лекция</b> цикла посвящена содержательным и проективным
            принципам дизайна костюма молодых японских брендов — Undercover,
            Anrealage, Attachment, Final Houm как развитие, диалог и полемика с
            традиционными принципами японского и европейского дизайна, как
            визуальная демонстрация событий настоящего и прогноза на будущее.
          </span>
        ]}
        style={{
          ...styles.p,
          borderBottom: "1px solid rgb(200,200,200)",
          padding: "1em 0"
        }}
      />
    )
  },
  questions: {
    title: "Есть вопросы — пишите",
    content: <Socnets noHead />
  },
  events: {
    title: "Вас может заинтересовать",
    content: (
      <div>
        {/* <OpenLectures styleHead={styles.h2} /> * /}
        <ProCourses styleHead={styles.h2} />
      </div>
    )
  }
};

*/
