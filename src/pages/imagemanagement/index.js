import React from "react";
import Helmet from "react-helmet";
import { contents } from "./contents";
import Page from "../../components/page";
import Layout from "../../patterns/pattern-fs/layout";

const Fashion = props => {
  return (
    <div>
      <Helmet>
        <title>{contents.titlePage}</title>
        <meta name="keywords" content={"ВШСДТ: " + contents.titlePage} />
      </Helmet>
      <Page lable="Имидж-консультант" lableMobile="Имидж-консультант">
        <Layout content={contents} notExample notAbout vAfter />
      </Page>
    </div>
  );
};

export default Fashion;
