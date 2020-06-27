import React from "react";
import { Grid, Paper, Hidden } from "@material-ui/core";
// import Paragraph from "../../components/p-array";
import YouTube from "react-youtube";

function Player(props) {
  function _onReady(event) {
    event.target.pauseVideo();
  }

  const linkVideo = props.link; // "YcotpHqhNnU";
  const style = {
    fontFamily: "Roboto",
    fontSize: "1em",
    padding: "1.55em",
    paddingTop: 0,
    color: "rgb(100,100,100)",
    textAlign: "left",
    lineHeight: "1.6em",
    margin: 0
  };

  return (
    <div style={{ paddingTop: "1.6em" }}>
      <Paper
        style={{
          padding: "1em",
          background: "rgb(240,250,255)"
        }}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <p style={style}>
              Онлайн-трансляция <b>{props.title}</b>
              {/* Онлайн-трансляция «Кем может работать стилист и имиджмейкер» */}
              {/* Онлайн-трансляция «Личный бренд и продвижение в сети» */}
              <br />
              <span style={{ fontSize: "0.9em" }}>{props.text}</span>
            </p>
            {props.teacher ? (
              <p style={style}>Ведущая: {props.teacher}.</p>
            ) : null}
            <p style={style}>
              Начало {props.date} в {props.time} по мск
            </p>
            <p style={{ ...style, paddingBottom: 0 }}>
              <a href={`https://youtu.be/${linkVideo}`}>
                Трансляция доступна на YouToube канале ВШСДТ. Здесь Вы можете
                задавать вопросы >>>
              </a>
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <Hidden mdUp>
              <YouTube
                videoId={linkVideo}
                onReady={_onReady}
                opts={{ width: "95%" }}
              />
            </Hidden>
            <Hidden smDown>
              <YouTube
                videoId={linkVideo}
                onReady={_onReady}
                opts={{ height: 360, width: 600 }}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Player;
