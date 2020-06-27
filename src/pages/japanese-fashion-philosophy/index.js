import React from "react";
import { contents } from "./content";
import Pattern from "../../patterns/course/index";
import Cards from "./cards";

function Page(props) {
  return (
    <div>
      <Pattern
        content={contents}
        faqultet="Школа искусств"
        imageHead={contents.imageHead}
        additionally={<Cards />}
      />
    </div>
  );
}

export default Page;
