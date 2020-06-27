import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import { style } from "./styles";

const wStyles = theme => style;

const Price = function(props) {
  const { classes } = props;
  return (
    <div style={{ paddingTop: "1.4em" }}>
      <Paper
        style={{
          padding: "1.4em",
          paddingTop: 0,
          background:
            "linear-gradient(rgb(250,250,250), rgb(255,255,255), rgb(250,250,250))"
        }}
      >
        <h3 className={classes.h3}>Стоимость:</h3>
        <p className={classes.p}>
          85
          <sup>000</sup> &#8381; / 1200 €
        </p>
        <p className={classes.pEnd}>
          Авиаперелет, гостиница, питание не входит в стоимость.
        </p>
        <h3 className={classes.h3}>Проживание 2 варианта:</h3>
        <p className={classes.p}>
          <b>Вариант 1.</b> Арендуем совместно апартаменты в Милане на 4-6
          человек, в классном месте, красиво и весело проводим время. Получится
          бюджетно в пределах 200 евро за 7 дней с человека.
        </p>
        <p className={classes.pEnd}>
          <b>Вариант 2.</b> Вы арендуете себе жилье, которое считаете нужным и
          приезжаете на встречи самостоятельно.
        </p>
      </Paper>
    </div>
  );
};

export default withStyles(wStyles)(Price);
