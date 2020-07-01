import React from "react";
import { Grid } from "@material-ui/core";
import TextBackComponent from "./textback";

function Button(props) {
  return (
    <div
      style={{
        textAlign: "center",
        width: 50
      }}
    >
      <a href={props.link}>
        <img src={props.image} alt={props.name} style={{ height: 48 }} />
      </a>
      <a href={props.link}>
        <p
          style={{
            font: "400 0.8em",
            color: "rgb(100,100,100)",
            textAlign: "center",
            margin: 0,
            padding: "4px 0"
          }}
        >
          {props.name}
        </p>
      </a>
    </div>
  );
}

export function Buttons(props) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={0}>
      <Grid item xs={3} md={3} style={{ maxWidth: 70 }}>
        <Button
          name="Facebook"
          link={"https://m.me/203865566363088?ref=" + props.link}
          image="/img/facebook-circle.svg"
        />
      </Grid>
      <Grid item xs={3} md={3} style={{ maxWidth: 70 }}>
        <Button
          name="Telegram"
          link={
            "https://telegram.me/Styleschool_bot?start=subscribe_" + props.link
          }
          image="/img/telegram-circle.svg"
        />
      </Grid>
      <Grid item xs={3} md={3} style={{ maxWidth: 70 }}>
        <Button
          name="Viber"
          link={
            "viber://pa?chatURI=styleschool&context=subscribe_" + props.link
          }
          image="/img/viber-circle.svg"
        />
      </Grid>
      <Grid item xs={3} md={3} style={{ maxWidth: 70 }}>
        <Button name="VKontakte" link="" image="/img/vk-circle.svg" />
      </Grid>
    </Grid>
  );
}

export default function Socnet(props) {
  return (
    <div>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={9} style={{ textAlign: "center" }}>
          <TextBackComponent />
        </Grid>
      </Grid>
    </div>
  );
}
