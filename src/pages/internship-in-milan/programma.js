import React from "react";
import { withStyles } from "@material-ui/styles";
import { style } from "./styles";
import List from "../../components/list";

const wStyles = theme => style;

const Element = withStyles(wStyles)(props => {
  const { classes } = props;
  return (
    <div>
      <h3
        className={classes.p}
        style={{ paddingTop: props.one ? 0 : "1.1em", fontWeight: 700 }}
      >
        {props.title}
      </h3>
      <List arr={props.list} style={style.pEnd} />
    </div>
  );
});

const content = [
  {
    title: "17/02 — 1 день:",
    list: [
      "Встреча.",
      "Трансфер в город.",
      "Заселение",
      "Проглка по центру.",
      "Собор Дуомо.",
      "Торговый центр Rinascente",
      "Галерея Vittorio Emmanuele",
      "Мороженое в Biancolatte"
    ]
  },
  {
    title: "18/02 — 2 день:",
    list: [
      "Поездка в аутлет Серравале.",
      "Вечерняя прогулка Brera",
      "Porta Nuova / Порто Нуово",
      "Corso Como / Корсо Комо"
    ]
  },
  {
    title: "19/02 — 3 день:",
    list: [
      "Музей Armani Silos",
      "Золотой квадрат / Via Montenapoleone / Via della Spiga / Corso Venezia / Piazza San Babila / Trussardi Cafe",
      "Винтажные магазины",
      "Модные сладости в Pasticceria Marchesi"
    ]
  },
  {
    title: "20/02 — 4 день:",
    list: [
      "Поездка в аутлет сегмент масс-маркет",
      "Вечерняя прогулка по Милану",
      "Осмотр новых коллекций во флагманских бутиках."
    ]
  },
  {
    title: "21/02 — 5 день:",
    list: [
      "Поездка в старинный город Бергамо / Alta Cita",
      "Обзорная экскурсия"
    ]
  },
  {
    title: "22/02 — 6 день:",
    list: [
      "Аутлеты в центре Милана",
      "Винтажные магазины.",
      "Возможна поездка в шоу-рум, на профессиональную выставку One Milano.",
      "Ужин в честь закрытия стажировки, вечеринка"
    ]
  },
  {
    title: "23/02 — 7 день",
    list: ["Трансфер в аэропорт", "Отъезд домой"]
  }
];

const Programma = function(props) {
  const { classes } = props;
  return (
    <div>
      <h2 className={classes.h2small}>Программа</h2>
      {content.map((d, i) => (
        <Element title={d.title} list={d.list} one={i == 0 ? true : false} />
      ))}
      <div style={{ height: "1.4em" }} />
      <p className={classes.pEnd} style={{ color: "rgb(160,100,100)" }}>
        В программе могут быть небольшие изменения, мы можем поехать в аутлет в
        другой день и пр.
      </p>
    </div>
  );
};

export default withStyles(wStyles)(Programma);
