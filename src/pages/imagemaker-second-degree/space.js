import React from "react";

import Space from "../../components/space";

let styles = {
  text: {
    font: "400 1em",
    color: "rgb(100,100,100)",
    textAlign: "justify",
    margin: 0,
    padding: 12
  }
};

export default function SpaceComponent(props) {
  const content = {
    epigraph: "В ЛЮБОЕ ВРЕМЯ, В ЛЮБОМ МЕСТЕ",
    text: (
      <div>
        <p style={styles.text}>
          Все обучающиеся после регистрации на сайте получают доступ в личный
          кабинет с текущей информацией по обучению, доступом к материалам
          лекций. В удобное время вы сможете просматривать занятия и выполнять
          домашние задания. Главное &ndash; соблюдать график учебного процесса в
          целом. Вы сможете оценить работы других студентов и задать вопрос
          куратору курса, а также воспользоваться поддержкой специалистов
          учебного отдела.
        </p>
        <p style={styles.text}>
          Кроме того, вы получаете доступ в закрытую группу, где сможете
          общаться с одногруппниками и набираться профессионального опыта.
        </p>
      </div>
    ),
    head: "Ваше персональное пространство на сайте",
    image: "url(img/laptop.png) left center/auto 500px no-repeat"
  };
  return (
    <div style={{ padding: "40px 0" }}>
      <Space
        epigraph={content.epigraph}
        head={content.head}
        image={content.image}
        text={content.text}
        font={props.font}
      />
    </div>
  );
}
