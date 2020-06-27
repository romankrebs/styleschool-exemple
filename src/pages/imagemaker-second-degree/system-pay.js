import React from "react";
import Cot from "./cot";
import List from "../../components/list";
import ScrollableAnchor from "react-scrollable-anchor";

let styles = {
    head: {
      fontSize: "1.2em",
      fontFamily: "Lora",
      fontWeight: 600,
      margin: 0,
      padding: 12,
      textAlign: "center",
      color: "rgb(100,100,100)"
    },
    comment: {
      fontSize: "0.9em",
      color: "rgb(120,120,120)"
    },
    text: {
      color: "rgb(100,100,100)"
    },
    plus: {
      fontSize: "1.2em"
    }
  },
  content = {
    online: {
      textButton: "Стоимость обучения, дистанционное отделение",
      text: (
        <React.Fragment>
          <h3 style={styles.head}>Базовая стоимость дистанционного обучения</h3>
          <List
            style={styles.text}
            arr={[
              <span>
                Полная стоимость обучения за 11 месяцев &mdash; 179
                <sup>000</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 10% &mdash; 161
                <sup>100</sup> рублей
              </span>,
              <span>
                При поэтапной оплате: 1-й взнос &mdash; 24
                <sup>000</sup> рублей,
                <br />
                2-11 взносы &mdash; 15
                <sup>500</sup> руб.
              </span>
            ]}
          />
          <h3 style={styles.head}>
            Стоимость обучения при раннем бронировании*
          </h3>
          <List
            style={styles.text}
            arr={[
              <span>
                Полная стоимость при раннем бронировании за 11 месяцев, скидка
                10% &mdash; 161
                <sup>100</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 20% &mdash; 143
                <sup>200</sup> рублей
              </span>,
              <span>
                При поэтапной оплате: 1-й взнос &mdash; 21
                <sup>600</sup> рублей,
                <br />
                2-10 взносы &mdash; 13
                <sup>950</sup> рублей
              </span>
            ]}
          />
          <p style={styles.comment}>
            * Договора на условиях раннего бронирования заключаются во время
            действия специальных акций
          </p>
          <p style={styles.comment}>
            ** Приведена стоимость очного обучения на полном курсе по программе
            &laquo;Имидж-консалтинг и fashion&#8209;styling&raquo;. Стоимость
            обучения на курсах по специализации или базовом курсе смотрите
            отдельно
          </p>
        </React.Fragment>
      )
    },
    ofline: {
      textButton: "Стоимость обучения, очное отделение",
      text: (
        <React.Fragment>
          <h3 style={styles.head}>Базовая стоимость очного обучения</h3>
          <List
            arr={[
              <span>
                Полная стоимость обучения за 11 месяцев &mdash; 248
                <sup>000</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 10% &mdash; 223
                <sup>200</sup> рублей
              </span>,
              <span>
                При поэтапной оплате: 1-й взнос &mdash; 39
                <sup>000</sup> рублей,
                <br />
                2-11 взносы &mdash; 20
                <sup>900</sup> руб.
              </span>
            ]}
            style={styles.text}
          />
          <h3 style={styles.head}>
            Стоимость обучения при раннем бронировании*
          </h3>
          <List
            arr={[
              <span>
                Полная стоимость при раннем бронировании за 11 месяцев, скидка
                10% &mdash; 223
                <sup>200</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 20% &mdash; 198
                <sup>400</sup> рублей
              </span>,
              <span>
                При поэтапной оплате: 1-й взнос &mdash; 35
                <sup>000</sup> рублей,
                <br />
                2-11 взносы &mdash; 18
                <sup>820</sup> рублей
              </span>
            ]}
            style={styles.text}
          />
          <p style={styles.comment}>
            * Договора на условиях раннего бронирования заключаются во время
            действия специальных акций
          </p>
          <p style={styles.comment}>
            ** Приведена стоимость очного обучения на полном курсе по программе
            &laquo;Имидж-консалтинг и fashion&#8209;styling&raquo;. Стоимость
            обучения на курсах по специализации или базовом курсе смотрите
            отдельно
          </p>
        </React.Fragment>
      )
    },
    extramural: {
      textButton: "Стоимость обучения, заочое отделение",
      text: (
        <React.Fragment>
          <h3 style={styles.head}>Базовая стоимость заочного обучения</h3>
          <List
            arr={[
              <span>
                Полная стоимость обучения за 11 месяцев &mdash; 229
                <sup>000</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 10% &mdash; 206
                <sup>100</sup> рублей
              </span>,
              <span>
                При поэтапной оплате: 1-й взнос &mdash; 30
                <sup>000</sup> рублей,
                <br />
                2-10 взносы &mdash; 19
                <sup>900</sup> руб.
              </span>
            ]}
            style={styles.text}
          />
          <h3 style={styles.head}>
            Стоимость обучения при раннем бронировании*
          </h3>
          <List
            arr={[
              <span>
                Полная стоимость &mdash; 206
                <sup>100</sup> рублей
              </span>,
              <span>
                При единовременной оплате скидка 20% &mdash; 183
                <sup>200</sup> рублей
              </span>,
              <span>
                При поэтапной оплате: 1-й взнос &mdash; 27
                <sup>000</sup> рублей,
                <br />
                2-11 взносы &mdash; 17
                <sup>910</sup> рублей
              </span>
            ]}
            style={styles.text}
          />
          <p style={styles.comment}>
            * Договора на условиях раннего бронирования заключаются во время
            действия специальных акций
          </p>
          <p style={styles.comment}>
            ** Приведена стоимость очного обучения на полном курсе по программе
            &laquo;Имидж-консалтинг и fashion&#8209;styling&raquo;. Стоимость
            обучения на курсах по специализации или базовом курсе смотрите
            отдельно
          </p>
        </React.Fragment>
      )
    }
  };

export default function SystemPay() {
  return (
    <div>
      <ScrollableAnchor id={"system-pay"}>
        <div style={{ height: 48 }} />
      </ScrollableAnchor>
      <h2
        style={{
          fontSize: "1.8em",
          fontFamily: "Lora",
          fontWeight: 700,
          color: "rgb(100,0,0)",
          textAlign: "center"
        }}
      >
        Стоимость обучения
      </h2>

      <p style={{ textAlign: "center" }}>
        по программе Имидж-консалтинг и fashion styling, профподготовка 11
        месяцев
      </p>
      <div style={{ height: 80 }} />
      <Cot textButton={content.ofline.textButton} text={content.ofline.text} />
      <Cot
        textButton={content.extramural.textButton}
        text={content.extramural.text}
      />
      <Cot textButton={content.online.textButton} text={content.online.text} />
      <div style={{ height: 64 }} />
    </div>
  );
}
