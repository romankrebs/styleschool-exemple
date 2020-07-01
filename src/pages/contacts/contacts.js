import React from "react";

function Contacts(props) {
  return (
    <div>
      <p
        style={{
          fontFamily: "Roboto",
          fontSize: "1em",
          fontWeight: 700,
          color: "rgb(100,100,100)",
          textAlign: "left",
          margin: 0,
          padding: 0,
          paddingTop: 30,
          paddingBottom: "1rem"
        }}
      >
        {props.head}
      </p>
      <p
        style={{
          fontFamily: "Roboto",
          fontSize: "1em",
          fontWeight: 400,
          color: "rgb(100,100,100)",
          textAlign: "left",
          margin: 0,
          padding: 0
        }}
      >
        {props.text}
      </p>
    </div>
  );
}

function All(props) {
  return (
    <div>
      <Contacts
        head="Адрес:"
        text={
          <span>
            129085, Москва, ул.&nbsp;Проспект Мира, д.&nbsp;101, стр.&nbsp;1,
            600&nbsp;офис.
          </span>
        }
      />
      <Contacts
        head="Телефон:"
        text={<span className="call_phone_2">+7 (495) 221-89-35</span>}
      />
      <Contacts head="Почта:" text="info@styleschool.ru" />
      <Contacts head="Время работы:" text="Пн - Пт с 10:00 до 19:00 (мск)" />
    </div>
  );
}

export default All;
