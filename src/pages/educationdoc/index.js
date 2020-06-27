import React from "react";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Layout from "./layout";

const Fashion = props => {
  let contents = {
    titlePage: "Порядок заключения договора и зачисления на обучение"
  };

  return (
    <div>
      <Helmet>
        <title>{contents.titlePage}</title>
        <meta name="keywords" content={"ВШСДТ: " + contents.titlePage} />
      </Helmet>
      <Page lable="#договорнаобучение" lableMobile="#договорнаобучение">
        <Layout />
      </Page>
    </div>
  );
};

export default Fashion;
