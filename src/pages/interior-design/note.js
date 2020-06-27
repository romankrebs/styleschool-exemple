import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Note(props) {
  return (
    <div style={{ padding: 20 }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ padding: 20, background: "rgba(240,240,240,1)" }}
      >
        <Grid item xs={2} md={2} style={{ textAlign: "center" }}>
          <img
            src="/img/info-blue.svg"
            alt="информация"
            style={{ height: 64 }}
          />
        </Grid>
        <Grid item xs={10} md={10} style={{}}>
          <p
            style={{
              fontSize: "1em",
              paddingBottom: 0,
              margin: 0
            }}
          >
            В программу курса включено онлайн обучение основам работы в
            графических редакторах <b>Adobe Photoshop</b>, <b>Gimp</b>.
          </p>
          <p
            style={{
              // fontFamily: "Roboto",
              fontSize: "1em",
              paddingTop: 10,
              margin: 0
            }}
          >
            Требование для изучения графических программ: владение компьютером
            на уровне продвинутого пользователя, наличие установленных
            графических программ или установка и использование облачных ресурсов
            в соответствии с предоставленной инструкцией.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
