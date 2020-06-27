import React from "react";
import { Link } from "react-router-dom";

const style = {
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "left",
    margin: 0,
    padding: "0.5em 0",
    color: "rgb(100,100,100)",
    lineHeight: "1.5em"
  }
};

function Anons(props) {
  return (
    <div>
      <div style={{ textAlign: "center", padding: "1em" }}>
        <img
          src="/img/cpm-w2020/logo-cpm.png"
          alt="CPM W2020"
          style={{ maxWidth: 300 }}
        />
      </div>
      <h2
        style={{
          fontFamily: "Roboto",
          fontSize: "1.2em",
          fontWeight: 500,
          textAlign: "center",
          margin: 0,
          padding: "1em 0",
          color: "rgb(100,100,100)"
        }}
      >
        КОЛЛАБОРАЦИЯ CPM И ВЫСШЕЙ ШКОЛЫ СТИЛИСТИКИ: ТРЕНДЫ В МОДНЫХ АКСЕССУАРАХ
      </h2>
      <p style={style.p}>
        Более 1300 брендов из 30 стран мира презентуют новые коллекции женской,
        мужской и детской одежды, модного белья и купальников, а также обуви и
        аксессуаров на выставке CPM — Collection Premiere Moscow в ЦВК
        «Экспоцентр» в 15 павильонах на общей площади свыше 50 тысяч м².
      </p>
      <p style={style.p}>
        С 24 по 26 февраля впервые на выставке пройдут консультационные сессии
        со специалистами Высшей школы стилистики, дизайна и технологий,
        посвященные теме подиумных трендов в модных аксессуарах на текущий сезон
        весна-лето 2020.
      </p>
      <p style={style.p}>
        <Link to="/cpm_w2020">Подробнее ...</Link>
      </p>
    </div>
  );
}

export default Anons;
