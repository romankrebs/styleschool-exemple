import React from "react";
import Helmet from "react-helmet";
import Head from "./head-image";
import Block from "./block";
import Info from "./info";
import Programma from "./programma";
import { HorizontalForm } from "../../components/forms";
import Socnet from "../../components/want-to-know";
import { contents } from "./contents";
import { styles } from "./styles";
import Table from "./table";
import Papers from "../../components/papers";
import Page from "../../components/page";

const Fashion = props => {
  return (
    <div>
      <Helmet>
        <title>{contents.head.name}</title>
        <meta name="keywords" content={"ВШСДТ: " + contents.head.name} />
      </Helmet>
      <Page lable={contents.head.name} lableMobile="">
        <Head
          titleHead={contents.head.titleHead}
          head={contents.head.head}
          descript={contents.head.descript}
          image="/img/preraphaelites/preraphaelites.jpg"
        />
        <Block
          title={contents.learningOutcomes.title}
          text={<Info text={contents.learningOutcomes.text} size={4} small />}
        />
        <div style={{ paddingTop: "3.2rem" }}>
          <Info
            text={contents.info2}
            size={3}
            small={4}
            styleBkg="rgb(223,243,187)"
          />
        </div>
        <Papers content={contents.formates} size={5} height="12rem" />
        <Programma />
        <Table head="Автор курса" content={contents.teachers} size={12} />
        {/* <Pay /> */}
        <h2 style={styles.h2}>
          Получите квалифицированную консультацию специалиста учебного отдела
        </h2>
        <HorizontalForm target="send_form_fashion_styling_complete" />
        <Socnet target="fashion_styling_complete" noHead />
        <div style={styles.space} />
      </Page>
    </div>
  );
};

export default Fashion;
