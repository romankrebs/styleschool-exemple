import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";
import List from "../../components/list";

export default function Component() {
  return (
    <div>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <Paragraph
            content={[
              <span>
                Ведущая модуля &ndash; Письменская Елена. Основатель
                консалтингового агентства Kids Fashion Retail.
              </span>,
              <span>
                Обучающий модуль создан для предпринимателей, которые хотят
                открыть свой бизнес по франшизе или уже управляют розницей.
              </span>,
              <span>
                Особенное внимание &ndash; практике франчайзинга на
                fashion-рынке России, параметрам выбора и успешного владения
                франшизой.
              </span>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/img/fashion-franchising/ill01.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <h2
            style={{
              fontSize: "1.6em",
              color: "rgb(100,100,100)",
              textAlign: "center",
              fontWeight: 600
            }}
          >
            Правильный выбор франшизы определяет успех бизнеса
          </h2>
          <List
            arr={[
              "Что нужно руководителю и владельцу",
              "Какие есть игроки и предложения",
              "Как выбирать франшизу",
              "Как избежать лишних вложений и на чем нельзя экономить.",
              "Какие бизнес-процессы отстроить должны именно Вы"
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}
