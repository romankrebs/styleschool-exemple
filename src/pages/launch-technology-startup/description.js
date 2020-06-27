import React from "react";
import { style } from "./styles";
import List from "../../components/list";
import Description from "../../components/descript4courses";
import { withStyles } from "@material-ui/styles";

const styles = theme => style;

function Descript(props) {
  const { classes } = props;
  return (
    <Description
      block1={
        <div style={{ paddingBottom: "1.4em" }}>
          <div className={classes.p}>
            Есть идея / Продукт / Startup¸ который вы хотите продвинуть на рынок
            и зарабатывать? Но не знаете:
            <List
              arr={[
                "как найти инвестора, спонсора?",
                "где найти партнера / поставщика?",
                "как эффективно выстроить бизнес-коммуникацию?",
                "как достучаться до клиента?"
              ]}
              style={style.p}
            />
          </div>
          <p className={classes.p}>
            Приходите на курс-интенсив «Технология запуска startup – проектов в
            индустрии моды и дизайна» и в процессе обучения вы получите ответы
            на все фундаментальные вопросы и сможете внести свой вклад в fashion
            индустрию и стать успешным предпринимателем.
          </p>
          <h3 className={classes.h3}>Для кого:</h3>
          <List
            arr={[
              "Людей, у которых есть startup для fashion / design индустрии",
              "Разработчиков продуктов для fashion бизнеса",
              "Предпринимателей",
              "Инноваторов"
            ]}
            style={style.p}
          />
        </div>
      }
      block2={
        <div>
          <h3 className={classes.h3} style={{ paddingTop: 0, marginTop: 0 }}>
            Темы курса:
          </h3>
          <List
            arr={[
              <span>
                Что такое product &mdash; менеджмент (планирование
                продукта&nbsp;/ маркетинг продукта
              </span>,
              "Инновации модной индустрии (создание модного продукта)",
              "Бренд-менеджмент / ДНК-бренда",
              "Целевая аудитория / Позиционирование / Сегментация",
              "Стратегия взаимодействия с ключевыми партнерами, спонсорами, поставщиками, инвесторами, клиентами.",
              "Фандрайзинг / краундфандинг / бизнес-инкубаторы",
              "Определение стратегии выведения startup-проекта на рынок."
            ]}
            style={style.p}
          />
        </div>
      }
      small="/img/launch-technology-startup/i01.jpg"
      img="/img/launch-technology-startup/i02.jpg"
    />
  );
}

export default withStyles(styles)(Descript);
