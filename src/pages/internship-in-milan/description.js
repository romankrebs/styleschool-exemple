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
          <p className={classes.p}>
            Приглашаем стилистов, имиджмейкеров, fashion-блоггеров на уникальную
            шоппинг-стажировку во время события мирового масштаба Milan Fashion
            Week, на которое приезжают модные люди и профессионалы fashion рынка
            со всего мира.
          </p>
          <p className={classes.pEnd}>
            Здесь самое большое количество флагманских бутиков всемирно
            известных дизайнеров, старинные торговые галереи, знаковый торговый
            центр Rinocente, 4 аутлета: Serravale Designer / Fidenza Village /
            Vicolungo / Max Mara
          </p>
          <h3 className={classes.h3}>Что будет:</h3>
          <List
            arr={[
              "Устроим познавательный шоппинг-тур в знаковые галереи, торговые центры, аутлеты Милана и винтажные магазины.",
              "Сделаем шоппинг-путеводитель по всем местам.",
              "Станем частью модной жизни Милана. Посетим флагманские бутики известных мировых брендов в районе Золотого квадрата (Via Montenapoleone, Via Manzoni, Via della Spiga, Corso Venezia, Piazza San Babila).",
              "Проведем обзор глобальных fashion трендов на ближайшие 2 года и подготовим тренд-прогнозы для будущей работы",
              "Освоим Fashion-блоггинг, вдохновимся дизайном, сделаем street style look во время Milan fashion week",
              "Посетим музей  моды Armani Silos, в котором представлены образцы одежды с 1980 годов по настоящее время.",
              "Съездим в старинный город Бергамо, который славится своими кожаными изделиями.",
              "Под запрос посетим закрытые шоу-румы, а также профессиональную выставку One Milano (B2B)",
              "И конечно попробуем гастрономические достижения итальянской кухни, продегустируем вина."
            ]}
            style={style.pEnd}
          />
        </div>
      }
      block2={
        <div>
          <h3 className={classes.h3} style={{ paddingTop: 0, marginTop: 0 }}>
            В стоимость входит:
          </h3>
          <List
            arr={[
              "Трансфер аэропорт MPS (туда-обратно)",
              "Уникальная программа, которая позволит разработать свой шоппинг-путеводитель",
              "Сопровождение кураторов на весь период",
              "Поездка в аутлеты (Serravale и с брендами масс-маркета)",
              "Музей Armani Silos",
              "Вечеринка в честь окончания стажировки (вход в модное место + коктейль)",
              "Поездка в город Бергамо",
              "Проезд на все время стажировки"
            ]}
            style={style.pEnd}
          />
        </div>
      }
      slider
      slides={[
        "/img/internship-in-milan/slide01q.jpg",
        "/img/internship-in-milan/slide02q.jpg",
        "/img/internship-in-milan/slide03q.jpg",
        "/img/internship-in-milan/slide04q.jpg",
        "/img/internship-in-milan/slide05q.jpg"
      ]}
      slidesMobile={[
        "/img/internship-in-milan/slide01.jpg",
        "/img/internship-in-milan/slide02.jpg",
        "/img/internship-in-milan/slide03.jpg",
        "/img/internship-in-milan/slide04.jpg",
        "/img/internship-in-milan/slide05.jpg"
      ]}
    />
  );
}

export default withStyles(styles)(Descript);
