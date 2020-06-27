import React from "react";
import Graduates from "./graduates-about";
import Tiles from "./tiles";
import Docs from "./docs";
import Targets from "./about-prof";
import Practica from "./practica";
import Space from "./space";

const AboutEducation = props => {
  return (
    <div>
      <Tiles
        image1="/img/i2v-test/diplom-girls.jpg"
        image2="/img/i2v-test/graduates-about.jpg"
        title1="Дипломы"
        title2="Выпускники про обучение"
        content1={<Docs font={props.font} />}
        content2={<Graduates font={props.font} />}
        colorText={{
          left: "rgb(255,255,255)",
          right: "rgb(255,255,255)"
        }}
      />
      <Tiles
        image1="/img/i2v-test/targets.jpg"
        image2="/img/i2v-test/girl-pc.jpg"
        title1="Про обучение"
        title2="Личный кабинет"
        colorText={{
          left: "rgb(255,255,255)",
          right: "rgb(255,255,255)"
        }}
        content1={
          <div>
            <Targets font={props.font} />
            <Practica font={props.font} />
          </div>
        }
        content2={
          <div>
            <Space font={props.font} />
            <a href="https://billing.styleschool.ru">
              <div
                style={{
                  margin: "10px auto",
                  background: "rgb(123,143,87)",
                  borderRadius: 4,
                  padding: 4,
                  maxWidth: 250,
                  textAlign: "center",
                  color: "rgb(255,255,255)",
                  fontSize: "1em",
                  fontWeight: 500
                }}
              >
                Войти в личный кабинет
              </div>
            </a>
          </div>
        }
      />
    </div>
  );
};

export default AboutEducation;
