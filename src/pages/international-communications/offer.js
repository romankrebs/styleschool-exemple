import React from "react";
import Grid from "@material-ui/core/Grid";

import Block from "../../components/paper";

export default function Offer() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Block
          message1={{
            text: (
              <div>
                <svg
                  style={{ width: 24, height: 24, marginBottom: -5 }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="rgba(255,128,0,1)"
                    d="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z"
                  />
                </svg>
                <br />
                Специальное предложение
              </div>
            ),
            style: {
              color: "rgb(255,128,0)",
              fontSize: "1.3em",
              paddingTop: 30
            }
          }}
          message2={{
            text:
              "Запишитесь на консультацию со специалистом учебного отдела ВШС. Получите тестовый доступ к двум занятиям из курса.",
            style: { fontSize: "1.0em", padding: 30, paddingTop: 0 }
          }}
          block={{ style: {} }}
        />
      </Grid>
    </Grid>
  );
}
