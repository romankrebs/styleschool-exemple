import React from "react";
import Cot from "./cot";
import Space from "./space";
// import System from "./system-pay";

const Personal = props => {
  return (
    <Cot
      textButton="Личный кабинет"
      text={
        <div>
          <Space font={props.font} />
          {/* <System font={props.font} /> */}
        </div>
      }
      colorButton="linear-gradient(to bottom, rgb(153,143,107) 0%, rgb(143,123,87) 20%, rgb(143,123,87) 80%, rgb(138,118,82) 100%)"
    />
  );
};

export default Personal;
