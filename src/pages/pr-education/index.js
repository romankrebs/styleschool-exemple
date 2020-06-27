import React from "react";
import Page from "../../patterns/pattern-educations/page";
import { content } from "./content";

function Education(props) {
  return (
    <Page
      title="Репутационные технологии, PR"
      lable="PR"
      keyword=""
      content={content}
    />
  );
}

export default Education;
