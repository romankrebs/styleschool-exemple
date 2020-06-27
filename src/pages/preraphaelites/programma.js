import React from "react";
import Paragraph from "../../components/p-array";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

function Programma(props) {
  const { classes } = props;

  return (
    <div className={classes.box} style={{ paddingTop: "3rem" }}>
      <Paragraph
        style={{ ...styles.p, paddingBottom: "0.5rem" }}
        content={[
          <span>
            Данный курс – это поиск ответа на вопрос, почему творчество
            прерафаэлитов с момента появления и до сих пор вызывает двойственное
            отношение: от принятия и восторга до резкой критики и отрицания,
            став, вне зависимости от оценки, основой развития многих направлений
            искусства XX и XXI века.
          </span>,
          <span>
            В курсе будет рассмотрена знаково-символическая система
            художественного образа «Братства»: новое понимание цвета и
            композиции, исповедальность и театрализация, правдоподобие и
            символизм, натурализм и мистичность, авангардизм и архаизм, синтез
            литературы, жизни и творчества, телесный психологизм, двойственность
            и вариативность категории красоты и образа Женщины.
          </span>
        ]}
      />
    </div>
  );
}

export default withStyles(wStyles)(Programma);
