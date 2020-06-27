import React from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

export default function Card(props) {
  var bkg = `url(${props.image}) top ${
    props.gPos ? props.gPos : props.imageHeight ? "center" : "left"
  } / ${
    props.imageHeight
      ? "auto 206px"
      : props.imageHeight && props.q
        ? "auto 180px"
        : "220px auto"
  } no-repeat`;

  var styleCard = {
    width: 220,
    height: 450,
    boxSizing: "border-box",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.125)",
    background: bkg,
    margin: "0 auto",
    padding: 0,
    paddingTop: props.q ? 180 : 125,
    border: 0,
    cursor: "pointer",
    display: "block"
  };
  var styleTrigon = {
    borderLeft: "110px solid rgb(83,178,87)",
    borderRight: "110px solid rgb(83,178,87)",
    borderTop: "75px solid transparent",
    height: 0,
    width: 0,
    marginTop: 0
  };
  var styleTitle = {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "left",
    padding: 0,
    margin: 0
  };
  var styleTeacher = {
    fontStyle: "italic",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "left",
    padding: 0,
    paddingTop: 10,
    margin: 0
  };
  var styleDescript = {
    fontStyle: "normal",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "left",
    padding: 0,
    paddingTop: 10,
    margin: 0
  };
  var styleButton = {
    boxSizing: "border-box",
    height: 28,
    width: 180,
    padding: 0,
    paddingTop: 3,
    marginLeft: "auto",
    marginRight: "auto",
    background: "rgba(255,255,255,1)",
    borderRadius: "14px",
    color: "rgb(80,80,80)",
    fontFamily: "Roboto",
    fontSize: 14,
    textAlign: "center"
  };
  var styleLink = {
    textDecoration: props.q ? "none" : "underline",
    cursor: "pointer",
    textAlign: props.q ? "center" : "left",
    color: props.color === "rose" ? "rgb(80,80,80)" : "rgb(255,255,255)",
    fontFamily: "Roboto",
    fontSize: 12,
    padding: 0,
    margin: 0,
    position: "absolute",
    bottom: 20,
    left: props.q ? 60 : 15
  };
  var styleCrownBg = {
    marginTop: -125,
    marginLeft: 160,
    height: 0,
    width: 0,
    borderLeft: "30px solid transparent",
    borderTop: "30px solid rgb(255,255,255)",
    borderRight: "30px solid rgb(255,255,255)",
    borderBottom: "30px solid transparent"
  };
  var styleCrown = {
    boxSizing: "border-box",
    marginTop: -60,
    marginLeft: 190,
    marginBottom: 100,
    height: 30,
    width: 30,
    border: 0,
    background:
      "url(/img/modern-fashion-style/crown.svg) top right / 30px 30px no-repeat, rgb(255,255,255)"
  };
  var styleBkg = {
    width: 220,
    height: props.q ? 275 : 250,
    padding: 15,
    paddingTop: props.q ? 24 : 15,
    color: props.color === "rose" ? "rgb(80,80,80)" : "rgb(255,255,255)",
    boxSizing: "border-box",
    background:
      props.color === "rose"
        ? "linear-gradient(-20deg, rgb(221,214,243) 0%, rgb(250,172,168) 100%, rgb(250,172,168) 100%)"
        : props.color === "blue"
          ? "linear-gradient(to top, rgb(2,80,197) 0%, rgb(175,63,212) 100%)"
          : "linear-gradient(to top, rgb(10,119,213) 0%, rgb(209,219,17) 0%, rgb(151,196,15) 17%, rgb(73,193,32) 35%, rgb(88,191,51) 58%, rgb(101,188,69) 79%, rgb(83,178,87) 100%)"
  };
  var styleCorner = {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: -5,
    right: 0,
    borderTop: "1px solid rgb(237,237,237)",
    borderLeft: "1px solid rgb(237,237,237)",
    background:
      props.color === "rose"
        ? "linear-gradient(135deg, rgba(209,208,222,1) 28%, rgba(209,208,222,0.7749474789915967) 42%, rgba(240,187,195,0.7413340336134453) 49%, rgba(224,204,204,1) 50%, rgba(255,255,255,0.16) 51%, rgba(255,255,255,0.62) 58%, rgba(255,255,255,1) 100%)"
        : props.color === "blue"
          ? "linear-gradient(135deg, rgba(209,208,222,1) 28%, rgba(209,208,222,0.7749474789915967) 42%, rgba(240,187,195,0.7413340336134453) 49%, rgba(224,204,204,1) 50%, rgba(255,255,255,0.16) 51%, rgba(255,255,255,0.62) 58%, rgba(255,255,255,1) 100%)"
          : "transparent"
  };

  return (
    <div>
      <Flip left>
        <div style={styleCard}>
          {props.crown ? (
            <React.Fragment>
              <div style={styleCrownBg} />
              <div style={styleCrown} />
            </React.Fragment>
          ) : null}
          {props.q ? null : <div style={styleTrigon} />}
          <Link to={props.link}>
            <div style={styleBkg}>
              <p style={styleTitle}>{props.title}</p>
              <p style={styleTeacher}>{props.teacher}</p>

              {props.descriptString ? (
                <div>
                  <p style={styleDescript}>{props.descript}</p>
                  <p style={styleDescript}>
                    <span
                      style={{
                        fontSize: "1.3em",
                        fontWeight: 700
                      }}
                    >
                      {props.date}
                    </span>
                  </p>
                </div>
              ) : (
                <p style={styleDescript}>
                  {props.descript}
                  &ensp;
                  <span
                    style={{
                      fontSize: "1.3em",
                      fontWeight: 700
                    }}
                  >
                    {props.date}
                    &ensp;
                    {props.time}
                  </span>
                </p>
              )}
              {props.subs ? (
                <p style={styleButton}>Доступно по подписке</p>
              ) : null}
              {props.free ? (
                <img
                  src="/img/modern-fashion-style/free.svg"
                  alt=""
                  style={{
                    height: 30,
                    marginTop: 15,
                    marginBottom: 15,
                    marginRight: 10
                  }}
                />
              ) : null}
              {props.onlineIcon ? (
                <img
                  src="/img/master-class/online.png"
                  alt="online"
                  style={{
                    height: 30,
                    marginTop: 15,
                    marginBottom: 15,
                    marginRight: 10
                  }}
                />
              ) : null}
              {props.oflineIcon ? (
                <img
                  src="/img/master-class/ofline.png"
                  alt="очно"
                  style={{
                    height: 30,
                    marginTop: 15,
                    marginBottom: 15,
                    marginRight: 10
                  }}
                />
              ) : null}
              {props.q ? (
                <div style={styleLink}>подробнее</div>
              ) : (
                <p style={styleLink}>Смотрите подробнее</p>
              )}
              {props.q ? <div style={styleCorner} /> : null}
            </div>
          </Link>
        </div>
      </Flip>
    </div>
  );
}
