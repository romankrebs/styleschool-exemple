import React from "react";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Layout from "./layout";

const Fashion = props => {
  let contents = {
    titlePage:
      "Особенности реализации программ дистанционного (онлайн) обучения"
  };

  return (
    <div>
      <Helmet>
        <title>{contents.titlePage}</title>
        <meta name="keywords" content={"ВШСДТ: " + contents.titlePage} />
      </Helmet>
      <Page lable="#дистанционноеобучение" lableMobile="#дистанционноеобучение">
        <Layout />
      </Page>
    </div>
  );
};

export default Fashion;
