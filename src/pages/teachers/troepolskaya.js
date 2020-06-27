import React from "react";
import Footer from "../../components/footer";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Teacher from "../../components/teacher";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import Top from "../../components/topmenu";

export default function Teach() {
  return (
    <div>
      <Helmet>
        <title>Любовь Троепольская: Публичный профиль</title>
        <meta
          name="keywords"
          content="Любовь Троепольская: Публичный профиль"
        />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={12}>
          <Teacher
            head="Любовь Троепольская"
            short="Fashion stylist, fashion project creator"
            image="/img/about/g-troepolskaya.jpg"
            tiles={false}
            content={[
              {
                title: (
                  <span>
                    Профессиональный опыт{" "}
                    <span
                      style={{
                        fontWeight: 400
                      }}
                    >
                      более 7 лет
                    </span>
                  </span>
                ),
                text: (
                  <List
                    arr={[
                      "Высшее Имидж-консалтинг",
                      "Fashion styling",
                      "ВШС",
                      "Дизайнер, модельер Школа В. Зайцева ",
                      "Курсы Style Statement"
                    ]}
                  />
                )
              },
              {
                title: "Вдохновляющая цитата",
                text:
                  "«Тех, кто заставляет нас плакать, утверждая, что с высокой модой вскоре будет покончено, гоните прочь!» (И.С. Лоран)"
              },
              {
                title: "Профессиональное кредо",
                text: "постоянно искать что-то новое."
              },
              {
                title: "Почему стоит начать свою карьеру в этой области?",
                text:
                  "Fashion — это самое творческое направление и огромные возможности для вдохновения."
              },
              {
                title: "Преподавание ВШСДТ",
                text: (
                  <List
                    arr={[
                      "«Как стилисту монетизировать свои услуги»",
                      "мастер-классы",
                      "авторские вебинары"
                    ]}
                  />
                )
              },
              {
                title: "",
                text: (
                  <Paragraph
                    content={[
                      <span>
                        <a href="https://instagram.com/troepolskayal">
                          <img
                            src="/img/green/instagram.svg"
                            alt="@troepolskayal"
                            style={{ height: 24, marginBottom: -6 }}
                          />
                        </a>
                        &nbsp;
                        <a href="https://instagram.com/troepolskayal">
                          @troepolskayal
                        </a>
                      </span>,
                      <span>
                        <a href="https://instagram.com/troepolskaylastyle">
                          <img
                            src="/img/green/instagram.svg"
                            alt="@troepolskaylastyle"
                            style={{ height: 24, marginBottom: -6 }}
                          />
                        </a>
                        &nbsp;
                        <a href="https://instagram.com/troepolskaylastyle">
                          @troepolskaylastyle
                        </a>
                      </span>
                    ]}
                  />
                )
              }
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
