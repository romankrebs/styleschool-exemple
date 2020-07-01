import rp from "request-promise";
import queryString from "query-string";
import _ from "lodash";
import b24 from "./b24";
import reactMail from "./react-mail";

let token;

export default app => {
  app.post("/_forms-submit", async (req, res) => {
    await b24(req.body);
    await reactMail(req.body);
    res.send("");
  });
};
