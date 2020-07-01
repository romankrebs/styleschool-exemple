import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import LineStar from "../../components/line&star";
import Socnet from "../../components/want-to-know";
import BlocksGl from "../../components/blocks.js";
import Page from "../../components/page";
import DatesGl from "../../components/date-and-price";
import { dates, DateToString } from "../shedule/dates";
import { HorizontalForm } from "../../components/forms";
import Header from "../../components/header-fullscreen";
import Expanded from "../../components/expanded";
import Cot from "../../components/cot";
import List from "../../components/list";
import ScrollableAnchor from "react-scrollable-anchor";
import InfoBlock from "../../components/infoblock";

import Interior from "../../components/banner-interior-prof";
import Base from "../../components/banner-base-image-style";
import Moda from "../../components/banner-modern-moda-style2";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const styles = {
  h2: {
    fontFamily: "Roboto",
    fontSize: "2em",
    fontWeight: 700,
    textAlign: "center",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: "1.8em 0"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.6em",
    fontWeight: 700,
    textAlign: "left",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: 0,
    paddingBottom: "1.4em"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "left",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: 0,
    paddingBottom: "1em",
    lineHeight: "1.5em"
  },
  head: {
    fontSize: "1.2em",
    fontWeight: 700,
    margin: 0,
    padding: 12,
    textAlign: "center",
    color: "rgb(100,100,100)"
  },
  comment: {
    fontSize: "0.9em",
    color: "rgb(120,120,120)"
  },
  text: {
    color: "rgb(100,100,100)"
  },
  plus: {
    fontSize: "1.2em"
  }
};

const content = {
  after: {
    head: "После обучения можно",
    content: (
      <div>
        <ImageList
          style={styles.p}
          image={
            <img
              src="/img/green/star.svg"
              alt=""
              style={{ margin: "0 auto", height: 16 }}
            />
          }
          content={[
            "Понять специфику профессиональной деятельности дизайнера",
            "Работать последовательно по системе и тратить меньше времени и денег на переделки",
            "Профессионально делать замеры объекта и фотофиксацию, составлять рабочую документацию",
            "Делать удобные планировочные решения по законам эргономики, а также применять фишки смарт-пространств",
            "Делать грамотный эскизный проект, который возможно внедрить в реальной жизни"
          ]}
        />
        <p style={styles.p}>
          Учитесь. Получите базовые технические знания и технологии в ремонтных
          работах, которые необходимы в практике дизайнера. Получите шаблоны
          рабочей документации, по которым реально составлять всю необходимую
          техническую документацию к проекту. Владейте актуальными цветовыми и
          стилистическими тенденциями. Будьте в теме современного дизайна и
          декора интерьера.
        </p>
      </div>
    )
  }
};

function ImageList(props) {
  return (
    <div>
      <Grid container justify="space-between">
        {props.content.map((el, key) => (
          <React.Fragment>
            <Grid item xs={1} md={1}>
              {props.image}
            </Grid>
            <Grid item xs={11} md={11} key={key} style={props.style}>
              {el}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}

function Slider(props) {
  const imagesArr = [];
  const arrImages = () => {
    for (var i = 1; i < 34; i++) {
      if (i > 9) {
        imagesArr.push(<div data-src={`/img/interior-design/slide${i}.jpg`} />);
      } else {
        imagesArr.push(
          <div data-src={`/img/interior-design/slide0${i}.jpg`} />
        );
      }
    }
    return imagesArr;
  };

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      bullets={false}
    >
      {arrImages()}
    </AutoplaySlider>
  );
}

function Teacher(props) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={6}>
        <img src={props.image} alt={props.head} style={{ maxWidth: "100%" }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3 style={styles.h3}>{props.head}</h3>
        <p style={styles.p}>{props.text}</p>
      </Grid>
    </Grid>
  );
}

function Teachers() {
  return (
    <Grid container justify="center" alignItems="stretch" spacing={1}>
      <Grid item xs={12} md={12}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "left" }}
        >
          Ведущая курса
        </h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <Teacher
          head="Марина Костарнова (Бельгия)"
          text="Дизайнер, декоратор. Член Международного Союза дизайнеров. 20 лет стаж преподавания"
          image="/img/teachers/kostarnova.jpg"
        />
      </Grid>
    </Grid>
  );
}

function Tesisses() {
  const content = {
    head: "",
    a: {
      block: "Узнайте о профессии и этапах дизайн-проектирования",
      image: "/img/check.svg"
    },
    b: {
      block: "Научитесь искать идеи и создавать концепцию интерьера",
      image: "/img/check.svg"
    },
    c: {
      block: "Воплотите свою идею на основе проекта квартиры-студии",
      image: "/img/check.svg"
    },
    background: "rgba(255,255,255,1.0)",
    style: {
      fontFamily: "Futura-Normal"
    }
  };
  return (
    <InfoBlock
      head={content.head}
      a={{
        block: content.a.block,
        text: content.a.text,
        image: content.a.image
      }}
      b={{
        block: content.b.block,
        text: content.b.text,
        image: content.b.image
      }}
      c={{
        block: content.c.block,
        text: content.c.text,
        image: content.c.image
      }}
      style={content.style}
      bg={content.background}
    />
  );
}

function System() {
  let content = {
    online: {
      textButton: "Стоимость обучения, дистанционное отделение",
      text: (
        <div style={{ textAlign: "left" }}>
          <h3 style={styles.head}>
            Учитесь от 5000 руб. в месяц в рассрочку на 10 месяцев
          </h3>
          <List
            style={styles.text}
            arr={[
              <span>Полная стоимость обучения: 50000 рублей</span>,
              <span>
                Как платить: Вы вносите аванс, бронируете место, начинаете
                учится; полную оплату курса необходимо внести до 3 занятия.
              </span>,
              <span>
                Доступна банковская рассрочка на 10 месяцев: 5000 рублей в
                месяц. (без переплаты),
              </span>,
              <span>
                Доступна скидка 10% при внесении оплаты за курс в течение 48
                часов с момента бронирования места
              </span>
            ]}
          />
        </div>
      )
    }
  };

  return (
    <div>
      <ScrollableAnchor id={"price"}>
        <h2
          style={{
            fontWeight: 700,
            color: "rgb(100,100,100)",
            textAlign: "left",
            marginTop: 48,
            fontSize: "1.8em"
          }}
        >
          Стоимость обучения
        </h2>
      </ScrollableAnchor>
      <Cot textButton={content.online.textButton} text={content.online.text} />
      <div style={{ height: 64 }} />
    </div>
  );
}

function Contents() {
  const styles = {
    tile: {
      head: {
        fontFamily: "Roboto",
        fontSize: "2.1em",
        textAlign: "center",
        color: "rgb(100,100,100)",
        margin: 0
      },
      text: {
        fontSize: "1.5em",
        textAlign: "center",
        color: "rgb(100,100,100)",
        margin: 0
      }
    },
    programm: {
      summary: {
        fontSize: "1.2em",
        fontWeight: 700,
        color: "rgb(80,80,80)",
        backgroundColor: "rgba(220,220,220,1.0)"
      },
      details: {
        fontSize: "1em",
        fontWeight: 400,
        color: "rgb(80,80,80)",
        backgroundColor: "rgba(240,240,240,1.0)"
      },
      marker: {
        fontSize: "1em",
        color: "rgb(80,80,80)",
        textAlign: "center"
      }
    }
  };

  const contents = {
    tile1: {
      message1: "1",
      message2: "Дизайн-концепция"
    },
    tile2: {
      message1: "2",
      message2: "Стилизация"
    },
    tile3: {
      message1: "3",
      message2: "Эскиз-проект"
    },
    programm: {
      a: {
        head: (
          <React.Fragment>
            <div style={styles.programm.marker}>1</div>
            &emsp;Концептуальный модуль
          </React.Fragment>
        ),
        text: (
          <ul>
            <li>Интерьер в историческом и современном контексте</li>
            <li>Современные стилевые направления, тенденции и материалы</li>
            <li>Источники вдохновения.Идея и реализация</li>
            <li>Концептуальное проектирование</li>
          </ul>
        )
      },
      b: {
        head: (
          <React.Fragment>
            <div style={styles.programm.marker}>2</div>
            &emsp;Модуль Дизайн и стилизация
          </React.Fragment>
        ),
        text: (
          <ul>
            <li>Приемы и способы стилизации</li>
            <li>Цвет. Цветовые гармонии. Элементы цветопсихологии</li>
            <li>Композиция как способ гармонизации пространства</li>
            <li>Основы проектной графики. Графические инструменты</li>
          </ul>
        )
      },
      c: {
        head: (
          <React.Fragment>
            <div style={styles.programm.marker}>3</div>
            &emsp;Модуль Проектная реализация
          </React.Fragment>
        ),
        text: (
          <ul>
            <li>Планировочное решение</li>
            <li>Дизайн-проект: структура, подача</li>
            <li>Презентация идеи. Moodboard. Concept board</li>
            <li>Визуализация идеи дизайн-проекта в 2D графике</li>
          </ul>
        )
      }
    }
  };

  return (
    <Grid container justify="center" alignItems="flex-start" spacing={1}>
      <Grid item xs={12} md={12}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "left" }}
        >
          Программа курса
        </h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <Expanded
          summary={{
            text: contents.programm.a.head,
            style: styles.programm.summary
          }}
          details={{
            text: contents.programm.a.text,
            style: styles.programm.details
          }}
          expand
        />
        <Expanded
          summary={{
            text: contents.programm.b.head,
            style: styles.programm.summary
          }}
          details={{
            text: contents.programm.b.text,
            style: styles.programm.details
          }}
          expand
        />
        <Expanded
          summary={{
            text: contents.programm.c.head,
            style: styles.programm.summary
          }}
          details={{
            text: contents.programm.c.text,
            style: styles.programm.details
          }}
          expand
        />
      </Grid>
    </Grid>
  );
}

function Forms() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <div style={{ padding: 20 }}>
          <div
            style={{
              padding: 0,
              paddingLeft: 20,
              border: 0,
              borderLeft: "2px solid rgb(160,160,160)"
            }}
          >
            <h3
              style={{
                fontSize: "1.5em",
                textAlign: "left"
              }}
            >
              Online
            </h3>
            <p
              style={{
                fontSize: "1.1em",
                textAlign: "left",
                paddingLeft: 0
              }}
            >
              Курс состоит из видео уроков и интерактивных он-лайн занятий
              (вебинаров). Изучаете курс в любое время и там, где есть ноутбук и
              доступ в интернет. На вебинарах с преподавателем разбираете
              домашние задания и актуальные вопросы по курсу. Занятия доступны в
              записи.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={12}>
        <div style={{ padding: 20 }}>
          <div
            style={{
              padding: 0,
              paddingRight: 20,
              border: 0,
              borderRight: "2px solid rgb(160,160,160)"
            }}
          >
            <h3
              style={{
                fontSize: "1.5em",
                textAlign: "right"
              }}
            >
              Очно
            </h3>
            <p
              style={{
                fontSize: "1.1em",
                textAlign: "right",
                paddingRight: 0
              }}
            >
              Лекционные и практические занятия проходят в аудиториях ВШС.
              Доступно обучение в дневных и вечерних группах или группах
              выходного дня. Пропущенные занятия можно посетить с другой
              группой, или просмотреть аналогичные занятия в онлайн группах.
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

function Head() {
  return (
    <Header
      head1={
        <span>
          Интерьерный дизайн.
          <br />
          Интенсив
        </span>
      }
      descript={<span>От идеи до эскиз-проекта квартиры. Для начинающих.</span>}
      background="url(/img/interior-design/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(0,0,0,0.5)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation={false}
      bottomLine={<div style={{ height: 40 }} />}
    />
  );
}

function S() {
  return <span style={{ color: "rgb(255,125,0)" }}> | </span>;
}

function InFew() {
  return (
    <h3
      style={{
        textAlign: "center",
        fontSize: "1.4em",
        fontWeight: 700
      }}
    >
      3 месяца
      <S />
      24 занятия
      <S />
      96 академических часов
      <br />
      ОЧНО
      <S />
      ONLINE
    </h3>
  );
}

function Forma() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontSize: "1.8em",
            fontWeight: 700,
            color: "rgb(100,100,100)",
            textAlign: "left"
          }}
        >
          Записаться на собеседование
        </h2>
        <HorizontalForm />
      </Grid>
    </Grid>
  );
}

function Descript() {
  const style = {
    fontFamily: "Roboto",
    fontSize: "1em",
    margin: 0,
    padding: 0,
    lineHeight: "1.5em",
    color: "rgb(100,100,100)",
    fontWeight: 400,
    textAlign: "left"
  };

  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={6}>
        <p style={{ ...style, paddingBottom: "1em" }}>
          Успешное окончание курса позволит создать интерьер своей квартиры или
          продолжить обучение на курсе профессиональной переподготовки.
        </p>
        <p style={style}>
          Выпускникам курса выдается Диплом ВШСДТ. Данная работа будет считаться
          вступительной на годовой курс профподготовки.
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <Slider />
      </Grid>
    </Grid>
  );
}

function Dates(props) {
  return (
    <div>
      <DatesGl
        head="Ближайший набор"
        title="Дистанционно"
        date={DateToString(dates.interiorDesign.online, true)}
        leftText={
          <span>
            Внесите аванс 2000 рублей
            <br />
            Получите доступ к демо лекциям
            <br />
            Начинайте учится с группой
          </span>
        }
        rightText={
          <div>
            <p
              style={{
                fontSize: "1.2em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 500,
                color: "rgb(100,100,100)"
              }}
            >
              Учиться от
              <span
                style={{
                  // fontSize: "1.4em",
                  fontWeight: 600,
                  color: "rgb(80,80,80)"
                }}
              >
                {" "}
                5<sup style={{ fontSize: "0.8em" }}>000</sup>{" "}
              </span>
              руб. в месяц в рассрочку
            </p>
            <p
              style={{
                fontSize: "1em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              После бронирования места в группе Вы получаете доступ к
              демо&nbsp;лекциям, мы оформляем зачисление на&nbsp;курс.
            </p>
            <p
              style={{
                fontSize: "1em",
                textAlign: "center",
                lineHeight: "1.4em",
                fontWeight: 400,
                color: "rgb(100,100,100)"
              }}
            >
              В случае отказа от обучения аванс возвращается.
            </p>
          </div>
        }
        styeleRightBox={{ paddingTop: 10, paddingBottom: 10 }}
        link="https://billing.styleschool.ru/event/mTaknRNNduXrh7g7Q"
      />
    </div>
  );
}

function Advantage() {
  const content = {
    a: {
      image: "/img/green/seal.svg",
      head: "Диплом гос. Университета",
      text: "Вы получаете диплом с правом деятельности в изученной области."
    },
    b: {
      image: "/img/green/school.svg",
      head: "Теория и практика",
      text: "Фундаментальный подход и обучение с преподавателями практиками."
    },
    c: {
      image: "/img/green/cash-100.svg",
      head: "Цена успеха",
      text: "Обучение от 9900 руб/мес*, варианты оплаты: со скидкой, рассрочка."
    },
    d: {
      image: "/img/green/file-video.svg",
      head: "Всегда в теме",
      text:
        "Пропущенные занятия можно посмотреть в записи или посетить с другой группой."
    },
    e: {
      image: "/img/green/chart-line.svg",
      head: "Личностный рост",
      text: "Актуальные модные технологии и развитие творческого мышления."
    },
    f: {
      image: "/img/green/earth.svg",
      head: "Формы обучения",
      text: "Очное и дистанционное, позволяющее обучаться из любой точки мира."
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "left" }}
        >
          Преимущества обучения в Высшей школе стилистики
        </h2>
        <BlocksGl
          a={{
            image: content.a.image,
            head: content.a.head,
            text: content.a.text
          }}
          b={{
            image: content.b.image,
            head: content.b.head,
            text: content.b.text
          }}
          c={{
            image: content.c.image,
            head: content.c.head,
            text: content.c.text
          }}
          d={{
            image: content.d.image,
            head: content.d.head,
            text: content.d.text
          }}
          e={{
            image: content.e.image,
            head: content.e.head,
            text: content.e.text
          }}
          f={{
            image: content.f.image,
            head: content.f.head,
            text: content.f.text
          }}
          style={{
            head: {},
            text: {}
          }}
        />
      </Grid>
    </Grid>
  );
}

function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={4}>
        <Interior />
      </Grid>
      <Grid item xs={12} md={4}>
        <Base />
      </Grid>
      <Grid item xs={12} md={4}>
        <Moda />
      </Grid>
    </Grid>
  );
}

function After() {
  return (
    <Grid container justify="center" alignItems="stretch" spacing={2}>
      <Grid item xs={12} md={6}>
        <div
          style={{
            boxSizing: "border-box",
            padding: 20,
            textAlign: "center",
            fontSize: "1.1em",
            color: "rgb(80,80,80)",
            border: "5px dotted rgb(100,100,120)",
            height: "100%"
          }}
        >
          Успешное окончание курса позволит создать интерьер своей квартиры или
          продолжить обучение на курсе профессиональной переподготовки.
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            boxSizing: "border-box",
            padding: 20,
            height: "100%",
            textAlign: "center",
            fontSize: "1.1em",
            color: "rgb(80,80,80)",
            border: "5px dotted rgb(100,100,120)"
          }}
        >
          Выпускникам курса выдается сертификат ВШС при условии выполнения
          итоговой работы. Данная работа будет считаться вступительной на
          годовой курс профподготовки.
        </div>
      </Grid>
    </Grid>
  );
}

function Block(props) {
  return (
    <div>
      <Grid container justify="center">
        <Grid xs={12} md={12}>
          <h2 style={styles.h2}>{props.head}</h2>
        </Grid>
        {props.left ? (
          <React.Fragment>
            <Grid item xs={12} md={6}>
              {props.left}
            </Grid>
            <Grid item xs={12} md={6}>
              {props.right}
            </Grid>
          </React.Fragment>
        ) : (
          <Grid item xs={12} md={12}>
            {props.content}
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default function Component(props) {
  const title = "Интерьерный дизайн. Интенсив";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={`ВШСДТ: ${title}`} />
      </Helmet>
      <Page lable="Дизайн интерьера" lableMobile="Дизайн интерьера">
        <Head />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Tesisses />
            <InFew />
            <Descript />
            <Dates />
            {/* <Condition /> */}
            <Forma />
            <LineStar />
            <Block head={content.after.head} content={content.after.content} />
            <Contents />
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <After />
            <Forms />
          </Grid>
        </Grid>
        {/* <About /> */}
        <Teachers />
        <System />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Socnet />
            <Banners />
            <Advantage />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
