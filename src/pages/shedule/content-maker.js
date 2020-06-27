import React from "react";
import { Link } from "react-router-dom";

const ContentMaker = props => {
  const styles = {
    head: {
      fontFamily: "inherit",
      fontSize: "1.2em",
      fontWeight: 700,
      color: "rgb(123,143,87)",
      paddingLeft: 3
    },
    data: {
      fontFamily: "inherit",
      fontSize: "1em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      paddingLeft: 3
    },
    descript: {
      fontFamily: "inherit",
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      paddingLeft: 3
    }
  };

  return (
    <div>
      {props.content[0] ? (
        props.content.map((el, i) => (
          <div>
            <p style={styles.data}>{el.data}</p>
            <Link to={el.link}>
              <p style={styles.head}>{el.head}</p>
            </Link>
            <p style={styles.descript}>{el.descript}</p>
            <div
              style={{
                marginTop: 12,
                marginBottom: 12,
                height: 1,
                background:
                  "linear-gradient(to right, rgb(180,180,180) 0%, rgb(255,255,255) 75%, rgb(255,255,255) 100%)"
              }}
            />
          </div>
        ))
      ) : (
        <p style={{ ...styles.head, color: "rgb(100,100,100)" }}>
          Курсов в данном разделе пока не запланировано
        </p>
      )}
    </div>
  );
};

export default ContentMaker;
