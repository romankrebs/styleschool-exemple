import React from "react";
import Grid from "@material-ui/core/Grid";
import Expanded from "../../components/expanded";

export default function Contents() {
  const styles = {
    tile: {
      head: {
        fontFamily: "Roboto",
        fontSize: "2.1em",
        textAlign: "center",
        color: "rgb(100,100,100)",
        margin: 0
      },
      text: {
        fontSize: "1.5em",
        textAlign: "center",
        color: "rgb(100,100,100)",
        margin: 0
      }
    },
    programm: {
      summary: {
        fontSize: "1.2em",
        fontWeight: 700,
        color: "rgb(80,80,80)",
        backgroundColor: "rgba(220,220,220,1.0)"
      },
      details: {
        fontSize: "1em",
        fontWeight: 400,
        color: "rgb(80,80,80)",
        backgroundColor: "rgba(240,240,240,1.0)"
      },
      marker: {
        fontSize: "1em",
        color: "rgb(80,80,80)",
        textAlign: "center"
      }
    }
  };

  const contents = {
    tile1: {
      message1: "1",
      message2: "Дизайн-концепция"
    },
    tile2: {
      message1: "2",
      message2: "Стилизация"
    },
    tile3: {
      message1: "3",
      message2: "Эскиз-проект"
    },
    programm: {
      a: {
        head: (
          <React.Fragment>
            <div style={styles.programm.marker}>1</div>
            &emsp;Концептуальный модуль
          </React.Fragment>
        ),
        text: (
          <ul>
            <li>Интерьер в историческом и современном контексте</li>
            <li>Современные стилевые направления, тенденции и материалы</li>
            <li>Источники вдохновения.Идея и реализация</li>
            <li>Концептуальное проектирование</li>
          </ul>
        )
      },
      b: {
        head: (
          <React.Fragment>
            <div style={styles.programm.marker}>2</div>
            &emsp;Модуль Дизайн и стилизация
          </React.Fragment>
        ),
        text: (
          <ul>
            <li>Приемы и способы стилизации</li>
            <li>Цвет. Цветовые гармонии. Элементы цветопсихологии</li>
            <li>Композиция как способ гармонизации пространства</li>
            <li>Основы проектной графики. Графические инструменты</li>
          </ul>
        )
      },
      c: {
        head: (
          <React.Fragment>
            <div style={styles.programm.marker}>3</div>
            &emsp;Модуль Проектная реализация
          </React.Fragment>
        ),
        text: (
          <ul>
            <li>Планировочное решение</li>
            <li>Дизайн-проект: структура, подача</li>
            <li>Презентация идеи. Moodboard. Concept board</li>
            <li>Визуализация идеи дизайн-проекта в 2D графике</li>
          </ul>
        )
      }
    }
  };

  return (
    <Grid container justify="center" alignItems="flex-start" spacing={1}>
      <Grid item xs={12} md={12}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "left" }}
        >
          Программа курса
        </h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <Expanded
          summary={{
            text: contents.programm.a.head,
            style: styles.programm.summary
          }}
          details={{
            text: contents.programm.a.text,
            style: styles.programm.details
          }}
          expand
        />
        <Expanded
          summary={{
            text: contents.programm.b.head,
            style: styles.programm.summary
          }}
          details={{
            text: contents.programm.b.text,
            style: styles.programm.details
          }}
          expand
        />
        <Expanded
          summary={{
            text: contents.programm.c.head,
            style: styles.programm.summary
          }}
          details={{
            text: contents.programm.c.text,
            style: styles.programm.details
          }}
          expand
        />
      </Grid>
    </Grid>
  );
}
