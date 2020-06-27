import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Slider from "react-slick";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

function Slide(props) {
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{
        padding: "0 30px"
      }}
    >
      <Grid item xs={6} md={6}>
        <div
          style={{
            textAlign: "right"
          }}
        >
          <img
            src={props.image}
            alt=""
            style={{
              borderRadius: "50%",
              height: 100
            }}
          />
        </div>
      </Grid>
      <Grid item xs={6} md={6} style={{ paddingLeft: 0, marginLeft: 0 }}>
        <h3
          style={{
            fontFamily: "Lora",
            fontSize: "1.5em",
            textAlign: "center",
            fontWeight: 500,
            color: "rgb(100,100,100)",
            margin: 0,
            padding: 0
          }}
        >
          {props.name}
        </h3>
        <p
          style={{
            // fontFamily: "Roboto",
            fontSize: "0.8em",
            textAlign: "center",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            margin: 0,
            padding: 0
          }}
        >
          {props.text}
        </p>
      </Grid>
    </Grid>
  );
}

function SliderVariant(props) {
  return (
    <Slider {...props.setting}>
      <Slide
        image="/img/profashion/teacher03.jpg"
        name="Татьяна Фомина"
        text="Художник-модельер, преподаватель и практикующий имидж-консультант. В Высшей школы стилистики ведет занятия в рамках дисциплины &quot;Профессинальные имидж-технологии&quot;"
      />
      <Slide
        image="/img/profashion/teacher04.jpg"
        name="Светлана  Кононец"
        text="Практикующий имидж-стилист, дизайнер одежды, преподаватель Санкт-Петербургской школы телевидения, преподаватель Высшей школы стилистики."
      />
      <Slide
        image="/img/profashion/teacher05.jpg"
        name="Мэри Саргсян"
        text="Fashion-журналист, независимый автор глянца, продюсер ряда цифровых изданий, посвященных современному искусству."
      />
      <Slide
        image="/img/profashion/teacher02.jpg"
        name="Лиана  Бахова"
        text="Имидж-консультант, профайлер, автор программ по управлению впечатлением в бизнесе и межличностных коммуникациях"
      />
      <Slide
        image="/img/profashion/teacher01.jpg"
        name="Марина  Бонецкая"
        text="Художник-дизайнер, доцент, автор курсов по созданию корпоративного и персонального имиджа и стиля, член Международной Организации &quot;Союз дизайнеров&quot;."
      />
    </Slider>
  );
}

export default function Teachers() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  var settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  var styles = {
    h2: {
      fontFamily: "Lora",
      fontSize: "1.8em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      fontWeight: 500,
      margin: 8,
      padding: "12px 0",
      paddingBottom: 40
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={styles.h2}>Преподаватели</h2>
      <Hidden implementation="css" smDown>
        <SliderVariant setting={settings} />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <SliderVariant setting={settingsMobile} />
      </Hidden>
    </div>
  );
}
