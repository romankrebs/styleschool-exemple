import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Maps from "./map";
import Element from "./contact-element";
// import Recvisites from "./recvisites";
import Contact from "./contacts";
import Page from "../../components/page";
import Phone from "../../components/phone-button";

export default function Contacts() {
  return (
    <div>
      <Helmet>
        <title>Контакты</title>
        <meta name="keywords" content="ВШС: Контакты" />
      </Helmet>
      <Page lable="Контакты" lableMobile="Контакты">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={3}
          style={{ maxWidth: "100%", margin: "0 auto", padding: 20 }}
        >
          <Grid item xs={12} md={6}>
            <Element
              head="По вопросам поступления и образовательных услуг"
              persones={[
                {
                  tel: "+7 495 221-89-35"
                },
                {
                  tel: "8 (800) 550-78-93",
                  p800: true
                },
                {
                  name: (
                    <span>
                      Специалист учебно методического отдела
                      <br />
                      Ольга Коротина
                    </span>
                  ),
                  tel: "+7 916 058-00-29",
                  mobile: true
                }
              ]}
            />
            <Element
              head="По вопросам текущего обучения"
              persones={[
                {
                  name: "Учебно методический отдел",
                  tel: "+7 (499) 110-35-71"
                },
                {
                  subTitle: "Очное обучение",
                  name: "Евгения Пименова",
                  tel: "+7 916 058-00-92",
                  mobile: true
                },
                {
                  subTitle: "Дистанционное обучение",
                  name: "Александра Сырвачева",
                  tel: "+7 916 058-00-13",
                  mobile: true
                }
              ]}
            />
            <Contact />
            {/* <Recvisites /> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ padding: 24, textAlign: "center" }}>
              <img
                src="/img/contacts/fasad.jpg"
                alt="офис ВШСДТ"
                style={{
                  maxWidth: "100%"
                }}
              />
            </div>
            <Maps />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
