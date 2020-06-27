import React from "react";
import Expand from "../../components/expanded";

const Dates = props => {
  return (
    <div style={{ padding: "12px 0" }}>
      <Expand
        summary={{
          text: (
            <div
              style={{
                fontFamily: props.font ? props.font.title : "inherit",
                fontSize: props.font ? props.font.size : "1em",
                fontWeight: 400,
                textAlign: "left",
                margin: 0,
                padding: 0,
                color: props.titleColor ? props.titleColor : "rgb(100,100,100)",
                ...props.titleStyle
              }}
            >
              <span
                style={{
                  color: "rgb(160,60,60)"
                }}
              >
                {props.date}
              </span>
              {props.title}
            </div>
          ),
          style: {
            background: props.bkg ? props.bkg : "transparent"
          }
        }}
        details={{
          text: (
            <div>
              <div
                style={{
                  fontFamily: props.font ? props.font.text : "inherit",
                  fontSize: props.font ? props.font.size : "1em",
                  fontWeight: 400,
                  textAlign: "left",
                  margin: 0,
                  padding: 0,
                  color: props.textColor ? props.textColor : "rgb(100,100,100)",
                  ...props.textStyle
                }}
              >
                <span
                  style={{
                    fontWeight: 700
                  }}
                >
                  {props.subtitle}
                </span>
                &ensp;
                {props.text}
              </div>
              <div
                style={{
                  fontFamily: props.font ? props.font.text : "inherit",
                  fontSize: props.font ? props.font.size : "1em",
                  fontWeight: 400,
                  textAlign: "center",
                  margin: 0,
                  padding: 0,
                  color: "rgb(140,100,100)",
                  ...props.saleStyle
                }}
              >
                {props.sale}
              </div>
            </div>
          ),
          style: {}
        }}
      />
    </div>
  );
};

export default Dates;
