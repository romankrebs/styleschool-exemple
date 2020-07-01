import React from "react";
import Forma from "./credit-form";
import ButtonReserved from "./button-reserved";

const Button = props => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <a href={props.link}>
        <div
          style={{
            background: "rgb(123,143,87)",
            color: "rgb(255,255,255)",
            fontSize: "1em",
            textAlign: "center",
            padding: 8,
            borderRadius: 4,
            maxWidth: 200,
            margin: "0 auto",
            boxSizing: "border-box",
            ...props.style
          }}
        >
          {props.textButton ? props.textButton : "Забронировать"}
        </div>
      </a> */}
      <ButtonReserved link={props.link} />
      {props.credit ? (
        <React.Fragment>
          <div style={{ height: 12 }} />
          <Forma
            sum={props.sum}
            name={props.name}
            test={props.test ? props.test : false}
            yellow={props.yellow ? true : false}
          />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Button;
