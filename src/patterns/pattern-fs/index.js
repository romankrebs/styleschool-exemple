import React from "react";
import Helmet from "react-helmet";
import { contents } from "./contents";
import Page from "../../components/page";
import Layout from "./layout";

const Fashion = props => {
  return (
    <div>
      <Helmet>
        <title>{contents.head.head}</title>
        <meta name="keywords" content={"ВШСДТ: " + contents.head.head} />
      </Helmet>
      <Page lable="" lableMobile="#курсыстилистов">
        <Layout />
      </Page>
    </div>
  );
};

export default Fashion;
