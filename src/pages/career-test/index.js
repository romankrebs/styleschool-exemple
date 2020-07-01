import React from "react";
import Helmet from "react-helmet";
// import { contents } from "./contents";
import Page from "../../components/page";
import Layout from "./layout";

const Fashion = props => {
  const title = "Центр карьеры";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={"ВШСДТ: " + title} />
      </Helmet>
      <Page lable={title} lableMobile={title}>
        <Layout />
      </Page>
    </div>
  );
};

export default Fashion;
