import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "../../components/button-reserved";
// import _ from "lodash";

// const axios = require("axios");

const styles = {
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.6em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    margin: 0,
    padding: "12px 0"
  },
  h2: {
    // fontFamily: "Roboto",
    // fontSize: "1.8em",
    // color: "rgb(80,80,80)",
    textAlign: "left"
    // fontWeight: 500,
    // margin: 8,
    // padding: "12px 0",
    // paddingTop: 32
  }
};

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { redirect: false };
//   }
//   render() {
//     let callTouchOptions;
//     if (_.get(process, "browser"))
//       callTouchOptions = {
//         method: "get",
//         url:
//           "https://api-node13.calltouch.ru/calls-service/RestAPI/requests/35712/register/",
//         params: {
//           subject: "to_billing",
//           sessionid: window.call_value,
//           comment: window.location.href
//         }
//       };
//     if (!this.state.redirect) {
//       return (
//         <a
//           href={
//             this.props.link ||
//             "https://billing.styleschool.ru/event/wJrgKJ8KC5QnEPgm3"
//           }
//           onClick={e => {
//             e.preventDefault();
//             axios(callTouchOptions);
//             this.setState({ redirect: true });
//           }}
//         >
//           <div
//             style={{
//               background: "rgb(123,143,87)",
//               color: "rgb(255,255,255)",
//               fontSize: "1em",
//               textAlign: "center",
//               padding: 8,
//               borderRadius: 4,
//               maxWidth: 200,
//               margin: "0 auto"
//             }}
//           >
//             Забронировать
//           </div>
//         </a>
//       );
//     } else {
//       window.location.href =
//         "https://billing.styleschool.ru/event/wJrgKJ8KC5QnEPgm3";
//       return null;
//     }
//   }
// }

const Tile = props => {
  return (
    <Paper
      style={{
        padding: 10
      }}
    >
      <h3 style={styles.h3}>{props.head}</h3>
      <p
        style={{
          background: "rgb(240,240,240)",
          fontSzie: "1em",
          textAlign: "center",
          color: "rgb(100,100,100)"
        }}
      >
        {props.date}
      </p>
      <p
        style={{
          fontSize: "0.9em",
          textAlign: "center",
          color: "rgb(100,100,100)"
        }}
      >
        {props.price}
      </p>
      <Button link="https://billing.styleschool.ru/event/wJrgKJ8KC5QnEPgm3" />
    </Paper>
  );
};

export default function Dates(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>Ближайший набор</h2>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20 }}>
        <Tile
          head="Очно"
          date="5-6 октября 2019"
          price={
            <span>
              Внесите аванс 2000 рублей
              <br />
              Оформите документы
              <br />
              Забронируйте место в группе
            </span>
          }
        />
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20 }}>
        <Paper style={{ padding: 10 }}>
          <h3
            style={{
              fontSize: "1.2em",
              textAlign: "center",
              fontWeight: 700,
              color: "rgb(100,100,100)"
            }}
          >
            Стоимость
          </h3>
          <p
            style={{
              fontSize: "2em",
              textAlign: "center",
              fontWeight: 700,
              color: "rgb(160,0,0)"
            }}
          >
            20 <sup style={{ fontSize: "0.6em" }}>000</sup> руб.
          </p>
          <p
            style={{
              fontSize: "1em",
              textAlign: "center",
              lineHeight: "1.4em",
              fontWeight: 400,
              color: "rgb(100,100,100)"
            }}
          >
            Для записи на курс внесите аванс и оформите договор.
            <br />В случае отказа от обучения аванс возвращается.
          </p>
        </Paper>
      </Grid>
    </Grid>
  );
}
