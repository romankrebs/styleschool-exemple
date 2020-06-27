import React from "react";
import { Grid } from "@material-ui/core";
import List from "../../components/list";
import { Youtube } from "../../components/icons-path";

let styles = {
  head: {
    font: "600 1.1em",
    color: "rgb(100,0,0)",
    textAlign: "left",
    margin: 0,
    padding: 12
  },
  text: {
    font: "400 1em",
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 8,
    listStyle: "none"
  }
};

export default function Tesises(props) {
  return (
    <div>
      <Grid container justify="center" alignItems="flex-start" spacing={3}>
        <Grid item xs={12} md={6}>
          <h3 style={styles.head}>Для кого</h3>
          <p style={{ ...styles.text, paddingLeft: 48, lineHeight: "1.5rem" }}>
            Курс ориентирован на тех, кто интересуется современной
            fashion-индустрией, кто хочет получить новую творческую
            профессию для будущей карьеры, а так же тех, кто уже работает в
            модной индустрии (фотографов, парикмахеров, дизайнеров), но
            хочет развития и профессионального роста.
          </p>
          <h3 style={styles.head}>Открытые онлайн лекции</h3>
          <p style={{ ...styles.text, lineHeight: "1.5rem" }}>
            Подпишитесь на наш&ensp;
            <a
              href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ"
              target="_blank"
            >
              <svg width="24px" height="18px" viewBox="0 0 24 20">
                <path
                  fill="rgb(255,0,0)"
                  d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
                />
              </svg>
            </a>
            &ensp;
            <a
              href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ"
              target="_blank"
            >
              Youtube канал
            </a>
            , смотрите лекции и эфиры онлайн
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 style={styles.head}>В процессе обучения</h3>
          <List
            arr={[
              "Изучаем профессиональные методики создания имиджа и стиля",
              "Принципы и алгоритмы имидж-консультирования клиентов",
              "Маршруты и особенности шопинга в России и Европе",
              "Практику стилизации фото и ТВ проектов, модных показов",
              "Возможности коллабораций с дизайнерами, бутиками",
              "Исследуем пути создания своего модного бизнеса",
              "Создаем и продвигаем персональный бренд стилиста"
            ]}
            style={styles.text}
          />
        </Grid>
      </Grid>
    </div>
  );
}
