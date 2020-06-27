import React from "react";
import Map from "./map";

const content = [
  {
    link: "/schedule/graduate-courses",
    text: "Дипломные курсы"
  },
  {
    link: "/schedule/training",
    text: "Повышение квалификации"
  },
  {
    link: "/schedule/master-classes",
    text: "Лекции и мастер-классы"
  },
  {
    link: "/schedule/courses",
    text: "Краткосрочные курсы"
  }
];

const Man = props => {
  return (
    <div>
      <Map mapLinks={content} index={props.index} inner={props.inner} />
    </div>
  );
};

export default Man;
