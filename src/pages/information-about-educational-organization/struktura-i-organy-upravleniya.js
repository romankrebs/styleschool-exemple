import React from "react";
import Pattern from "./pattern";
import { Link } from "react-router-dom";

const font = "Roboto";

const Struktura = props => {
  return (
    <div>
      <Pattern
        title="Структура и органы управления образовательной организацией"
        table={[
          [
            <b style={{ fontFamily: font }}>
              Наименование органа управления /<br />
              структурного подразделения
            </b>,
            <b style={{ fontFamily: font }}>
              ФИО руководителя структурного подразделения
            </b>,
            <b style={{ fontFamily: font }}>
              Должность руководителя структурного подразделения
            </b>,
            <b style={{ fontFamily: font }}>
              Адрес местонахождения структурного подразделения
            </b>,
            <b style={{ fontFamily: font }}>
              Адрес официального сайта структурного подразделения
            </b>,
            <b style={{ fontFamily: font }}>
              Адреса электронной почты структурного подразделения
            </b>,
            <b style={{ fontFamily: font }}>
              Положение об органе управления /<br />о структурном подразделении
            </b>
          ],
          ["Органы управления образовательной организации:"],
          [
            "Генеральный директор  АНО ДПО ВШСДТ",
            "Гулиенко Иван Анатольевич",
            "Генеральный директор  АНО ДПО ВШСДТ",
            "129085, г. Москва, проспект Мира, дом 101, стр.1, офис 600",
            <Link to="/">www.styleschool.ru</Link>,
            <a href="mailto:info@styleschool.ru">info@styleschool.ru</a>,
            <a href="/download/reshenie-1-o-sozdanii-obrazovateljnoy-organizatsii.pdf">
              Решение №1 о создании образовательной организации
            </a>
          ]
        ]}
        celspace={{
          cell: 1,
          space: 7
        }}
      />
    </div>
  );
};

export default Struktura;
