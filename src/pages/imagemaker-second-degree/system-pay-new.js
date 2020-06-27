import React from "react";
import Cot from "./cot";
import List from "../../components/list";
import ScrollableAnchor from "react-scrollable-anchor";

const Pay = props => {
  return (
    <div>
      <div
        style={{
          fontSize: "1.3em",
          textAlign: "center",
          color: "rgb(110,90,90)"
        }}
      >
        В месяц: {props.monthRu}
        000 <span style={{ fontFamily: "Roboto" }}>&#8381;</span> или{" "}
        {props.monthEuro} &euro; | {props.monthUSD} $
      </div>
      <List
        arr={[
          <span>
            Оплата в рассрочку, в месяц: от {props.monthRu} тыс. рублей или{" "}
            {props.monthEuro} &euro; | {props.monthUSD} $
          </span>,
          <span>
            Полная стоимость обучения: {props.fullRu} тыс. рублей или{" "}
            {props.fullEuro} &euro; | {props.fullUSD} $
          </span>,
          "При единовременной оплате предоставляется скидка 10%"
        ]}
      />
      <div
        style={{
          fontStyle: "italic",
          color: "rgb(110,110,110)"
        }}
      >
        <List
          arr={[
            "* Возможно предоставление дополнительной скидки 10% на условиях раннего бронирования или на период действия специальных акций",
            "** Возможно обучение в кредит. Оформление кредита осуществляется на территории РФ через банк Тинькофф.",
            "*** Приведена стоимость очного обучения на полном курсе по программе «Имидж-консалтинг и fashion‑styling». Стоимость обучения на курсах по специализации или базовом курсе смотрите отдельно"
          ]}
          num="none"
        />
      </div>
    </div>
  );
};

const content = {
  online: {
    textButton: "Стоимость обучения, дистанционное отделение",
    text: (
      <Pay
        fullRu="180"
        fullEuro="2600"
        fullUSD="2950"
        monthRu="15"
        monthEuro="250"
        monthUSD="280"
      />
    )
  },
  extern: {
    textButton: "Стоимость обучения, заочное отделение",
    text: (
      <Pay
        fullRu="230"
        fullEuro="3350"
        fullUSD="3950"
        monthRu="18"
        monthEuro="270"
        monthUSD="300"
      />
    )
  },
  ofline: {
    textButton: "Стоимость обучения, очное отделение",
    text: (
      <Pay
        fullRu="250"
        fullEuro="3600"
        fullUSD="4050"
        monthRu="20"
        monthEuro="300"
        monthUSD="340"
      />
    )
  }
};

export default function SystemPay(props) {
  const styles = {
    head: {
      fontSize: "1.2em",
      fontFamily: props.font ? props.font.title : "Lora",
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
  };

  return (
    <div>
      <ScrollableAnchor id={"system-pay"}>
        <div style={{ height: 48 }} />
      </ScrollableAnchor>
      <h2
        style={{
          fontSize: "1.8em",
          fontFamily: props.font ? props.font.title : "Lora",
          fontWeight: 500,
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
      <Cot textButton={content.ofline.textButton} text={content.ofline.text} />
      <Cot textButton={content.extern.textButton} text={content.extern.text} />
      <Cot textButton={content.online.textButton} text={content.online.text} />
    </div>
  );
}
