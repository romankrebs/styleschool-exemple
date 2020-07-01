import React from "react";
import Dates from "../../components/date-and-price";
import { dates, DateToString } from "../shedule/dates";

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        title="Дистанционно"
        date={
          dates.conceptsOfFashion ? DateToString(dates.conceptsOfFashion) : null
        }
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
          false
          //   <div>
          //     <p
          //       style={{
          //         fontSize: "2em",
          //         textAlign: "center",
          //         lineHeight: "1.4em",
          //         fontWeight: 500,
          //         color: "rgb(160,0,0)"
          //       }}
          //     >
          //       60
          //       <sup style={{ fontSize: "0.8em" }}>000</sup> руб
          //       <br />
          //       <span
          //         style={{
          //           color: "rgb(100,100,100)",
          //           fontSize: "0.5em",
          //           fontWeight: 400
          //         }}
          //       >
          //         или
          //       </span>
          //       <br />
          //       20
          //       <sup style={{ fontSize: "0.8em" }}>000</sup> руб в месяц
          //     </p>
          //     <p
          //       style={{
          //         fontSize: "1em",
          //         textAlign: "center",
          //         lineHeight: "1.4em",
          //         fontWeight: 400,
          //         color: "rgb(100,100,100)"
          //       }}
          //     >
          //       После бронирования места в группе Вы получаете доступ к
          //       демо&nbsp;лекциям, мы оформляем зачисление на&nbsp;курс.
          //     </p>
          //     <p
          //       style={{
          //         fontSize: "1em",
          //         textAlign: "center",
          //         lineHeight: "1.4em",
          //         fontWeight: 400,
          //         color: "rgb(100,100,100)"
          //       }}
          //     >
          //       В случае отказа от обучения аванс возвращается.
          //     </p>
          //   </div>
        }
        styeleRightBox={{ paddingTop: 10, paddingBottom: 10 }}
        link="https://billing.styleschool.ru/event/FgsGzRdPJm8nT6Qiw"
      />
    </div>
  );
};

export default DatesExport;
