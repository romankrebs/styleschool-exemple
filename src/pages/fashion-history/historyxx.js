import React from "react";
import { Grid, Hidden, Paper } from "@material-ui/core";

import H2 from "../../components/head1";

export default function History(props) {
  var styles = {
    head: {
      fontFamily: props.font ? props.font : "inherit",
      fontSize: "1.4em",
      textAlign: "left",
      fontWeight: 700,
      color: "rgb(123,143,87)",
      //textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
      padding: "5px 20px 10px"
    },
    text: {
      fontFamily: props.font ? props.font : "inherit",
      fontSize: "1em",
      textAlign: "left",
      fontWeight: 400,
      color: "rgb(60,60,60)",
      padding: "5px 20px 10px"
    },
    xx: {
      background:
        "url(/img/history/bg1.jpg) top left -160px/cover no-repeat, rgba(250,244,232,1)",
      minHeight: 400
    },
    f20: {
      background: "url(/img/history/bg2.jpg) top left/cover no-repeat",
      minHeight: 400
    },
    f3050: {
      background: "url(/img/history/bg3.jpg) top left 20%/cover no-repeat",
      minHeight: 400
    },
    f6080: {
      background: "url(/img/history/bg4.jpg) top center/cover no-repeat",
      minHeight: 400
    },
    f90: {
      background: "url(/img/history/bg5.jpg) top center/cover no-repeat",
      minHeight: 400
    },
    paper: {
      background: "rgba(255,255,255,0.8)"
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <H2 content="ИСТОРИЯ МОДЫ XX ВЕКА" />
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container justify="center" alignItems="center" style={styles.xx}>
          <Hidden implementation="css" only="xs">
            <Grid item xs={12} md={5} />
          </Hidden>
          <Grid item xs={12} md={7} style={{ padding: 20 }}>
            <Paper style={styles.paper}>
              <h3 style={styles.head}>Модерн и модный облик начала XX века</h3>
              <p style={styles.text}>
                История моды и сексуальности в эпоху La belle Epoque
                (1894-1914). Возникновение «Haute couture». Ч.Ф. Ворт. Модные
                дома мира к.XIX – н. XX века. Влияние «Дягилевских сезонов» на
                моду начала XX века.
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" style={styles.f20}>
          <Grid item xs={12} md={7} style={{ padding: 20 }}>
            <Paper style={styles.paper}>
              <h3 style={styles.head}>Мода 20-х годов</h3>
              <p style={styles.text}>
                Изменения в одежде во время первой мировой войны. «Ревущие
                двадцатые» (1914-1929). Ар-деко. Габриэль (Коко) Шанель – автор
                новых силуэтов и нового стиля жизни. Жан Пату – первый дизайнер
                спортивной одежды.
              </p>
            </Paper>
          </Grid>
          <Hidden implementation="css" smDown>
            <Grid item xs={12} md={5} />
          </Hidden>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={styles.f3050}
        >
          <Hidden implementation="css" smDown>
            <Grid item xs={12} md={5} />
          </Hidden>
          <Grid item xs={12} md={7} style={{ padding: 20 }}>
            <Paper style={styles.paper}>
              <h3 style={styles.head}>Мода от 30-х до 50-х</h3>
              <p style={styles.text}>
                Голливуд и гламур. Сюрреализм в моде 30-х годов. Мода военного
                периода (с 1929г. по военное время). Голливуд и гламур. Иконы
                стиля: Гарбо и Дитрих. Эдуард Молине – универсальный кутюрье.
                «Шокирующая Эльза». Сюрреализм. План «Утилити». Мода в США –
                создание американского стиля. Леллонг – общепризнанный
                профессионал бизнеса моды. Мода в послевоенный период. «Нью-Лук»
                К.Диора. Возвращение К. Шанель. Итальянская «альта мода». Король
                обуви – Сальваторе Феррагамо. Возникновение прет-а-порте.
                Кристобель Баленсиага – основатель будущего моды XX века.
                Моделирование одежды – искусство и синтетический жанр. Луи Ферро
                - принципы творчества и его модели. Идеальная женщина-кутюрье.
                Пьер Бальман. Жак Фат – первый француз на американском рынке
                «prêt-a-porter».
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={styles.f6080}
        >
          <Grid item xs={12} md={7} style={{ padding: 20 }}>
            <Paper style={styles.paper}>
              <h3 style={styles.head}>Мода от 60-х до 80-х</h3>
              <p style={styles.text}>
                Десятилетие, изменившее мир (1960-е г). Антимода 70-х годов.
                Итальянский стиль в моде 80-х. Мини и baby-doll. Космическая эра
                и поп-арт. Творчество А.Куррежа и П.Рабана. Маэстро
                «prêt-a-porter» Пьер Кардин. Творчество Ив Сен-Лоран. Хиппи и
                перемены в моде в конце 1960-х годов. Соединение уличной моды и
                «haute couture». Вивьен Вествуд – виртуоз эпатажа.
                Постмодернизм. Японское направление в дизайне одежды. Творчество
                Кензо. Стиль «диско». Рой Хальстон. «Богатая мода» и
                деконструктивизм.
              </p>
            </Paper>
          </Grid>
          <Hidden implementation="css" smDown>
            <Grid item xs={12} md={5} />
          </Hidden>
        </Grid>
        <Grid container justify="center" alignItems="center" style={styles.f90}>
          <Hidden implementation="css" smDown>
            <Grid item xs={12} md={5} />
          </Hidden>
          <Grid item xs={12} md={7} style={{ padding: 20 }}>
            <Paper style={styles.paper}>
              <h3 style={styles.head}>Мода 90-х</h3>
              <p style={styles.text}>
                Минимализм 90-х годов. Итальянский стиль в моде: Версаче, Ферре,
                Москино. К. Лагерфельд и К.Лакруа. Творчество А.Алайя.
                Экологическое направление в дизайне одежды. Гранж и минимализм.
                Британская мода: В.Вествуд, Дж. Галльяно, А.Макквин. Том Форд.
                Минимализм будущего от Хуссейна. Ведущие модельеры и Дома мод
                90-х годов: Армани, Валентино, Версаче, Вествуд, Кавакубо,
                Мияке, Черрути, Готье, Прада и др. Показы мод: стили и
                тенденции. Анализ и прогноз модных тенденций.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
