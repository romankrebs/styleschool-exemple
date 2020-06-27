import React from "react";
import Paragraph from "../../components/paragraph";
// import List from "../../components/list";
// import Slider from "../../components/slider-images";

export default function Component(props) {
  const content = {
    left: props.text,
    // <div>
    //   <p
    //     style={{
    //       textAlign: "left",
    //       paddingTop: 0,
    //       marginTop: 0,
    //       lineHeight: "1.5em"
    //     }}
    //   >
    //     Курс предназначен тем, кто интересуется современными процессами
    //     развития моды, кто хотел бы понять их причину и суть, а также
    //     применить полученные системные знания в своей творческой и
    //     профессиональной практике.
    //   </p>
    //   <p style={{ textAlign: "left", lineHeight: "1.5em" }}>
    //     Курс обучения дает представление об основных трендах современной
    //     индустрии моды, стремительно меняющейся в постиндустриальную эпоху,
    //     связанную с торжеством технологий, креативной индивидуальности и
    //     относительности ценностей и границ.
    //   </p>
    //   <List
    //     arr={[
    //       <a href="#dates">Ближайшие даты</a>,
    //       <a href="#programma">Программа курса</a>,
    //       <a href="#price">Информация о стоимости</a>
    //     ]}
    //     num="none"
    //     style={{ lineHeight: "1.5em" }}
    //   />
    // </div>
    //),
    right: (
      <img
        src="/img/conceptualfashion/960/fullscreen.jpg"
        alt=""
        style={{ maxWidth: "100%", position: "sticky", top: 1 }}
      />
    )
  };
  return <Paragraph content={content} />;
}
