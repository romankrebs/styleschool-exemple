import React from "react";
import Page from "../../patterns/pattern-educations/page";
import { content } from "./content";

function Education(props) {
  return (
    <Page
      title="Индустрия моды, креативные технологии"
      lable="Индустрия моды"
      keyword=""
      content={content}
    />
  );
}

export default Education;
