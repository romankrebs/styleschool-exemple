import React from "react";
import Helmet from "react-helmet";
// import { style } from "./styles";
// import { withStyles } from "@material-ui/styles";
import Layout from "./layout";
import Page from "../../components/page";

function PageEducation(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="keywords" content={"ВШСДТ: " + props.keyword} />
      </Helmet>
      <Page lable={props.lable} lableMobile={props.lable}>
        <Layout content={props.content} />
      </Page>
    </div>
  );
}

export default PageEducation;
