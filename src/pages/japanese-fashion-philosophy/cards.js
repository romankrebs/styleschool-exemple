import React from "react";
import { Grid } from "@material-ui/core";
import JapaneseFashion from "../master-class/cards/japanese-fashion-philosophy";
import { withStyles } from "@material-ui/styles";
import { styles } from "../master-class/styles";

const wStyles = theme => styles;

function Cards(props) {
  const price = "600";
  const { classes } = props;

  return (
    <div>
      <Grid container justify="center" spacing={2} alignItems="flex-start">
        <Grid item xs={12} md={12}>
          <h2 className={classes.h2}>Доступно в записи</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion part="1" date="" time="" price={price} noLink />
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion part="2" date="" time="" price={price} noLink />
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion
            part="3"
            date=""
            time=""
            noLink
            price={price}
            image="/img/japanese-fashion-philosophy/titul-card03.jpg"
            imageHeight={false}
            text={
              <span>
                Третья лекция цикла посвящена ключевым характеристикам японского
                fashion-сознания 70-х и 80-х&nbsp;гг. XXв. Особое внимание будет
                уделено методу деконструктивизма как важнейшему принципу
                проектирования костюма, имеющего непосредственную связь с
                архитектурой деконструктивизма. Для пояснения этой аналогии
                будут рассмотрены суть и принципы деконструктивизма в искусстве
                и дизайне.
              </span>
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <JapaneseFashion
            part="4"
            date=""
            image="/img/japanese-fashion-philosophy/ill04.jpg"
            time=""
            noLink
            text={
              <span>
                <b>Философия японской моды: творцы, идеи, образы (часть 4)</b>
                <br />
                Четвертая лекция цикла продолжает разговор о принципах и приемах
                деконструктивизма как метода проектирования современного костюма
                на примере японских дизайнеров. Кроме того, будут даны ключевые
                характеристики японского fashion-сознания 90-хгг.XX века. Итогом
                лекции станет начало разговора о философском и художественном
                аспекте творчества Yohji Yamamoto.
              </span>
            }
            price={price}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion
            part="5"
            date=""
            image="/img/japanese-fashion-philosophy/titul-card05.jpg"
            time=""
            noLink
            text={
              <span>
                <b>Философия японской моды: творцы, идеи, образы (часть 5)</b>
                <br />
                Пятая лекция цикла посвящена философским и художественным
                аспектам творчества Yohji Yamamoto, с одной стороны,
                объединяющих его с японским и европейским подходом к созданию
                концепт-образов, с другой стороны — выделяющих его из общей
                системы, отображением его особого, узнаваемого авторского
                почерка.
              </span>
            }
            price={price}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion
            part="6"
            date=""
            image="/img/japanese-fashion-philosophy/titul-card06.jpg"
            time=""
            noLink
            text={
              <span>
                <b>Философия японской моды: творцы, идеи, образы (часть 6)</b>
                <br />
                Шестая лекция цикла посвящена особенностям
                художественно-проективного метода творчества Issey Miyake: поиск
                многофункциональной ткани, эксперименты с преобразованием
                двухмерности, «метаморфозы» традиционных ручных техник,
                авторское решение проблемы соединения концепт-идей haute couture
                и prêt-a-porter.
              </span>
            }
            price={price}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion
            part="7"
            date=""
            image="/img/japanese-fashion-philosophy/titul-card07.jpg"
            time=""
            noLink
            text={
              <span>
                <b>Философия японской моды: творцы, идеи, образы (часть 7)</b>
                <br />
                Седьмая лекция цикла продолжает разговор об особенностях
                художественно-проективного метода творчества Issey Miyake:
                признаки концептуальности бренда, связь тела, одежды и
                архитектуры, применение новых технологий в создании ткани,
                проект «A Piece of Cloth» и концепция одежды будущего.
              </span>
            }
            price={price}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion
            part="8"
            date=""
            image="/img/japanese-fashion-philosophy/titul-card08.jpg"
            time=""
            noLink
            text={
              <span>
                <b>Философия японской моды: творцы, идеи, образы (часть 8)</b>
                <br />
                Восьмая лекция цикла посвящена Rei Kawakubo как
                представительнице интеллектуального дизайна, во многом
                определившей коды современной моды и оказавшей влияние даже на
                те бренды, что работают в иной плоскости, чем концептуальный
                дизайн. Творчество Rei Kawakubo будет рассмотрено через
                оппозицию и диалог с европейской традицией проектирования одежды
                и взаимоотношения одежды тела, через концептуальный подход,
                через социокультурные авторские декларации, переведенные на язык
                костюма.
              </span>
            }
            price={price}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <JapaneseFashion
            part="10"
            date=""
            image="/img/japanese-fashion-philosophy/titul-card10.jpg"
            time=""
            noLink
            text={
              <span>
                <b>Философия японской моды: творцы, идеи, образы (часть 10)</b>
                <br />
                Десятая лекция цикла посвящена содержательным и проективным
                принципам дизайна костюма молодых японских брендов — Undercover,
                Anrealage, Attachment, Final Houm как развитие, диалог и
                полемика с традиционными принципами японского и европейского
                дизайна, как визуальная демонстрация событий настоящего и
                прогноза на будущее.
              </span>
            }
            price={price}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Cards);
