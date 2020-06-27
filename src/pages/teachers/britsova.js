import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Teacher from "../../components/teacher";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import H2 from "../../components/head1";
import Page from "../../components/page";

export default function Teach() {
  return (
    <div>
      <Helmet>
        <title>Екатерина Аполлонова: Публичный профиль</title>
        <meta
          name="keywords"
          content="Екатерина Аполлонова: Публичный профиль"
        />
      </Helmet>
      <Page lable="Екатерина Аполлонова" lableMobile="Е. Аполлонова">
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={12}>
            <Teacher
              head="Екатерина Аполлонова"
              short={
                <span>
                  Писатель, преподаватель (письмо, пиар), психотерапевт
                </span>
              }
              image="/img/fashion-styling/apollonova.jpg"
              tiles={false}
              content={[
                {
                  title: "Профессиональный опыт",
                  text:
                    "Журналист (диплом), психотерапевт (сертификат), сексолог (сертификат)"
                },
                {
                  title: "Вдохновляющая цитата",
                  text: "«Если сомневаешься, говори правду» (Марк Твен)"
                },
                {
                  title: "Профессиональное кредо",
                  text: "Получится у всех, кто возьмётся"
                },
                {
                  title: "Почему стоит начать свою карьеру в этой области?",
                  text: (
                    <List
                      arr={[
                        "это интересно",
                        "это приятно",
                        "это несёт радость в жизнь и красоту в мир"
                      ]}
                    />
                  )
                },
                {
                  title: "Преподавание ВШСДТ",
                  text: (
                    <List
                      arr={[
                        <span>
                          <b>Инстаграм</b> (знакомство, инструменты продвижения,
                          развития) — о том, как показать себя в сети, что нужно
                          на первых порах, какие существуют инструменты
                          продвижения, что помогает в пути профессионального
                          развития и контакта с клиентами
                        </span>,
                        <span>
                          <b>Блогинг</b> — о писательстве в сетях: стили, жанры,
                          особенности. Законы, приёмы, условные парадигмы.
                          Ремесло блогера как стиль жизни. Чистая подача мысли.
                          Выразить себя через письмо.
                        </span>
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
                          <a href="https://instagram.com/katyapollon">
                            <img
                              src="/img/green/instagram.svg"
                              alt="@katyapollon"
                              style={{ height: 24, marginBottom: -6 }}
                            />
                          </a>
                          &nbsp;
                          <a href="https://instagram.com/katyapollon">
                            @katyapollon
                          </a>
                        </span>,
                        <a href="http://writerschool.ru/">writerschool.ru</a>
                      ]}
                    />
                  )
                }
              ]}
            />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
