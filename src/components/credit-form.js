import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  submit: {
    background: "rgba(123,143,87,0.1)",
    color: "rgb(123,143,87)",
    border: "1px solid rgb(123,143,87)",
    textAlign: "center",
    borderRadius: 4,
    padding: 8,
    width: 200,
    cursor: "pointer",
    transition: "1s background, 1s color",
    "&:hover": {
      background: "rgba(123,143,87,0.9)",
      color: "rgb(255,255,255)"
    }
  },
  submitYellow: {
    background: "rgba(255,221,46,1)",
    color: "rgb(0,0,0)",
    textAlign: "center",
    border: 0,
    borderRadius: 4,
    padding: 8,
    width: 200,
    display: "block",
    boxSizing: "border-box",
    margin: "0 auto",
    cursor: "pointer",
    transition: "1s background, 1s color",
    "&:hover": {
      background: "rgba(255,171,46,0.7)",
      color: "rgb(50,0,0)"
    }
  },
  submitWhite: {
    background: "transparent",
    color: "rgb(80,80,80)",
    textAlign: "center",
    border: "1px solid rgb(200,200,200)",
    borderRadius: 4,
    padding: 8,
    maxWidth: "18em",
    fontSize: "0.9em",
    display: "block",
    boxSizing: "border-box",
    margin: "0 auto",
    cursor: "pointer",
    transition: "1s color",
    "&:hover": {
      color: "rgb(160,80,80)"
    }
  }
});

const Forma = props => {
  const classes = useStyles();
  const url = "https://loans.tinkoff.ru/api/partners/v1/lightweight/create";
  const showcaseID = "cb355838-a074-4c61-9704-19e5de29d071";
  const shopID = "0e7b743a-c59d-422f-bbfe-d96bbbfc0ffc";
  const promoCode = "installment_0_0_10";

  const testUrl =
    "https://loans-qa.tcsbank.ru/api/partners/v1/lightweight/create";
  const testPromoCode = "default";
  const testShowcaseID = "test_online";
  const testShopID = "test_online";

  return (
    <form action={props.test ? testUrl : url} method="post">
      <input
        name="shopId"
        value={props.test ? testShopID : shopID}
        type="hidden"
      />
      <input
        name="showcaseId"
        value={props.test ? testShowcaseID : showcaseID}
        type="hidden"
      />
      <input
        name="promoCode"
        value={props.test ? testPromoCode : promoCode}
        type="hidden"
      />
      <input name="sum" value={props.sum} type="hidden" />
      <input name="itemName_0" value={props.name} type="hidden" />
      <input name="itemQuantity_0" value="1" type="hidden" />
      <input name="itemPrice_0" value={props.sum} type="hidden" />
      <input name="itemCategory_0" value="course" type="hidden" />
      {/*<input name="itemName_1" value={props.name} type="hidden"/>
      <input name="itemQuantity_1" value="1" type="hidden"/>
       <input name="itemPrice_1" value="40000.00" type="hidden"/>
      <input name="itemCategory_1" value="iPhone Apple" type="hidden"/>
      <input name="customerEmail" value="customer@tinkoff.ru" type="hidden"/>
      <input name="customerPhone" value="+79031234567" type="hidden"/> */}
      <input
        type="submit"
        value={props.textButton ? props.textButton : "Учиться в рассрочку"}
        className={
          props.yellow
            ? classes.submitYellow
            : props.white
              ? classes.submitWhite
              : classes.submit
        }
      />
    </form>
  );
};

export default Forma;
