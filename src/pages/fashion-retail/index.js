import React from "react";
import Page from "../../patterns/pattern-educations/page";
import { content } from "./content";

function Education(props) {
  return (
    <Page
      title="Fashion retail, технологии продаж"
      lable="Fashion retail"
      keyword=""
      content={content}
    />
  );
}

export default Education;
