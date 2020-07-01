import React from "react";
import { Grid } from "@material-ui/core";

function Button() {
  return (
    <p
      style={{
        fontFamily: "Roboto",
        fontSize: "0.9em",
        fontWeight: 400,
        textAlign: "center",
        color: "rgb(255,255,255)",
        padding: 4,
        margin: 0,
        background: "rgb(255,0,0)"
      }}
    >
      кнопка &laquo;Записаться сейчас&raquo;
    </p>
  );
}

class Hover extends React.Component {
  state = {
    hover: false
  };

  toggle = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <Grid
        container
        onMouseOver={this.toggle}
        onMouseOut={this.toggle}
        style={{
          background: this.state.hover
            ? "rgb(245,245,245)"
            : "rgb(255,255,255)",
          padding: "8px 4px",
          border: 0,
          borderTop: "1px solid rgb(200,200,200)"
        }}
      >
        {this.state.hover ? this.props.hover : this.props.default}
      </Grid>
    );
  }
}

function Title(props) {
  return (
    <p
      style={{
        fontFamily: "Roboto",
        fontSize: "1.6em",
        fontWeight: 700,
        textAlign: "left",
        color: "rgb(123,143,87)",
        padding: "10px 0 18px 0",
        margin: 0
      }}
    >
      {props.children ? props.children : props.text}
    </p>
  );
}

function Dates(props) {
  return (
    <p
      style={{
        fontFamily: "Roboto",
        fontSize: "1em",
        fontWeight: 400,
        textAlign: "left",
        color: "rgb(100,100,100)",
        padding: 0,
        margin: 0
      }}
    >
      {props.children}
    </p>
  );
}

let styleText = {
  font: '400 1em "Roboto"',
  color: "rgb(123,143,87)",
  padding: 12
};

let content = [
  {
    hover: (
      <Grid item xs={12} md={12}>
        <Title>Апрель</Title>
      </Grid>
    ),
    default: (
      <Grid item xs={12} md={12}>
        <Title>Апрель</Title>
      </Grid>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 20 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/style-code">
            Карта стилей | Авторский мастер-класс Инессы Трубецковой 16
            академ.часов
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 20 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={9} style={styleText}>
          <a href="/style-code">
            Карта стилей | Авторский мастер-класс Инессы Трубецковой 16
            академ.часов
          </a>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 20 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/mens-style-I">
            Мужской стиль | Авторский мастер-класс Лианы Баховой 8 академ.часов
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 20 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={9} style={styleText}>
          <a href="/mens-style-I">
            Мужской стиль | Авторский мастер-класс Лианы Баховой 8 академ.часов
          </a>
        </Grid>
      </React.Fragment>
    )
  },

  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 22 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/practice-image-consulting">
            Практика имидж-консультирования | Практика #1 &ndash; очно
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 22 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={9} style={styleText}>
          <a href="/practice-image-consulting">
            Практика имидж-консультирования | Практика #1 &ndash; очно
          </a>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 27 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/self_style">Сам себе стилист | Очно</a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 27 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={9} style={styleText}>
          <a href="/self_style">Сам себе стилист | Очно</a>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 28 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/profashion">Fashion-консультант | Очно</a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 28 апреля 2019</Dates>
        </Grid>
        <Grid item xs={12} md={9} style={styleText}>
          <a href="/profashion">Fashion-консультант | Очно</a>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={12}>
          <Title>Май</Title>
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={12}>
          <Title>Май</Title>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 22 мая 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/image-style">
            Базовый курс по созданию имиджа и стиля | Очно
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 22 мая 2019</Dates>
        </Grid>
        <Grid item xs={12} md={4} style={styleText}>
          <a href="/image-style">
            Базовый курс по созданию имиджа и стиля | Очно
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            textAlign: "right",
            fontFamily: "Roboto",
            color: "rgb(100,100,100)",
            fontSize: "0.9em"
          }}
        >
          <img
            src="/img/calendar-month.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;3 мес.&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src="/img/bell.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;36 занятий&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src="/img/clock-outline.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;144 академ. ч.
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 22 мая 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/profashion">Fashion-консультант | Очно</a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 22 мая 2019</Dates>
        </Grid>
        <Grid item xs={12} md={4} style={styleText}>
          <a href="/profashion">Fashion-консультант | Очно</a>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            textAlign: "right",
            fontFamily: "Roboto",
            color: "rgb(100,100,100)",
            fontSize: "0.9em"
          }}
        >
          <img
            src="/img/calendar-month.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;6 мес.&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src="/img/bell.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;60 занятий&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src="/img/clock-outline.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;254 академ. ч.
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 27 мая 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/practice-image-consulting">
            Практика имидж-консультирования | Практика #2 &ndash; очно
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 27 мая 2019</Dates>
        </Grid>
        <Grid item xs={12} md={9} style={styleText}>
          <a href="/practice-image-consulting">
            Практика имидж-консультирования | Практика #2 &ndash; очно
          </a>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={12}>
          <Title>Июнь</Title>
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={12}>
          <Title>Июнь</Title>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 10 июня 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/self_style">Сам себе стилист | Дистанционно</a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 10 июня 2019</Dates>
        </Grid>
        <Grid item xs={12} md={9} style={styleText}>
          <a href="/self_style">Сам себе стилист | Дистанционно</a>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 18 июня 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/living-interior-design-and-decoration">
            Дизайн и декорирование интерьера. Профподготовка | Дистанционно
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 18 июня 2019</Dates>
        </Grid>
        <Grid item xs={12} md={8} style={styleText}>
          <a href="/living-interior-design-and-decoration">
            Дизайн и декорирование интерьера. Профподготовка | Дистанционно
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          md={1}
          style={{
            textAlign: "right",
            fontFamily: "Roboto",
            color: "rgb(100,100,100)",
            fontSize: "0.9em"
          }}
        >
          <img
            src="/img/calendar-month.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;9 мес.
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={12}>
          <Title>Сентябрь</Title>
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={12}>
          <Title>Сентябрь</Title>
        </Grid>
      </React.Fragment>
    )
  },
  {
    hover: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 17 сентября 2019</Dates>
        </Grid>
        <Grid item xs={12} md={6} style={styleText}>
          <a href="/second-degree-imagemaker">
            Имиджмейкер. Второе высшее. Профподготовка | Очно
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button />
        </Grid>
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <Grid item xs={12} md={3}>
          <Dates>с 17 сентября 2019</Dates>
        </Grid>
        <Grid item xs={12} md={8} style={styleText}>
          <a href="/second-degree-imagemaker">
            Имиджмейкер. Второе высшее. Профподготовка | Очно
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          md={1}
          style={{
            textAlign: "right",
            fontFamily: "Roboto",
            color: "rgb(100,100,100)",
            fontSize: "0.9em"
          }}
        >
          <img
            src="/img/calendar-month.svg"
            alt=""
            style={{
              height: 18,
              filter: "opacity(65%)",
              marginBottom: -2
            }}
          />
          &nbsp;11 мес.
        </Grid>
      </React.Fragment>
    )
  }
];

export default function Shedules() {
  return (
    <div>
      <Grid
        container
        spacing={4}
        style={{ padding: 20, maxWidth: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          {content.map((el, i) => (
            <Hover hover={el.hover} default={el.default} key={i} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
