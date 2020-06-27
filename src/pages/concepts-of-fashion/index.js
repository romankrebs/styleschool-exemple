import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Header from "./header";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Teacher from "./teacher";
import Program from "./programma";
import Courses from "./courses";
import Text from "./text";
import Price from "./system-pay";
import Duration from "./duration";
import { HorizontalForm } from "../../components/forms";
import { content } from "./content";
import PageGlobal from "../../components/page";

function Page(props) {
  return (
    <div className="App">
      <Helmet>
        <title>{content.head}</title>
        <meta name="keywords" content={"ВШСДТ: " + content.head} />
      </Helmet>
      {/* <Top faqultet="Теория моды" /> */}
      <PageGlobal lable="Теория моды" lableMobile="Теория моды">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header head={content.head} />
            <Paragraph text={content.about} />
            <Duration value={content.duration} />
            {/* <Dates /> */}
            <Program content={content.programma} />
            <Text text={content.target} total={content.total} />
            <Teacher content={content.author} />
            <Price />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                {/* <h2>Записаться на собеседование</h2> */}
                <Socnet />
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm />
              </Grid>
            </Grid>
            <Courses banners={content.courses} />
          </Grid>
        </Grid>
      </PageGlobal>
      {/* <Footer /> */}
    </div>
  );
}

export default Page;
