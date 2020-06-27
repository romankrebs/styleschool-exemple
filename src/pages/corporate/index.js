import React from "react";
import Page from "./page";
import List from "../../components/list";
import styles from "../../components/styles-for-types";

const Corporate = function(props) {
  return (
    <Page
      title={"Корпоративные проекты"}
      faqultet={"Корпоративные проекты"}
      head={{
        text: (
          <span style={{ fontFamily: "inherit" }}>
            Корпоративные
            <br />
            проекты
          </span>
        ),
        image: "linear-gradient(rgba(255,0,0,.3), rgba(0,255,0,.3))",
        descript: "Тренинги, консалтинг, мероприятия «под ключ»",
        colorText: "rgb(80,80,80)",
        colorBlock: "rgba(0,0,0,0.6)"
      }}
      info={[
        {
          image: "img/corporate/butique.jpg",
          text: "Fashion пространства"
        },
        {
          image: "img/corporate/art-space.jpg",
          text: "Art пространства"
        },
        {
          image: "img/corporate/auditory.jpg",
          text: "Лектории"
        },
        {
          image: "img/corporate/baza.jpg",
          text: "Выездные мероприятия"
        }
      ]}
      infoSize={3}
      // short={[ ]}
      orientations={[
        {
          link: "#one",
          text: (
            <span>
              Ориентация:
              <br />
              праздничные имидж-мероприятия
            </span>
          )
        },
        {
          link: "#two",
          text: (
            <span>
              Ориентация:
              <br />
              для руководителей и ключевого персонала
            </span>
          )
        },
        {
          link: "#tree",
          text: (
            <span>
              Ориентация:
              <br />
              продажи и мотивация персонала
            </span>
          )
        }
      ]}
      orientationSize={4}
      descript={{
        text: (
          <List
            arr={[
              "Продолжительность тренингов / мероприятий: от 3 часов до 2-х дней",
              "Возможно проведение корпоративного обучения во всех городах России",
              "Возможно проведение корпоративного обучения в формате вебинара",
              "Программа обучения, формат, условия и стоимость обсуждаются индивидуально",
              "Подбираем удобные площадки, соответствующие концепции тренинга / мероприятия",
              "Проведение под ключ, включая организацию развлекательной программы",
              "Стоимость проектов от 100 тыс.руб."
            ]}
            style={styles.p}
          />
        ),
        image: "/img/interior-design/illustration.jpg"
      }}
      // dates="25 января"
      // avance="2000"
      // price="5000"
      // nameOfCredit="Интерьерный дизайн. Интенсив"
      // linkBilling="https://billing.styleschool.ru/event/mTaknRNNduXrh7g7Q"
      // condition
      programmaName="Возможные темы тренингов"
      programma={[
        {
          link: "one",
          head:
            "Тренинги и мастер-классы для сотрудников компании на праздники, корпоративные мероприятия",
          text: (
            <List
              arr={[
                "Создание идеального образа на основе модных трендов",
                "Стилевые типажи; формирование индивидуального стиля",
                "История домов моды, легенды моды XX века"
              ]}
              style={styles.p}
            />
          )
        },
        {
          link: "two",
          head:
            "Корпоративные тренинги для руководителей, топ-менеджеров, продающих подразделений",
          text: (
            <List
              arr={[
                "Профайлинг. Психокоммуникативные технологии «считывния человека» и прогнозирования его поведения. Управление впечатлением в бизнес среде",
                "Деловой стиль. Имидж успешного предпринимателя",
                "Деловой стиль. Имидж деловой женщины"
              ]}
              style={styles.p}
            />
          )
        },
        {
          link: "tree",
          head: "Тренинги для fashion-retail",
          text: (
            <List
              arr={[
                "Повышение квалификации персонала с позиции стилистических методик",
                "Нематериальная мотивация персонала",
                "Технологии мерчендайзинга ",
                "Эффективные реклама"
              ]}
              style={styles.p}
            />
          )
        }
      ]}
      formaTitle="Узнать подробнее"
    />
  );
};

export default Corporate;
