import React from "react";
import Video from "../../components/video";
import { styles } from "./styles";
import Paragraph from "../../components/p-array";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  ...styles,
  link: {
    color: "rgb(80,0,0)",
    transition: "color .5s",
    "&:hover": {
      color: "rgb(160,0,0)"
    }
  }
});

const ItemLinks = withStyles(wStyles)(props => {
  const { classes } = props;

  return (
    <div style={{ paddingLeft: "3rem", paddingBottom: "1rem" }}>
      <Link to={props.link}>
        <p style={{ ...styles.text, ...styles.title }}>{props.title}</p>
      </Link>
      <p className={classes.text}>{props.duration}</p>
      <p className={classes.text}>
        {props.descript}
        &ensp;
        <Link to={props.link}>
          <span className={classes.link}>подробнее…</span>
        </Link>
      </p>
    </div>
  );
});

export const content = {
  screen1: {
    left: <Video link="fOZzI3bKXIU" h={360} w={400} />,
    right: (
      <div>
        <h3 style={styles.head}>Долгосрочные курсы</h3>
        <Paragraph
          style={styles.text}
          content={[
            <ItemLinks
              link="/image-consulting"
              title="Имидж-консалтинг"
              duration="Профподготовка 6 месяцев. Диплом"
              descript="Вектор: консультирование клиентов по стилю, шопинг сопровождение"
            />,
            <ItemLinks
              link="/fashion-styling"
              title="Fashion Styling"
              duration="Профподготовка 6 месяцев. Диплом"
              descript="Вектор: стилизация фотосессий, модных показов, сотрудничество с фэшн брендами"
            />,
            <ItemLinks
              link="/visual-merchandising-and-showcases-design"
              title="Визуальный мерчендайзинг и витринистика."
              duration="Профподготовка 6 месяцев. Диплом"
              descript="Организация пространства и продаж в фэшн ритейле"
            />,
            <ItemLinks
              link="/living-interior-design-and-decoration"
              title="Дизайн и декорирование интерьеров."
              duration="Профподготовка 9 месяцев. Диплом"
              descript="Проектирование интерьеров жилых помещений"
            />,
            <Link to="/pro-education">
              <p style={{ ...styles.text, paddingTop: "2rem" }}>
                Все долгосрочные курсы…
              </p>
            </Link>
          ]}
        />
      </div>
    )
  },
  screen2: {
    right: <Video link="8s_7e-79VUI" h={360} w={400} />,
    left: (
      <div>
        <h3 style={styles.head}>Краткосрочные курсы</h3>
        <Paragraph
          style={styles.text}
          content={[
            <ItemLinks
              link="/interior-design"
              title="Интерьерный дизайн (для начинающих)"
              duration="Интенсив 3 месяца. Свидетельство"
              descript="Дизайн квартиры: концепт, проект, смета."
            />,
            <ItemLinks
              link="/pre-raphaelites"
              title="Прерафаэлиты"
              duration="Видео курс, 10 занятий. Сертификат"
              descript="Если у искусства и есть какое-либо назначение, то это помочь человеку осознать себя и научить быть самим собой."
            />,
            <ItemLinks
              link="/image-style"
              title="Стили в одежде. Принципы подбора"
              duration="Интенсив 3 месяца. Свидетельство"
              descript="Система создания стильных и модных комплектов. Технологии для расширения спектра услуг и сервиса."
            />,
            <ItemLinks
              link="/japanese-fashion-philosophy"
              title="Философия японской моды"
              duration="Онлайн курс, 10 занятий. Повышение квалификации"
              descript="Японская мода давно стала брендом, удивляющим и вдохновляющим мировой рынок. Об этом надо знать"
            />
            // <Link to="/special-courses">
            //   <p style={{ ...styles.text, paddingTop: "2rem" }}>
            //     Все краткосрочные курсы…
            //   </p>
            // </Link>
          ]}
        />
      </div>
    )
  }
};
