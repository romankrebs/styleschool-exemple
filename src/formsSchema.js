import SimpleSchema from "simpl-schema";

import SimpleSchema2Bridge from "uniforms/SimpleSchema2Bridge";

import { utm } from "url-utm-params";

import ym from "react-yandex-metrika";
import ReactGA from "react-ga";

// import Window from "./components/submit-message-window";

const axios = require("axios");

export const Rules = {
  fullname: {
    label: "Ваше имя",
    type: String,
    optional: true
  },
  phone: {
    label: "Телефон",
    type: String,
    regEx: SimpleSchema.RegEx.Phone
  },
  email: {
    type: String,
    label: "E-mail",
    regEx: SimpleSchema.RegEx.EmailWithTLD
  },
  consent: {
    type: Boolean,
    allowedValues: [true],
    defaultValue: true
  },
  comment: {
    type: String,
    optional: true
  },
  target: {
    type: String
  }
};

export const onSubmit = doc => {
  const options = {
    method: "post",
    url: "/_forms-submit",
    data: {
      title: document.title,
      user: doc,
      userId: localStorage.userId,
      location: {
        href: window.location.href,
        pathname: window.location.pathname
      },
      utms: utm(window.location.href)
    }
  };

  const callTouchOptions = {
    method: "get",
    url:
      "https://api-node13.calltouch.ru/calls-service/RestAPI/requests/35712/register/",
    params: {
      subject: window.location.href.split("?")[0],
      sessionId: window.call_value,
      fio: doc.fullname,
      phoneNumber: doc.phone,
      email: doc.email,
      comment: doc.comment
    }
  };

  console.log(doc);
  // console.log(callTouchOptions);

  if (doc.target != "0") {
    ym("reachGoal", doc.target);
    ReactGA.event({
      category: doc.target,
      action: "click",
      label: "main"
    });
  }

  axios(options);
  axios(callTouchOptions).then(response => console.log(response));

  // window.thankyou();
  if (window.thankyou) window.thankyou();
};

export const Schema = new SimpleSchema(Rules);

export const Bridge = new SimpleSchema2Bridge(Schema);
