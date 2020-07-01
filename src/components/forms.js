import React, { useState, useEffect } from "react";

import AutoForm from "uniforms-material/AutoForm";
import AutoField from "uniforms-material/AutoField";
import HiddenField from "uniforms-material/HiddenField";
import SubmitField from "uniforms-material/SubmitField";
import BoolField from "uniforms-material/BoolField";
import ErrorField from "uniforms-material/ErrorField";
import CloseButton from "./close-icon";
import { Grid, Modal, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { Schema } from "../formsSchema";
import { onSubmit } from "../formsSchema";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0
  },
  commentBigField: {
    height: 171
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    root: {
      padding: "0 1rem",
      maxWidth: "100vw",
      boxSizing: "border-box"
    }
  }
});

const SchemaForm = props => {
  const { classes } = props;

  let timeout;
  useEffect(() => () => clearTimeout(timeout));
  const [disabled, setDisabled] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <AutoForm
        schema={Schema}
        onSubmit={doc => {
          setDisabled(true);
          onSubmit(doc);
          timeout = setTimeout(() => setDisabled(false), 5000);
          setModal(!modal);
        }}
        disabled={disabled}
        model={{}}
      >
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} sm={6}>
            <AutoField name="fullname" variant="outlined" />
            <AutoField name="phone" variant="outlined" />
            <AutoField name="email" variant="outlined" />
            <HiddenField
              name="target"
              value={props.target ? `send_form_${props.target}_comlete` : "0"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoField
              name="comment"
              label="Комментарии"
              multiline={true}
              fullWidth
              variant="outlined"
              InputProps={{ className: classes.commentBigField }}
            />
          </Grid>
          <Grid item sm={12}>
            <BoolField
              name="consent"
              defaultValue={true}
              label={
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "0.8rem",
                    lineHeight: "1rem"
                  }}
                >
                  Я даю согласие на обработку персональных данных и соглашаюсь
                  c&ensp;
                  <a href="/information/politic" target="_blank">
                    политикой конфиденциальности
                  </a>
                </span>
              }
            />
            <ErrorField
              name="consent"
              errorMessage="Необходимо дать согласие на обработку персональных данных."
            />
          </Grid>
          <Grid item sm={12}>
            <SubmitField variant="outlined" color="primary" label="Отправить" />
          </Grid>
        </Grid>
      </AutoForm>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        closeAfterTransition
        className={classes.modal}
      >
        <Paper
          style={{
            background: "rgb(255,255,255)",
            padding: "1em",
            paddingBottom: "2em",
            paddingTop: "0.5em"
          }}
        >
          <p
            style={{
              textAlign: "right",
              cursor: "pointer",
              margin: 0,
              marginRight: "-0.5em",
              padding: 0
            }}
            onClick={() => setModal(false)}
          >
            <CloseButton size={24} color="rgb(160,160,160)" />
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              color: "rgb(100,100,100)",
              fontWeight: 500,
              margin: 0,
              padding: 0,
              fontSize: "1.1em",
              lineHeight: "1.5em"
            }}
          >
            Ваше сообщение успешно отправлено.
            <br />В ближайшее время с Вами свяжется специалист учебного отдела.
          </p>
        </Paper>
      </Modal>
    </React.Fragment>
  );
};

const VerticalSchemaForm = props => {
  const { classes } = props;

  let timeout;
  useEffect(() => () => clearTimeout(timeout));
  const [disabled, setDisabled] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <AutoForm
        schema={Schema}
        onSubmit={doc => {
          setDisabled(true);
          onSubmit(doc);
          timeout = setTimeout(() => setDisabled(false), 5000);
          setModal(!modal);
        }}
        disabled={disabled}
        model={{}}
      >
        <Grid container spacing={0} className={classes.root}>
          <Grid item sm={12}>
            <AutoField name="fullname" variant="outlined" />
            <AutoField name="phone" variant="outlined" />
            <AutoField name="email" variant="outlined" />
            <HiddenField
              name="target"
              value={props.target ? `send_form_${props.target}_comlete` : "0"}
            />
          </Grid>
          <Grid item sm={12}>
            <AutoField
              name="comment"
              label="Комментарии"
              multiline={true}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item sm={12}>
            <BoolField
              name="consent"
              label={
                <div
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1
                  }}
                >
                  Я даю согласие на обработку персональных данных и соглашаюсь
                  c&emsp;
                  <a href="/information/politic" target="_blank">
                    политикой конфиденциальности
                  </a>
                </div>
              }
            />
            <ErrorField
              name="consent"
              errorMessage="Необходимо дать согласие на обработку персональных данных."
            />
          </Grid>
          <Grid item sm={12} style={{ textAlign: "center" }}>
            <SubmitField variant="outlined" color="primary" label="Отправить" />
          </Grid>
        </Grid>
      </AutoForm>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        closeAfterTransition
        className={classes.modal}
      >
        <Paper
          style={{
            background: "rgb(255,255,255)",
            padding: "1em",
            paddingBottom: "2em",
            paddingTop: "0.5em"
          }}
        >
          <p
            style={{
              textAlign: "right",
              cursor: "pointer",
              margin: 0,
              marginRight: "-0.5em",
              padding: 0
            }}
            onClick={() => setModal(false)}
          >
            <CloseButton size={24} color="rgb(160,160,160)" />
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              color: "rgb(100,100,100)",
              fontWeight: 500,
              margin: 0,
              padding: 0,
              fontSize: "1.1em",
              lineHeight: "1.5em"
            }}
          >
            Ваше сообщение успешно отправлено.
            <br />В ближайшее время с Вами свяжется специалист учебного отдела.
          </p>
        </Paper>
      </Modal>
    </React.Fragment>
  );
};

export const HorizontalForm = withStyles(styles)(SchemaForm);
export const VerticalForm = withStyles(styles)(VerticalSchemaForm);
