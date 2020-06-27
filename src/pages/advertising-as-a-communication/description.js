import React from "react";
import List from "../../components/list";
import Description from "../../components/descript4courses";
import { styles } from "./styles";
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
              В процессе обучения на курсе «Реклама в индустрии моды и дизайна»
              вы под руководством опытного наставника разработаете стратегию
              рекламной кампании для торговой марки / услуги / бренда.
              Заключительный этап презентация готового плана рекламной кампании,
              включающого все этапы. После обучения вы сможете самостоятельно
              разработать план рекламного продвижения или сможете грамотно
              составить ТЗ / бриф для разных специалистов и проверить
              эффективность затрат и используемых инструментов рекламы
            </p>
            <h3 className={classes.h3}>Для кого:</h3>
            <List
              arr={[
                "Специалистов и профессионалов индустрии моды и дизайна",
                "Имиджмейкеров / Стилистов / Визажистов",
                "Блоггеров / Фотографов / Видеографов",
                "Людей, которые хотят занять свое место в fashion индустрии"
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
                "Разработка и реализация рекламных проектов (от идеи до воплощения)",
                "Виды рекламы их преимущества и недостатки",
                "Конкурентный анализ / ЦА / Позиционирование",
                "Организация и проведение модных рекламных съемок (advertaising campaign)",
                "Создание  lookbook, коммерческих каталогов, fashion фото/видео.",
                "Выбор медиа каналов для продвижения",
                "Медиа-план и контент-план",
                "Бюджет рекламной кампании",
                "Разбор кейсов"
              ]}
              style={styles.p}
            />
          </div>
        }
        img="/img/advertising-as-a-communication/i01.jpg"
        /* styleImage={{
          maxHeight: 300
        }} */
      />
    </div>
  );
}

export default withStyles(wStyles)(Descript);
