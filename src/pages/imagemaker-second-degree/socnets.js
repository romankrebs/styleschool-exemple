import React from "react";
import { Grid } from "@material-ui/core";

// import Button0 from "../../components/button0";
import Socnets from "../../components/socnets-icons-buttons";

export default function SocnetsComponent(props) {
  return (
    <Grid container justify="center" alignItems="center" style={{}}>
      <Grid item xs={12} md={7} style={{ maxwidth: 500 }}>
        <div style={{ height: 40 }} />
        <h2
          style={{
            fontFamily: props.font ? props.font.title : "Lora",
            fontSize: "1.8em",
            color: "rgb(100,0,0)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "24px 0"
          }}
        >
          Хотите узнать подробнее?
        </h2>
        <div style={{ textAlign: "center", maxWidth: 300, margin: "0 auto" }}>
          <Socnets />
        </div>
      </Grid>
      <Grid xs={12} md={7} style={{ maxWidth: 500 }}>
        <div style={{ margin: "0 auto", padding: 20, textAlign: "center" }}>
          <p
            style={{
              // fontFamily: "Roboto",
              textAlign: "center",
              fontSize: "1em",
              color: "rgb(21,101,192)",
              fontWeight: 400
            }}
          >
            <a href="tel:+79160580091" style={{ color: "rgb(21,101,192)" }}>
              +7 (916) 058-00-92
            </a>
            <br />
            <span style={{ color: "rgb(100,100,100)" }}>
              (Специалист приемной комиссии Евгения Пименова)
            </span>
            <br />
            <br />
            <a href="tel:84952218935" style={{ color: "rgb(21,101,192)" }}>
              8 (495) 221-89-35
            </a>
            <br />
            <a href="tel:88005507893" style={{ color: "rgb(21,101,192)" }}>
              8 (800) 550-78-93
            </a>
          </p>
        </div>
        <div style={{ height: 40 }} />
      </Grid>
    </Grid>
  );

  // const content = {
  //   vk: {
  //     image: "/img/vk_color.svg",
  //     color: "rgb(81,129,184)",
  //     text: "Получать уведомления",
  //     link: ""
  //   },
  //   facebook: {
  //     image: "/img/facebook_color.svg",
  //     color: "rgb(59,89,152)",
  //     text: "Подписаться в Facebook",
  //     link:
  //       "https://m.me/203865566363088?ref=subscribe_cda4daa5-8724-18e3-2095-016955c0a5a1"
  //   },
  //   telegram: {
  //     image: "/img/telegram_color.svg",
  //     color: "rgb(30,150,200)",
  //     text: "Подписаться в Telegram",
  //     link:
  //       "https://telegram.me/Styleschool_bot?start=subscribe_cda4daa5-8724-18e3-2095-016955c0a5a1"
  //   },
  //   viber: {
  //     image: "/img/viber.svg",
  //     color: "rgb(89,38,124)",
  //     text: "Подписаться в Viber",
  //     link:
  //       "viber://pa?chatURI=styleschool&context=subscribe_cda4daa5-8724-18e3-2095-016955c0a5a1"
  //   },
  //   phone: {
  //     a: {
  //       link: "tel:8 (495) 221-89-35",
  //       nomer: "8 (495) 221-89-35"
  //     },
  //     b: {
  //       link: "tel:8 (800) 550-78-93",
  //       nomer: "8 (800) 550-78-93"
  //     }
  //   },
  //   message: "Заказать звонок",
  //   head: "Хотите узнать подробности?"
  // };

  // return (
  //   <Socnets
  //     facebook={{
  //       image: content.facebook.image,
  //       color: content.facebook.color,
  //       text: content.facebook.text,
  //       link: content.facebook.link
  //     }}
  //     vk={{
  //       image: content.vk.image,
  //       color: content.vk.color,
  //       text: content.vk.text,
  //       link: content.vk.link
  //     }}
  //     telegram={{
  //       image: content.telegram.image,
  //       color: content.telegram.color,
  //       text: content.telegram.text,
  //       link: content.telegram.link
  //     }}
  //     viber={{
  //       image: content.viber.image,
  //       color: content.viber.color,
  //       text: content.viber.text,
  //       link: content.viber.link
  //     }}
  //     head={content.head}
  //     message={content.message}
  //     phone={content.phone}
  //   />
  // );
}
