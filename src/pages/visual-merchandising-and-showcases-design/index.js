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
      <Page lable="#индивидуальныйстиль" lableMobile="#индивидуальныйстиль">
        <Layout content={contents} notAbout notExample />
      </Page>
    </div>
  );
};

export default Fashion;
