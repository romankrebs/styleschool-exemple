import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Programma() {
  const styles = {
    marker: {
      fontSize: "1.4em",
      fontWeight: 700,
      background: "rgb(200,200,200)",
      color: "rgb(100,100,100)",
      padding: 10,
      boxSizing: "border-box"
    },
    text: {
      fontSize: "1.4em",
      fontWeight: 700,
      background: "rgb(230,230,230)",
      color: "rgb(100,100,100)",
      padding: 10,
      boxSizing: "border-box",
      display: "inline-block"
    },
    box: {
      margin: 20,
      width: "calc(100% - 40px)",
      boxSizing: "border-box",
      background: "rgb(230,230,230)"
    },
    head: {
      fontFamily: "Roboto",
      fontSize: "2em",
      textAlign: "left",
      color: "rgb(100,100,100)"
    }
  };
  return (
    <Grid container justify="center" alignItems="center" spacing="8">
      <Grid item xs={12} md={12}>
        <h2 style={styles.head}>Программа</h2>
        <div style={styles.box}>
          <span style={styles.marker}>1</span>
          <div style={styles.text}>Имидж как коммуникация</div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>2</span>
          <div style={styles.text}>Компоненты имиджа публичных персон</div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>3</span>
          <div style={styles.text}>
            Лучшие практики создания имиджа публичных персон
          </div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>4</span>
          <div style={styles.text}>
            Личность как основа политического имиджа
          </div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>5</span>
          <div style={styles.text}>
            Практика разработки и тестирования имидж проекта
          </div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>6</span>
          <div style={styles.text}>Психология лидерства</div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>7</span>
          <div style={styles.text}>Общественное мнение и методы его оценки</div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>8</span>
          <div style={styles.text}>
            Внешний и внутренний компоненты публичного образа
          </div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>9</span>
          <div style={styles.text}>
            Формирование общественного мнения. Карьера публичной персоны
          </div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>10</span>
          <div style={styles.text}>
            Продукция визуального уровня, подготовка выступлений, PR
          </div>
        </div>
        <div style={styles.box}>
          <span style={styles.marker}>11</span>
          <div style={styles.text}>Защита проекта</div>
        </div>
      </Grid>
    </Grid>
  );
}
