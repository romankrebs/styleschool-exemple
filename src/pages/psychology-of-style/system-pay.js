import React from "react";
import Cot from "../../components/cot";
import List from "../../components/list";
import ScrollableAnchor from "react-scrollable-anchor";
// import { style } from "../information-about-educational-organization/style";
import Button from "../../components/buttons";

const price = (
  <span>
    25
    <sup>000</sup>
  </span>
);

export default function SystemPay() {
  const styles = {
      head: {
        fontSize: "1.2em",
        // fontFamily: "Lora",
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
        textButton: "Стоимость обучения очное и дистанционное отделение",
        text: (
          <div style={{ textAlign: "left" }}>
            <h3 style={styles.head}>
              Стоимость обучения на очное отделение {price} рублей
            </h3>
            <h3 style={styles.head}>
              Стоимость обучения на дистанционное отделение {price} рублей
            </h3>
            <List
              style={styles.text}
              arr={[
                <span>Полная стоимость обучения: {price} рублей</span>,
                <span>
                  Как платить: Вы вносите аванс, бронируете место, начинаете
                  учится; полную оплату курса необходимо внести до 3 занятия.
                </span>,
                <span>
                  Доступна банковская рассрочка на 10 месяцев: 2500 рублей в
                  месяц. (без переплаты),
                </span>,
                <span>
                  Доступна скидка 10% при внесении оплаты за курс в течение 48
                  часов с момента бронирования места
                </span>
              ]}
            />
            <Button
              credit={false}
              link="https://billing.styleschool.ru/event/vXp2Kkhn7FGFJvoTw"
              textButton="Забронировать место в группе"
              style={{ width: "fit-content", maxWidth: 300 }}
            />
          </div>
        )
      }
    };

  return (
    <div>
      <ScrollableAnchor id={"price"}>
        <h2
          style={{
            fontWeight: 700,
            color: "rgb(100,100,100)",
            textAlign: "center",
            marginTop: 48
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
