import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import H2 from "../../components/head1";

export default function Facultets() {
  return (
    <div
      style={{
        background: "url(/img/about/facs_bg.jpg) repeat",
        paddingTop: 30
      }}
    >
      {/* <H2 content="Факультеты" /> */}
      <Grid container justify="center" alignItems="flex-start">
        {/* <Grid item xs={12} md={3}>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <img
              src="/img/about/imedg_icon.png"
              style={{
                height: 80
              }}
              alt=""
            />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "1.2em",
                textAlign: "center",
                fontWeight: 700,
                color: "rgb(100,100,100)"
              }}
            >
              Факультет «Имиджмейкинга»
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <img
              src="/img/about/moda_icon.png"
              style={{
                height: 80
              }}
              alt=""
            />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "1.2em",
                textAlign: "center",
                fontWeight: 700,
                color: "rgb(100,100,100)"
              }}
            >
              Факультет «Индустрии моды»
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <img
              src="/img/about/design_icon.png"
              style={{
                height: 80
              }}
              alt=""
            />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "1.2em",
                textAlign: "center",
                fontWeight: 700,
                color: "rgb(100,100,100)"
              }}
            >
              Факультет «Дизайна»
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <img
              src="/img/about/beauty.png"
              style={{
                height: 80
              }}
              alt=""
            />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "1.2em",
                textAlign: "center",
                fontWeight: 700,
                color: "rgb(100,100,100)"
              }}
            >
              Факультет «Бьюти индустрии»
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Link to="/club">
            <div
              style={{
                background: "rgb(123,143,87)",
                boxSizing: "border-box",
                height: 42,
                width: 200,
                color: "rgb(255,255,255)",
                // fontFamily: "Roboto",
                fontSize: 18,
                borderRadius: 4,
                margin: "0 auto",
                textAlign: "center",
                paddingTop: 6
              }}
            >
              Клуб выпускников
            </div>
          </Link>
        </Grid> */}
        <Grid item xs={12} md={12}>
          <div
            style={{
              padding: 30,
              textAlign: "center"
            }}
          >
            <img
              src="/img/about/about_data_1.png"
              style={{
                border: "1px solid rgb(200,200,200)",
                borderRadius: 6,
                width: "60%"
              }}
              alt=""
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
