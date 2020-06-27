import React from "react";

import Flip from "react-reveal/Flip";

export default class Card extends React.Component {
  state = {
    face: true
    //face: this.props.face
  };

  fliper = () => {
    return this.setState({ face: !this.state.face });
  };

  content = {
    crown: "/img/modern-fashion-style/crown.svg",
    image: "/img/modern-fashion-style/migranov.jpg",
    title: (
      <span>
        Белая рубашка &ndash; константа в мире моды, актуальна во все времена
      </span>
    ),
    teacher: "Руслан Мигранов",
    descript: "Онлайн-лекция",
    head: "История моды",
    text: (
      <span>
        Мы рассматриваем историю белой рубашки в контексте истории белого цвета.
        Насколько Белая рубашка была актуальна в разные времена, рассмотрим
        разные казусы, интересные истории. Как Белая рубашка входила в обиход
        городских жителей и как спорт повлиял на распространение белой рубашки в
        повседневности.
      </span>
    ),
    date: "14 марта",
    time: (
      <span>
        19
        <sup>00</sup> по МСК
      </span>
    ),
    duration: "45 минут"
  };

  render() {
    var styleCard = {
      width: 220,
      height: 450,
      boxSizing: "border-box",
      boxShadow: "0 0 5px 2px rgba(0,0,0,0.125)",
      background: `url(${this.props.image}) top left / 220px auto no-repeat`,
      //backgroundSize: "220px auto",
      margin: "0 auto",
      padding: 0,
      paddingTop: 125,
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
      fontFamily: "Roboto",
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
      textDecoration: "underline",
      cursor: "pointer",
      textAlign: "left",
      color: "rgb(255,255,255)",
      fontFamily: "Roboto",
      fontSize: 12,
      padding: 0,
      margin: 0
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
      height: 250,
      padding: 15,
      color: "rgb(255,255,255)",
      boxSizing: "border-box",
      background:
        "linear-gradient(to top, rgb(10,119,213) 0%, rgb(209,219,17) 0%, rgb(151,196,15) 17%, rgb(73,193,32) 35%, rgb(88,191,51) 58%, rgb(101,188,69) 79%, rgb(83,178,87) 100%)"
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
      fontFamily: "Roboto",
      fontSize: 13,
      fontWeight: 400,
      textAlign: "left",
      padding: 0,
      paddingTop: 10,
      margin: 0,
      color: "rgb(100,100,100)"
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
            <div style={styleCrownBg} />
            <div style={styleCrown} />
            <div style={styleTrigon} />
            <div style={styleBkg}>
              <p style={styleTitle}>{this.props.title}</p>
              <p style={styleTeacher}>{this.props.teacher}</p>
              <p style={styleDescript}>{this.props.descript}</p>
              <p style={styleButton}>Доступно по подписке</p>
              <p style={styleLink}>Смотрите подробнее</p>
            </div>
          </div>
        </Flip>
        <Flip right>
          <div style={styleShirt} onClick={this.fliper}>
            <h3 style={styleHead}>{this.props.head}</h3>
            <p style={styleTitleShirt}>{this.props.title}</p>
            <p style={{ ...styleTeacher, color: "rgb(100,100,100)" }}>
              {this.props.teacher}
            </p>
            <div style={styleTime}>
              <p style={styleTextTime}>{this.props.descript}</p>
              <p style={styleTextTime}>
                <img
                  src="/img/modern-fashion-style/calendar.svg"
                  alt=""
                  style={styleImageTime}
                />
                &nbsp;
                {this.props.date}
              </p>
              <p style={styleTextTime}>
                <img
                  src="/img/modern-fashion-style/time.svg"
                  alt=""
                  style={styleImageTime}
                />
                &nbsp;
                {this.props.time}
              </p>
              <p style={styleTextTime}>
                <img
                  src="/img/modern-fashion-style/clocks.svg"
                  alt=""
                  style={styleImageTime}
                />
                &nbsp;
                {this.props.duration}
              </p>
            </div>
            <p style={styleText}>{this.props.text}</p>
          </div>
        </Flip>
      </div>
    );
  }
}
