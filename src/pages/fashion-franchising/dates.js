import React from "react";
import Dates from "../../components/date-and-price";

const DatesExport = props => {
  return (
    <div>
      <Dates
        head="Ближайший набор"
        styleHead={{ textAlign: "center" }}
        title="Очно"
        date={<span>19 октября</span>}
        leftText={
          <span>
            Внесите аванс 2000 рублей
            <br />
            Оформите документы
            <br />
            Забронируйте место в группе
          </span>
        }
        rightText={
          <div>
            <p
              style={{
                fontSize: "1.6em",
                textAlign: "center",
                lineHeight: "1em",
                fontWeight: 500,
                color: "rgb(100,100,100)"
              }}
            >
              Стоимость
            </p>
            <p
              style={{
                fontSize: "2em",
                textAlign: "center",
                lineHeight: "1em",
                fontWeight: 500,
                color: "rgb(160,0,0)"
              }}
            >
              10 <sup style={{ fontSize: "0.8em" }}>000</sup> руб.
            </p>
            <p
              style={{
                fontSize: "0.9em",
                textAlign: "center",
                lineHeight: "1em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              Для записи на курс внесите аванс и оформите договор.
            </p>
            <p
              style={{
                fontSize: "0.9em",
                textAlign: "center",
                lineHeight: "1em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              В случае отказа от обучения аванс возвращается.
            </p>
          </div>
        }
        styeleRightBox={{ paddingTop: 12, paddingBottom: 16 }}
      />
    </div>
  );
};

export default DatesExport;
