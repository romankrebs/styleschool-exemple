import React from "react";
import Cot from "./cot";
import About from "./about-component";
// import Paragraph from "../../components/p-array";

const content = [
  {
    image: "/img/graduates/vetrova.jpg",
    name: "Преподаватель",
    text: "Текст преподавателя",
    full: "Полный текст"
  }
];

const Teachers = props => {
  return (
    <div>
      <Cot
        noHead={true}
        // textButton="Преподаватели про обучение"
        open={true}
        text={content.map((el, key) => (
          <About
            name={el.name}
            image={el.image}
            text={el.text}
            textFull={el.full}
            font={{
              title: props.font.title,
              text: props.font.text,
              size: props.font.size
            }}
          />
        ))}
      />
    </div>
  );
};

export default Teachers;
