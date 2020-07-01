import React from "react";
import Head from "../../components/header-title";
import { getThemeProps } from "@material-ui/styles";

export default function Header(props) {
  return (
    <Head
      head={props.head}
      subtitle={
        false
        // <span>3 месяца | 30 занятия | 120 академ. часов | ONLINE</span>
      }
    />
  );
}
