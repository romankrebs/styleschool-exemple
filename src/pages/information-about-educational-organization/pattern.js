import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { style } from "./style";
import Page from "../../components/page";

const Pattern = props => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="keywords" content={`ВШСДТ: ${props.title}`} />
      </Helmet>
      <Page
        lable="Сведения об образовательной организации"
        lableMobile="Сведения"
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <h1 style={style.h1}>Сведения об образовательной организации</h1>
            <h2 style={style.h2}>
              АНО ДПО Высшая школа стилистики, дизайна и технологий
            </h2>
          </Grid>
          <Grid item xs={12} md={12}>
            <h2 style={style.h2}>{props.title}</h2>
          </Grid>
        </Grid>
        {props.table ? (
          <div style={{ padding: "24px 0" }}>
            <table>
              <tbody>
                {props.table.map(
                  (el, key) =>
                    props.celspace ? (
                      key === props.celspace.cell ? (
                        <tr>
                          {el.map((td, k) => (
                            <td style={style.td} colspan={props.celspace.space}>
                              {td}
                            </td>
                          ))}
                        </tr>
                      ) : (
                        <tr>
                          {el.map((td, k) => (
                            <td style={style.td}>{td}</td>
                          ))}
                        </tr>
                      )
                    ) : (
                      <tr>
                        {el.map((td, k) => (
                          <td style={style.td}>{td}</td>
                        ))}
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          props.content
        )}
        <div style={{ height: "2rem" }} />
      </Page>
    </div>
  );
};

export default Pattern;
