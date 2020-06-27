import React from "react";
import Cot from "../../components/cot";
import List from "../../components/list";
import ScrollableAnchor from "react-scrollable-anchor";

let styles = {
    head: {
      fontSize: "1.2em",
      // fontFamily: "Lora",
      fontWeight: 700,
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
        <div style={{ textAlign: "left" }}>
          <h3 style={styles.head}>
            Учитесь от 5000 руб. в месяц в рассрочку на 10 месяцев
          </h3>
          <List
            style={styles.text}
            arr={[
              <span>Полная стоимость обучения: 50000 рублей</span>,
              <span>
                Как платить: Вы вносите аванс, бронируете место, начинаете
                учится; полную оплату курса необходимо внести до 3 занятия.
              </span>,
              <span>
                Доступна банковская рассрочка на 10 месяцев: 5000 рублей в
                месяц. (без переплаты),
              </span>,
              <span>
                Доступна скидка 10% при внесении оплаты за курс в течение 48
                часов с момента бронирования места
              </span>
            ]}
          />
        </div>
      )
    }
  };

export default function SystemPay() {
  return (
    <div>
      <ScrollableAnchor id={"price"}>
        <h2
          style={{
            fontWeight: 700,
            color: "rgb(100,100,100)",
            textAlign: "left",
            marginTop: 48,
            fontSize: "1.8em"
          }}
        >
          Стоимость обучения
        </h2>
      </ScrollableAnchor>
      <Cot textButton={content.online.textButton} text={content.online.text} />
      <div style={{ height: 64 }} />
    </div>
  );
}
