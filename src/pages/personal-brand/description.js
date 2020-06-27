import React from "react";
import { styles } from "./styles";
import List from "../../components/list";
import Description from "../../components/descript4courses";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

function Descript(props) {
  const { classes } = props;
  return (
    <div>
      <Description
        block1={
          <div style={{ paddingBottom: "1.4em" }}>
            <p className={classes.p}>
              В процессе обучения на курсе-интенсиве «Личный бренд в индустрии
              моды и дизайна» вы под руководством опытного наставника
              разработаете стратегию выведения и продвижения вашего личного
              бренда на рынок. К концу обучения у вас будет четкое понимание и
              пошаговый план действий по развитию личного бренда на предстоящий
              год.
            </p>
            <h3 className={classes.h3}>Для кого:</h3>
            <List
              arr={[
                "Профессионалов индустрии моды и дизайна, которые хотят увеличить стоимость своих услуг",
                "Имиджмейкеров / Стилистов / Визажистов",
                "Блоггеров / Фотографов / Видеографов / Специалистов",
                "Людей, которые хотят монетизировать свои навыки, умения, достижения."
              ]}
              style={styles.p}
            />
          </div>
        }
        block2={
          <div>
            <h3 className={classes.h3} style={{ paddingTop: 0, marginTop: 0 }}>
              Что будет:
            </h3>
            <List
              arr={[
                "Что такое личный бренд / Миссия и ценности / Атрибуты бренда",
                "Анализ личного бренда, выявление УТП, конкурентный анализ",
                "Разработка стратегии продвижения личного бренда",
                "Упаковка личного бренда / Визуальная концепция / Контент-план / Тизеры",
                "Storytelling в работе с личным брендом",
                "Выбор каналов продвижения личного бренда: интернет-маркетинг, SMM, публичные выступления, нетворкинг-план, СМИ.",
                "PR-стратегия продвижения личного бренда / управление репутацией",
                "Монетизация личного бренда"
              ]}
              style={styles.p}
            />
          </div>
        }
        img={"/img/personal-brand/ill02.jpg"}
        styleImage={{ marginTop: 4 }}
      />
    </div>
  );
}

export default withStyles(wStyles)(Descript);
