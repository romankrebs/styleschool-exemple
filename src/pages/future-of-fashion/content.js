import React from "react";
import List from "../../components/list";
import { Clock, PointInMap, Present } from "./icons";
import { dates, DateToString } from "../shedule/dates";
import { HorizontalForm } from "../../components/forms";
import { styles } from "./styles-2";
import Socnets from "../../components/want-to-know";
import ProCourses from "../root/cards-courses";
// import OpenLectures from "../master-class/open-lectures";

const icons = {
  size: 30,
  color: "rgb(123,143,87)"
};

const pathImages = "/img/future-of-fashion/";

const title = "«Бедная» мода: прошедшее будущее";

export const content = {
  title: title,
  faqultet: "Мода и стиль",
  illustration: {
    image: pathImages + "ill01.jpg",
    imageComment: false,
    text: (
      <div>
        <h1 style={styles.h1}>«Бедная» мода: прошедшее будущее </h1>
        <p style={styles.p}>
          Лекция о том, что кроется за понятием «бедная» мода, временное ли это
          явление или постоянный тренд будущего, что обретает модный образ,
          отказываясь от «игры по правилам», означает ли «бедность» форм
          «бедность» содержания, в чем суть послания одного из самых одиозных
          современных дизайнеров — Maurizio Altieri и почему его послание так
          напоминает послание творцов итальянского искусства arte povera
        </p>
      </div>
    )
  },
  info: [
    {
      title: (
        <span>
          Когда
          <br />
          Часть I
        </span>
      ),
      text: (
        <span>
          {DateToString(dates.masterClasses.poorFashion1)} года в&nbsp;11:00 по
          МСК
        </span>
      ),
      icon: <Clock size={icons.size} color={icons.color} />
    },
    {
      title: (
        <span>
          Когда
          <br />
          Часть II
        </span>
      ),
      text: (
        <span>
          {DateToString(dates.masterClasses.poorFashion2)} года в&nbsp;10:00 по
          МСК
        </span>
      ),
      icon: <Clock size={icons.size} color={icons.color} />
    },
    {
      title: "Место проведения",
      text: "Online",
      icon: <PointInMap size={icons.size} color={icons.color} />
    }
    // {
    //   title: "Ведущая",
    //   text: "Наталья Горских",
    //   icon: <Teacher size={icons.size} color={icons.color} />
    // }
  ],
  teacher: {
    title: (
      <span>
        Ведущая
        <br />
        Наталья Горских
      </span>
    ),
    text:
      "К.филол.наук, преподаватель, специалист в области современных коммуникаций посредством визуального образа: художественного, модного, социального.",
    image: "/img/conceptualfashion/teacher.jpg",
    link: "/natalya_gorskyh"
  },
  inputFree: "Участие для всех желающих",
  present: {
    title: (
      <span>
        <Present size={"1em"} color={icons.color} />
        &ensp; Подарок участникам мероприятия
      </span>
    ),
    text: "Индивидуальная консультация по стилю Online со студентами ВШСДТ",
    icon: <Present size={icons.size} color={icons.color} />
    // image: pathImages + "present.jpg"
  },
  forma: {
    title:
      "Зарегистрируйтесь, за день до мероприятия мы пришлем Вам напоминание",
    content: <HorizontalForm />
  },
  programma: {
    title: "Кратко о лекции",
    content: (
      <List
        arr={[
          "В 60-е годы XX века высокое искусство подверглось испытанию. В классических музеях появились произведения, материалом которых стали предметы «улицы», самые ничтожные и малые свидетели жизни каждого дня человека. Этот процесс изменил как искусство, так и повседневность. Такой же процесс — проникновение «улицы», гоп-стиля, нарочито бедных тканей и состарившихся фактур, non-fashion, концепта «черного квадрата» в костюме и т.п. подверг испытанию и изменил традиционную систему моды, провозгласил иные модные стандарты и типы «культурного тела» человека постиндустриальной эпохи.",
          "Лекция о том, что кроется за понятием «бедная» мода, временное ли это явление или постоянный тренд будущего, что обретает модный образ, отказываясь от «игры по правилам», означает ли «бедность» форм «бедность» содержания, в чем суть послания одного из самых одиозных современных дизайнеров — Maurizio Altieri и почему его послание так напоминает послание творцов итальянского искусства arte povera"
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
        {/* <OpenLectures styleHead={styles.h2} /> */}
        <ProCourses styleHead={styles.h2} />
      </div>
    )
  }
};
