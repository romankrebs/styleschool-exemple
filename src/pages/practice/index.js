import React from "react";
import Page from "../../patterns/pattern-educations/page";
import { content } from "./content";

function Education(props) {
  return (
    <Page
      title="Практики и стажировки"
      lable="Практики и стажировки"
      keyword=""
      content={content}
    />
  );
}

export default Education;
