import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Socnet from "../../components/socnets-icons-buttons";

// class Forma extends React.Component {
//   constructor (props) {
//     super(props)
//   }
//   componentDidMount() {
//     const script0 = document.createElement("script");
//     const script = document.createElement("script");
//       script.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js";
//       script0.src = "./amoforms.js";
//       script.async = 'async';
//       script.id = 'amoforms_script';
//       this.instance.appendChild(script0);
//       this.instance.appendChild(script);
//       //document.body.appendChild(script0);
//       //document.body.appendChild(script);
//   }
//   render() {
//     return <div ref={el => (this.instance = el)}/>;
//   }
// }

// function Forma0 () {
//   return {__html: `<script>var amo_forms_params = "id":461554,"hash":"dbeb87e8e0cbfe3288a6dcb0b95ade4e","locale":"ru";</script><srcipt id='amoforms_script' async='async' charset='utf-8' src="https://forms.amocrm.ru/forms/assets/js/amoforms.js" ></script>`};
// }

export default function Buttons(props) {
  return (
    <Grid container justify="center" spacing={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <div
          style={{
            background: "rgb(123,143,87)",
            color: "rgb(255,255,255)",
            padding: 20,
            boxSizing: "border-box",
            textAlign: "center",
            font: '400 1.1em "Roboto"',
            cursor: "pointer",
            minHeight: 32,
            borderRadius: 4
          }}
          onClick={() => props.setBillingId(props.id)}
        >
          Купить подписку
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item md={1} />
      </Hidden>
      <Grid item xs={12} md={4}>
        <Socnet />
      </Grid>
    </Grid>
  );
}
