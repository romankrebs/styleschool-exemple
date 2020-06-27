import React from "react";
import Dates from "../../components/date-and-price";
import { dates, DateToString } from "../shedule/dates";

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        title="Дистанционно"
        date={DateToString(dates.interiorDesign.online, true)}
        leftText={
          <span>
            Внесите аванс 2000 рублей
            <br />
            Получите доступ к демо лекциям
            <br />
            Начинайте учится с группой
          </span>
        }
        rightText={
          <div>
            <p
              style={{
                fontSize: "1.2em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 500,
                color: "rgb(100,100,100)"
              }}
            >
              Учиться от
              <span
                style={{
                  // fontSize: "1.4em",
                  fontWeight: 600,
                  color: "rgb(80,80,80)"
                }}
              >
                {" "}
                5<sup style={{ fontSize: "0.8em" }}>000</sup>{" "}
              </span>
              руб. в месяц в рассрочку
            </p>
            <p
              style={{
                fontSize: "1em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              После бронирования места в группе Вы получаете доступ к
              демо&nbsp;лекциям, мы оформляем зачисление на&nbsp;курс.
            </p>
            <p
              style={{
                fontSize: "1em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              В случае отказа от обучения аванс возвращается.
            </p>
          </div>
        }
        styeleRightBox={{ paddingTop: 10, paddingBottom: 10 }}
        link="https://billing.styleschool.ru/event/mTaknRNNduXrh7g7Q"
      />
    </div>
  );
};

export default DatesExport;
