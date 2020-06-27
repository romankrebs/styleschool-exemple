import React from "react";
import Dates from "../../components/dates-credit-reservation";

const DataAndCredit = function(props) {
  return (
    <Dates
      link="https://billing.styleschool.ru/event/NGXwbiM58AAe4p2xC"
      price="25000"
      avans="900"
      nameCourse="Технология запуска startup – проектов в индустрии моды и дизайна, повышение квалификации (рассрочка 10 мес по 2500 руб)"
      data="25 января 2020 г."
      textRightBlock={
        <span>
          Стоимость курса: 25
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
