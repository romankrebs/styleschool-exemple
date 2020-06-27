import React from "react";
import { Grid } from "@material-ui/core";

function Recvisites(props) {
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
    h3: {
      fontFamily: props.font || "inherit",
      fontSize: "1em",
      fontWeight: 700,
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: "8px 0"
    },
    text: {
      fontFamily: props.font || "inherit",
      fontSize: "1em",
      fontWeight: 400,
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: 0,
      paddingTop: 10
    }
  };

  return (
    <div>
      <Grid container justify="flex-start">
        <Grid item xs={12} md={12}>
          <h2 style={styles.head}>Реквизиты</h2>
          <p style={styles.text}>
            Автономная некоммерческая организация дополнительного
            профессионального образования «ВЫСШАЯ ШКОЛА СТИЛИСТИКИ, ДИЗАЙНА И
            ТЕХНОЛОГИЙ»
          </p>
          <p style={styles.text}>
            ИНН 9717068337
            <br />
            КПП 771701001
            <br />
            ОГРН 1187700009056
          </p>
          <p style={styles.text}>
            <b>Адрес для корреспонденции:</b> 129085, г. Москва, проспект Мира,
            д. 101, стр.1, а/я 2-18
          </p>
          <h3 style={styles.h3}>Банковские реквизиты</h3>
          <Grid container>
            <Grid item xs={12} md={5}>
              <p style={styles.text}>Расчетный счет:</p>
            </Grid>
            <Grid item xs={12} md={7}>
              <p style={styles.text}>40703810300000707477</p>
            </Grid>

            <Grid item xs={12} md={5}>
              <p style={styles.text}>Наименование банка:</p>
            </Grid>
            <Grid item xs={12} md={7}>
              <p style={styles.text}>АО &laquo;ТИНЬКОФФ БАНК&raquo;</p>
            </Grid>

            <Grid item xs={12} md={5}>
              <p style={styles.text}>Реквизиты банка:</p>
            </Grid>
            <Grid item xs={12} md={7}>
              <p style={styles.text}>
                К/с 30101810145250000974
                <br />
                БИК 044525974
                <br />
                ИНН/КПП 7710140679
                <br />
                ОКПО 29290881
              </p>
            </Grid>

            <Grid item xs={12} md={5}>
              <p style={styles.text}>Адрес банка:</p>
            </Grid>
            <Grid item xs={12} md={7}>
              <p style={styles.text}>
                123060, Москва, 1-й Волоколамский проезд, д.&nbsp;10,
                стр.&nbsp;1
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Recvisites;
