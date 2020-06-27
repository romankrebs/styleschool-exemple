import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import List from "../../components/list";

export default function Targets() {
  return (
    <div>
      <H2 content="Наши цели" />
      <Grid container justify="center" style={{ padding: 20 }}>
        <Grid item xs={12} md={4} style={{ padding: 20 }}>
          <img
            src="/img/about/combo.jpg"
            alt=""
            style={{
              width: "100%"
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <List
            arr={[
              <span>
                Подготовить специалистов, чьи знания и профессиональные навыки
                соответствуют требованиям современного мира
              </span>,
              <span>
                Дать возможность применить лучшим выпускникам Школы свои знания
                и практические навыки посредством работы с реальными как
                частными, так и с корпоративными клиентами
              </span>,
              <span>
                Реализовать не только необходимые спецдисциплины в той или иной
                области, но и актуальные общекультурные дисциплины, без которых
                нельзя стать успешным и современным профессионалом
              </span>,
              <span>
                Предоставить возможность выбора как программ и курсов, так и
                способа их освоения: принцип модульного обучения предполагает
                свободу и вариативность в освоении тех знаний и навыков, которые
                с Вашей точки зрения, Вам необходимы
              </span>,
              <span>
                Привлекать интересных и грамотных профессионалов-практиков,
                которые не только читают лекции в аудитории, но главное &mdash;
                готовят обучающихся к практике в условиях российского рынка
              </span>
            ]}
            num="none"
            style={{
              background:
                "url(/img/about/arrow-right-circle.svg) top 5px left 0/ 18px 18px no-repeat",
              padding: "0 10px 10px 28px",
              marginTop: 0,
              lineHeight: "1.5em"
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
