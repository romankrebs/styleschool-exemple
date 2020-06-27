import React from "react";
import Dates0 from "../../components/date-and-price";
import Dates from "../../components/dates-config";

export const datas = {
  online: ["28 октября 2019"],
  ofline: ["27 ноября 2019"]
};

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        styleHead={{ textAlign: "center" }}
        content={[
          // {
          //   type: true,
          //   title: "Online",
          //   date: datas.online[0],
          //   text: (
          //     <span>
          //       Внесите аванс 2000 рублей
          //       <br />
          //       Получите доступ к демо лекциям
          //       <br />
          //       Начинайте учится с группой
          //     </span>
          //   ),
          //   link: "https://billing.styleschool.ru/event/7mGtHtbH3sHWufCYm"
          // },
          {
            type: true,
            title: "Очно",
            date: datas.ofline[0],
            text: (
              <span>
                Внесите аванс 2000 рублей
                <br />
                Получите доступ к демо лекциям
                <br />
                Начинайте учится с группой
              </span>
            ),
            link: "https://billing.styleschool.ru/event/vXp2Kkhn7FGFJvoTw"
          },
          {
            text: (
              <p
                style={{
                  fontSize: "1em",
                  textAlign: "center",
                  lineHeight: "1em",
                  fontWeight: 400,
                  color: "rgb(100,100,100)",
                  lineHeight: "2em",
                  padding: 12
                }}
              >
                После бронирования места в группе Вы получаете доступ к демо
                лекциям, мы оформляем зачисление на курс.
                <br />В случае отказа от обучения аванс возвращается.
              </p>
            )
          }
        ]}
        styeleBox={{ paddingTop: 12, paddingBottom: 16 }}
      />
    </div>
  );
};

export default DatesExport;
