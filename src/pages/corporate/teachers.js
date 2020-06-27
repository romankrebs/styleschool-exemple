import React from "react";
import Slider from "../../components/slider-person";
import styles from "../../components/styles-for-types";

const teachers = [
  {
    descript:
      'Художник-модельер, преподаватель и практикующий имидж-консультант.  В Высшей школы стилистики ведет занятия в рамках дисциплины "Профессинальные имидж-технологии".',
    image: "/img/about/tatiyana-fomina.jpg",
    name: "Татьяна Фомина",
    link: "/tatiana_fomina"
  },
  {
    descript:
      "Имидж-консультант, профайлер, автор программ по управлению впечатлением в бизнесе и межличностных коммуникациях",
    image: "/img/about/liana-bahova.jpg",
    name: "Лиана Бахова",
    link: "/liana_bahova"
  },
  {
    descript:
      "Историк моды, визуальный мерчендайзер, витринист, член творческого союза дизайнеров и имиджмейкеров, преподаватель ВШС.",
    image: "/img/about/ruslan-migranov.jpg",
    name: "Руслан Мигранов",
    link: "/ruslan_migranov"
  },
  {
    descript:
      "Специалист по рекламе и PR, коммуникационный тренер, предприниматель.",
    image: "/img/international-communications/prohorovich.jpg",
    name: "Елена Прохорович",
    link: false
  },
  {
    descript:
      "Визуальный мерчендайзер, имидж-консультант, преподаватель Высшей школы стилистики.",
    image: "/img/teachers/hlestova-small.jpg",
    name: "Маргарита Хлестова",
    link: "/margarita-hlestova"
  }
];

const Teachers = function(props) {
  return (
    <div>
      <h2 style={props.garamond ? styles.h2garamond : styles.h2}>
        Тренинги проводят ведущие преподаватели ВШСДТ
      </h2>
      <Slider teachers={teachers} style={{}} />
    </div>
  );
};

export default Teachers;
