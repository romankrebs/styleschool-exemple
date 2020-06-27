import React from "react";
import Dates from "../../components/dates-credit-reservation";

const DataAndCredit = function(props) {
  return (
    <Dates
      link="https://billing.styleschool.ru/event/ossE5hs6F2mFagGCY"
      price="100000"
      avans="900"
      nameCourse="Международные коммуникации, презентация бренда на глобальном рынке, повышение квалификации (рассрочка 10 мес по 10000 руб)"
      data="10 марта 2020 г."
      textRightBlock={
        <span>
          Стоимость курса: 100
          <sup>000</sup> руб.
          <br />
          Выпускникам ВШСДТ и студентам предоставляется супер&nbsp;скидка
          <br />
          После бронирования места в группе Вы получаете доступ к&nbsp;демо
          лекциям, мы оформляем зачисление на курс
          <br />В случае отказа от обучения сумма брони возвращается.
        </span>
      }
      formsEducation={"Дистанционно | Очно"}
      smallHead
    />
  );
};

export default DataAndCredit;
