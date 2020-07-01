import React from "react";
import Phone from "../../components/phone-button";

function Element(props) {
  const styles = {
    head: {
      fontFamily: props.font || "inherit",
      fontSize: "1.6em",
      fontWeight: 500,
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: "8px 0",
      paddingTop: 30
    },
    subTitle: {
      fontFamily: props.font || "inherit",
      fontSize: "1em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: "8px 0"
    },
    image: {
      height: 28,
      margin: "10px 2px"
    },
    text: {
      fontFamily: props.font || "inherit",
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      lineHeight: "1.5rem",
      padding: 0
    }
  };

  return (
    <div>
      <h2 style={styles.head}>{props.head}</h2>
      {props.descript ? <p style={styles.text}>{props.descript}</p> : null}
      {props.persones.map((el, i) => (
        <div>
          {el.subTitle ? <p style={styles.subTitle}>{el.subTitle}</p> : null}
          <p style={styles.text} key={i}>
            {el.name ? el.name : null}
            {el.name ? " " : null}
            <span className={el.p800 ? "call_phone_hide" : "call_phone_2"}>
              {el.mobile ? (
                <Phone phone={el.tel} />
              ) : (
                <a href={"tel:" + el.tel}>{el.tel}</a>
              )}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Element;
