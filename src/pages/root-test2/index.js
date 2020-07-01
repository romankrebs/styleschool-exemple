import React from "react";
import Helmet from "react-helmet";
import Page from "./page";
import PageGlobal from "../../components/page";

function Root(props) {
  return (
    <div>
      <Helmet>
        <title>Высшая школа стилистики, дизайна и технологий</title>
      </Helmet>
      <PageGlobal>
        <Page />
      </PageGlobal>
    </div>
  );
}

export default Root;
