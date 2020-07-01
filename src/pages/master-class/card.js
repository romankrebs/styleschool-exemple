import React from "react";
import { Grid } from "@material-ui/core";

import Flip from "react-reveal/Flip";

export default class Card extends React.Component {
  state = {
    face: true
    //face: this.props.face
  };

  fliper = () => {
    return this.setState({ face: !this.state.face });
  };

  // functionClick = (id) => this.props.functionClick(id);

  render() {
    var bkg = `url(${this.props.image}) top ${
      this.props.gPos
        ? this.props.gPos
        : this.props.imageHeight
          ? "center"
          : "left"
    } / ${
      this.props.imageHeight
        ? "auto 206px"
        : this.props.imageHeight && this.props.q
          ? "auto 180px"
          : "220px auto"
    } no-repeat`;

    var styleCard = {
      width: 220,
      height: 450,
      boxSizing: "border-box",
      boxShadow: "0 0 5px 2px rgba(0,0,0,0.125)",
      background: bkg,
      //backgroundSize: "220px auto",
      margin: "0 auto",
      padding: 0,
      paddingTop: this.props.q ? 180 : 125,
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
      textDecoration: this.props.q ? "none" : "underline",
      cursor: "pointer",
      textAlign: this.props.q ? "center" : "left",
      color: this.props.color === "rose" ? "rgb(80,80,80)" : "rgb(255,255,255)",
      fontFamily: "Roboto",
      fontSize: 12,
      padding: 0,
      margin: 0,
      position: "absolute",
      bottom: 20,
      left: this.props.q ? 60 : 15
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
      height: this.props.q ? 275 : 250,
      padding: 15,
      paddingTop: this.props.q ? 24 : 15,
      color: this.props.color === "rose" ? "rgb(80,80,80)" : "rgb(255,255,255)",
      boxSizing: "border-box",
      background:
        this.props.color === "rose"
          ? "linear-gradient(-20deg, rgb(221,214,243) 0%, rgb(250,172,168) 100%, rgb(250,172,168) 100%)"
          : this.props.color === "blue"
            ? "linear-gradient(to top, rgb(2,80,197) 0%, rgb(175,63,212) 100%)"
            : "linear-gradient(to top, rgb(10,119,213) 0%, rgb(209,219,17) 0%, rgb(151,196,15) 17%, rgb(73,193,32) 35%, rgb(88,191,51) 58%, rgb(101,188,69) 79%, rgb(83,178,87) 100%)"
    };
    var styleShirt = {
      overflowY: "auto",
      overflowX: "hidden",
      height: 450,
      width: 220,
      padding: 5,
      margin: "0 auto",
      boxSizing: "border-box",
      background: "rgba(255,255,255)",
      display: "none",
      boxShadow: "0 0 5px 2px rgba(0,0,0,0.125)"
    };
    var styleHead = {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: 700,
      textAlign: "center",
      padding: 0,
      paddingTop: 10,
      margin: 0,
      color: "rgb(80,80,80)"
    };
    var styleTitleShirt = {
      fontFamily: "Roboto",
      fontSize: 13,
      fontWeight: 700,
      textAlign: "left",
      padding: 0,
      paddingTop: 5,
      margin: 0,
      color: "rgb(100,100,100)"
    };
    var styleTime = {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      width: 180,
      padding: 0,
      paddingTop: 10,
      paddingBottom: 10,
      boxSizing: "border-box",
      border: 0,
      borderTop: "1px solid rgb(220,220,200)",
      borderBottom: "1px solid rgb(220,220,200)"
    };
    var styleTextTime = {
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: 400,
      textAlign: "left",
      padding: 0,
      paddingTop: 5,
      paddingBottom: 5,
      margin: 0,
      color: "rgb(100,100,100)"
    };
    var styleImageTime = {
      width: 16,
      height: 16
    };
    var styleText = {
      fontStyle: "italic",
      fontFamily: "Roboto", // "Lora"
      fontSize: 13,
      fontWeight: 400,
      textAlign: "left",
      padding: 0,
      paddingTop: 10,
      margin: 0,
      color: "rgb(100,100,100)"
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
        this.props.color === "rose"
          ? "linear-gradient(135deg, rgba(209,208,222,1) 28%, rgba(209,208,222,0.7749474789915967) 42%, rgba(240,187,195,0.7413340336134453) 49%, rgba(224,204,204,1) 50%, rgba(255,255,255,0.16) 51%, rgba(255,255,255,0.62) 58%, rgba(255,255,255,1) 100%)"
          : this.props.color === "blue"
            ? "linear-gradient(135deg, rgba(209,208,222,1) 28%, rgba(209,208,222,0.7749474789915967) 42%, rgba(240,187,195,0.7413340336134453) 49%, rgba(224,204,204,1) 50%, rgba(255,255,255,0.16) 51%, rgba(255,255,255,0.62) 58%, rgba(255,255,255,1) 100%)"
            : "transparent"
    };
    var styleButtonShirt = {
      boxSizing: "border-box",
      height: 28,
      width: 120,
      padding: 0,
      paddingTop: 3,
      margin: "8px 0",
      background: "rgba(0,0,255,1)",
      borderRadius: "14px",
      color: "rgb(255,255,255)",
      fontFamily: "Roboto",
      fontSize: 14,
      textAlign: "center",
      cursor: "pointer"
    };

    if (this.state.face) {
      styleCard.display = "block";
      styleShirt.display = "none";
    } else {
      styleCard.display = "none";
      styleShirt.display = "block";
    }

    return (
      <div>
        <Flip left>
          <div style={styleCard} onClick={this.fliper}>
            {this.props.crown ? (
              <React.Fragment>
                <div style={styleCrownBg} />
                <div style={styleCrown} />
              </React.Fragment>
            ) : null}
            {this.props.q ? null : <div style={styleTrigon} />}
            <div style={styleBkg}>
              <p style={styleTitle}>{this.props.title}</p>
              <p style={styleTeacher}>{this.props.teacher}</p>

              {this.props.descriptString ? (
                <div>
                  <p style={styleDescript}>{this.props.descript}</p>
                  <p style={styleDescript}>
                    <span
                      style={{
                        fontSize: "1.3em",
                        fontWeight: 700
                      }}
                    >
                      {this.props.date}
                      &ensp;
                      {this.props.time}
                    </span>
                  </p>
                </div>
              ) : (
                <p style={styleDescript}>
                  {this.props.descript}
                  &ensp;
                  <span
                    style={{
                      fontSize: "1.3em",
                      fontWeight: 700
                    }}
                  >
                    {this.props.date}
                    &ensp;
                    {this.props.time}
                  </span>
                </p>
              )}
              {this.props.subs ? (
                <p style={styleButton}>Доступно по подписке</p>
              ) : null}
              {this.props.free ? (
                <img
                  src="/img/modern-fashion-style/free.svg"
                  alt=""
                  style={{
                    height: 30,
                    marginTop: 10,
                    marginBottom: 15,
                    marginRight: 10
                  }}
                />
              ) : null}
              {this.props.onlineIcon ? (
                <img
                  src="/img/master-class/online.png"
                  alt="online"
                  style={{
                    height: 30,
                    marginTop: 10,
                    marginBottom: 15,
                    marginRight: 10
                  }}
                />
              ) : null}
              {this.props.oflineIcon ? (
                <img
                  src="/img/master-class/ofline.png"
                  alt="очно"
                  style={{
                    height: 30,
                    marginTop: 10,
                    marginBottom: 15,
                    marginRight: 10
                  }}
                />
              ) : null}
              {this.props.q ? (
                <div style={styleLink}>подробнее</div>
              ) : (
                <p style={styleLink}>Смотрите подробнее</p>
              )}
              {this.props.q ? <div style={styleCorner} /> : null}
            </div>
          </div>
        </Flip>
        {/*   --------оборотная сторона ----------------- */}
        <Flip right>
          <div style={styleShirt} onClick={this.fliper}>
            <h3 style={styleHead}>{this.props.head}</h3>
            <p style={styleTitleShirt}>{this.props.title}</p>
            <p style={{ ...styleTeacher, color: "rgb(100,100,100)" }}>
              {this.props.teacher}
            </p>
            {this.props.noView ? null : this.props.view && this.props.part ? (
              <div
                style={styleButtonShirt}
                onClick={() => this.props.setBillingId(this.props.id)}
              >
                Смотреть
              </div>
            ) : this.props.part ? (
              <div
                style={styleButtonShirt}
                onClick={() => this.props.setBillingId(this.props.id)}
              >
                Участвовать
              </div>
            ) : null}
            <div style={styleTime}>
              <p style={styleTextTime}>
                {this.props.online
                  ? "online"
                  : this.props.onlineText
                    ? this.props.onlineText
                    : "Очно"}
              </p>
              {this.props.date ? (
                <p style={styleTextTime}>
                  <img
                    src="/img/modern-fashion-style/calendar.svg"
                    alt=""
                    style={styleImageTime}
                  />
                  &nbsp;
                  {this.props.date}
                </p>
              ) : null}
              {this.props.time ? (
                <p style={styleTextTime}>
                  <img
                    src="/img/modern-fashion-style/time.svg"
                    alt=""
                    style={styleImageTime}
                  />
                  &nbsp;
                  {this.props.time} по МСК
                </p>
              ) : null}
              {this.props.duration ? (
                <p style={styleTextTime}>
                  <img
                    src="/img/modern-fashion-style/clocks.svg"
                    alt=""
                    style={styleImageTime}
                  />
                  &nbsp;
                  {this.props.duration}
                </p>
              ) : null}
              {this.props.part ? (
                <React.Fragment>
                  <p style={styleTextTime}>
                    {this.props.accessText || "Доступ по подписке"} &mdash;
                    0&#8381;
                  </p>
                  <p style={styleTextTime}>
                    Билет на лекцию &mdash;{" "}
                    {this.props.partPrice ? this.props.partPrice : "600"}
                    &#8381;
                  </p>
                  {this.props.free ? (
                    <img
                      src="/img/modern-fashion-style/free.svg"
                      alt=""
                      style={{
                        height: 30,
                        marginTop: "0.6em",
                        marginBottom: "0.2em"
                      }}
                    />
                  ) : null}
                </React.Fragment>
              ) : this.props.free ? (
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={8}>
                    <div
                      style={styleButtonShirt}
                      onClick={() => this.props.setBillingId(this.props.id)}
                    >
                      {this.props.view ? "Смотреть" : "Участвовать"}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <img
                      src="/img/modern-fashion-style/free.svg"
                      alt=""
                      style={{ height: 28 }}
                    />
                  </Grid>
                </Grid>
              ) : this.props.price ? (
                <div
                  style={{ ...styleButtonShirt, width: "auto" }}
                  onClick={() => this.props.setBillingId(this.props.id)}
                >
                  Купить за {this.props.price}
                  &#8381;
                </div>
              ) : null}
            </div>
            <p style={styleText}>{this.props.text}</p>
          </div>
        </Flip>
      </div>
    );
  }
}
