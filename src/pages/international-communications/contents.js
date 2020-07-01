import React from "react";
import Grid from "@material-ui/core/Grid";
import { style } from "../../components/stylesCourse";
import Expanded from "../../components/expanded";
import List from "../../components/list";

export default function Contents() {
  const cStyles = {
    tile: {
      head: {
        // fontFamily: "Roboto",
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
        fontSize: "1.1em",
        fontWeight: 700,
        color: "rgb(80,80,80)",
        backgroundColor: "rgba(240,240,240,1.0)"
      },
      details: {
        fontSize: "1em",
        fontWeight: 400,
        color: "rgb(80,80,80)",
        backgroundColor: "rgba(250,250,250,1.0)",
        lineHeight: "1.5em"
      },
      marker: {
        fontSize: "1em",
        color: "rgb(80,80,80)",
        textAlign: "center"
      }
    }
  };

  const contents = [
    {
      head: (
        <div style={cStyles.programm.marker}>
          Модуль 1. Обзор и анализ мировых рынков
        </div>
      ),
      text: (
        <List
          arr={[
            "Обзор и прогноз рынка. Кросс-культурный анализ. Анализ внешней среды.",
            "Целевая аудитория. Анализ предпочтений потребителей разных стран.",
            "Позиционирование и выбор сегмента на глобальном рынке.",
            "Концепция глобального и мультинационального маркетинга."
          ]}
        />
      )
    },
    {
      head: (
        <div style={cStyles.programm.marker}>
          Модуль 2. Основы межкультурной коммуникации в условиях глобального
          рынка
        </div>
      ),
      text: (
        <List
          arr={[
            "Сущность и формы межкультурной коммуникации.",
            "Кризисные коммуникации, выявление потенциальных проблем в межкультурной коммуникации и возможности оптимизации процесса.",
            "Специфика коммуникаций в странах мира.",
            "Деловая коммуникация на международных рынках.",
            "Стратегии устных и письменных деловых коммуникаций.",
            "Деловые переговоры, нетворкинг."
          ]}
        />
      )
    },
    {
      head: (
        <div style={cStyles.programm.marker}>
          Модуль 3. Коммуникационная стратегия презентации бренда на
          международной арене
        </div>
      ),
      text: (
        <List
          arr={[
            "Международный аспект процесса глобализации бренда. Разработка и подготовка визуальной концепции бренда. Определение ДНК-бренда на примере современных брендов.",
            "Выбор стратегии продвижения бренда на глобальный рынок. Прогнозирование трендов. Позиционирование и определение сегмента рынка. Целевая аудитория.",
            "Выбор каналов продвижения бренда. Специфика работы с международными медиа и СМИ.",
            "Технологии рекламы и PR в индустрии моды и дизайна.",
            "Профессиональные B2B и B2C мероприятия как способ презентации модного бренда на глобальном рынке.",
            "Международные выставки, ярмарки, презентации, показы.",
            "Работа с шоу-румами, организация специальных мероприятий в модной индустрии.",
            "Международные коллаборации и кросс-маркетинг на примере успешных кейсов."
          ]}
        />
      )
    }
  ];

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <h2 style={style.h2small}>Содержание программы</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        {contents.map((el, i) => (
          <Expanded
            summary={{
              text: el.head,
              style: cStyles.programm.summary
            }}
            details={{
              text: el.text,
              style: cStyles.programm.details
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
}
