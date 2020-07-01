import React from "react";
import { Palette, Brush, Pero } from "./icons";
// import { styles } from "../profession-imagemaker-stylist-shopper/styles";
import { styles } from "./styles";
import Paragraph from "../../components/p-array";

export const contents = {
  head: {
    name:
      "Прерафаэлиты: о том, чего не было, не будет и «можно только лишь желать»",
    titleHead: "Курс",
    head: (
      <div>
        <div style={styles.h1}>Прерафаэлиты:</div>
        <div style={{ ...styles.h2, textAlign: "left", paddingTop: 0 }}>
          о том, чего не было, не будет и «можно только лишь желать»
        </div>
      </div>
    ),
    descript:
      "Если у искусства и есть какое-либо назначение, то это помочь человеку осознать себя и научить быть самим собой."
  },
  learningOutcomes: {
    title: "Если Вы хотите", // "Итоги обучения",
    text: [
      {
        text: (
          <span>
            Увидеть, как выглядит синтез прошлого, настоящего и будущего в
            искусстве
          </span>
        ),
        icon: <Palette color="rgb(123,143,87)" size={24} />
      },
      {
        text: (
          <span>
            Разобраться в сути творчества одного из самых неоднозначных
            направлений искусства
          </span>
        ),
        icon: <Brush />
      },
      {
        text: (
          <span>Проследить истоки художественных течений XX и XXI века</span>
        ),
        icon: <Pero />
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
            К. ф. н. Наталья Горских
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
            <b>Доступ сразу ко всем материалам курса после оплаты</b>,
            <span>
              Полная стоимость 3<sup>000</sup>
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
              Доступ сразу ко всем материалам курса, онлан-вебинары, домашнее
              задание и обратная связь по заданию
            </b>,
            <span>
              Полная стоимость 9<sup>900</sup>
              &nbsp;&#8381;
            </span>,
            <span>Доступна рассрочка на 10&nbsp;месяцев</span>
          ]}
        />
      )
    }
  ]
};
