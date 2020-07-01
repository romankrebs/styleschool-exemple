import React from "react";
import Page from "../../patterns/pattern-educations/page";
import { content } from "./content";

function Education(props) {
  return (
    <Page
      title="Дизайн интерьера, креативные технологии"
      lable="Дизайн интерьера"
      keyword=""
      content={content}
    />
  );
}

export default Education;
