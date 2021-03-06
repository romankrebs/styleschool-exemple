import React from "react";

import Paragraph from "../../components/p-array";

export default function Result(props) {
  var style = {
    h2: {
      fontFamily: props.font ? props.font.title : "Lora",
      fontSize: "1.8em",
      color: "rgb(100,0,0)",
      textAlign: "center",
      fontWeight: 500,
      margin: 8,
      marginLeft: 0,
      padding: "12px 0"
    }
  };

  return (
    <div>
      <h2 style={style.h2}>Результаты обучения</h2>
      <Paragraph
        content={[
          "Программа обучения имиджмейкеров-стилистов дает возможность освоить область имидж-консультирования и стилизации проектов через изучение тех технологий, приемов и принципов, которые позволяют сделать человека адекватным себе, а его существование в социуме – осмысленным и комфортным. Процесс как сложный, так и захватывающий.",
          "Вы научитесь работать с человеком как с личностью, имеющим свой индивидуальный стиль одежды и поведения, как с личностью, которая живет в современности и хочет соответствовать современным критериям красоты и успешности, а также как с личностью, которая имеет определенную профессию и статус.",
          "Как отобразить все эти грани в человеке? Именно эти знания и практические навыки составляют основу образования имиджмейкера-стилиста в Высшей школе стилистики: развитие образного мышления, чутье и технологии создания стиля, анализ моды и модного образа, использование имидж-технологий, помогающих Вашему успеху в профессии и бизнесе.",
          "И, конечно, теперь, после обучения, обладая полнотой знаний и компетенций в индустрии моды, Вы сможете реализовать себя как личность и как профессионала в творческих и коммерческих проектах в индустрии моды."
        ]}
      />
    </div>
  );
}
