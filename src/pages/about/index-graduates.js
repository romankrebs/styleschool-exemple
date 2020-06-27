import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import H2 from "../../components/head1";
import Page from "../../components/page";
import Person from "../../components/persones2";
import { content } from "./content";
import { styles } from "./styles";
import Block from "./block";

export const graduates = [
  {
    descript: "",
    image: "/img/about/g-agagabova.jpg",
    name: "Наталья Агабабова",
    link: "", // "https://styleschool.ru/user/profile.php?id=140"
    posLeft: "40%"
  },
  {
    descript: "Имидж-стилист Московского Центра Стилистов",
    image: "/img/about/g-baybarosha.jpg",
    name: "Анастасия Байбароша",
    link: "" // "https://styleschool.ru/user/profile.php?id=181"
  },
  {
    descript: "Имидж-стилист Московского Центра Стилистов",
    image: "/img/about/g-berejnaya.jpg",
    name: "Мария Бережная",
    link: "" //  "https://styleschool.ru/user/profile.php?id=33"
  },
  {
    descript: "",
    image: "/img/about/g-valkonskaya.jpg",
    name: "Наталья Валконская",
    link: "" //  "https://styleschool.ru/user/profile.php?id=35"
  },
  {
    descript: "",
    image: "/img/about/g-vanshina.jpg",
    name: "Екатерина Ваньшина",
    link: "/ekaterina_vanjshina" //  "https://styleschool.ru/user/profile.php?id=14"
  },
  {
    descript: "",
    image: "/img/about/g-varlakova.jpg",
    name: "Ирина Варлакова",
    link: "/irina_varlakova" //  "https://styleschool.ru/user/profile.php?id=15389"
  },
  {
    descript: "",
    image: "/img/about/g-glushkova.jpg",
    name: "Анастасия Глушкова",
    link: "/anastasiya_glushkova" //  "https://styleschool.ru/user/profile.php?id=141"
  },
  {
    descript: "",
    image: "/img/about/g-gohfeld.jpg",
    name: "Оксана Гохфельд",
    link: "" //  "https://styleschool.ru/user/profile.php?id=36"
  },
  {
    descript:
      "Стилист и имидж-консультант Московского Центра Стилистов, блогер.",
    image: "/img/about/g-gradova.jpg",
    name: "Инга Градова",
    link: "" // "https://styleschool.ru/user/profile.php?id=15"
  },
  {
    descript: "",
    image: "/img/about/g-guryanova.jpg",
    name: "Яна Гурьянова",
    link: "", //  "https://styleschool.ru/user/profile.php?id=37"
    posLeft: "10%"
  },
  {
    descript: "стилист-имиджмейкер",
    image: "/img/about/g-ivanova.jpg",
    name: "Татьяна Иванова",
    link: "" //  "https://styleschool.ru/user/profile.php?id=916"
  },
  {
    descript: "Имидж-стилист Московского Центра Стилистов",
    image: "/img/about/g-kirpichnikova.jpg",
    name: "Ирина Кирпичникова",
    link: "" //  "https://styleschool.ru/user/profile.php?id=182"
  },
  {
    descript: "",
    image: "/img/about/g-manicheva.jpg",
    name: "Лариса Маничева",
    link: "/larisa_manicheva" //  "https://styleschool.ru/user/profile.php?id=330"
  },
  {
    descript: "",
    image: "/img/about/g-marchuk.jpg",
    name: "Анна Марчук",
    link: "/anna_marchuk", //  "https://styleschool.ru/user/profile.php?id=31"
    posLeft: "40%"
  },
  {
    descript:
      "Имидж-стилист Московского Центра Стилистов, автор проекта «Fashion &amp; Fitness», направленный на преображение индивидуального стиля и фигуры человека.",
    image: "/img/about/g-minkina.jpg",
    name: "Алена Минкина",
    link: "/alena_minkina" //  "https://styleschool.ru/user/profile.php?id=17"
  },
  {
    descript: "",
    image: "/img/about/g-morgun.jpg",
    name: "Александра Моргун",
    link: "/alexandra_morgun" //  "https://styleschool.ru/user/profile.php?id=332"
  },
  {
    descript: "",
    image: "/img/about/g-nazimova.jpg",
    name: "Анна Назимова",
    link: "/anna_nazimova" //  "https://styleschool.ru/user/profile.php?id=154"
  },
  {
    descript: "Имидж-стилист Московского Центра Стилистов",
    image: "/img/about/g-nalibaeva.jpg",
    name: "Гульвира Налибаева",
    link: "/guljvura_nalibaeva" //  "https://styleschool.ru/user/profile.php?id=186"
  },
  {
    descript: "",
    image: "/img/about/g-nesterova.jpg",
    name: "Марина Нестерова",
    link: "" //  "https://styleschool.ru/user/profile.php?id=302"
  },
  {
    descript: "",
    image: "/img/about/g-osorova.jpg",
    name: "Гульсара Осорова",
    link: "/guljsara_osorova", //  "https://styleschool.ru/user/profile.php?id=18"
    posLeft: "36%"
  },
  {
    descript: "",
    image: "/img/about/g-pashinina.jpg",
    name: "Любовь Пашинина",
    link: "" //  "https://styleschool.ru/user/profile.php?id=320"
  },
  {
    descript: "Имидж-стилист Московского Центра Стилистов",
    image: "/img/about/g-peremolotova.jpg",
    name: "Ирина Перемолотова",
    link: "" //  "https://styleschool.ru/user/profile.php?id=13"
  },
  {
    descript: "",
    image: "/img/about/g-prokopenkova.jpg",
    name: "Наталья Прокопенкова",
    link: "" //  "https://styleschool.ru/user/profile.php?id=19"
  },
  {
    descript: "",
    image: "/img/about/g-solovieva.jpg",
    name: "Ляна Соловьева",
    link: "" //  "https://styleschool.ru/user/profile.php?id=32"
  },
  {
    descript: "",
    image: "/img/about/g-troepolskaya.jpg",
    name: "Любовь Троепольская",
    link: "" //  "https://styleschool.ru/user/profile.php?id=268"
  },
  {
    descript: "",
    image: "/img/about/g-favorskaya.jpg",
    name: "Алла Фаворская",
    link: "", //  "https://styleschool.ru/user/profile.php?id=16"
    posLeft: "40%"
  },
  {
    descript: "",
    image: "/img/about/g-fadeev.jpg",
    name: "Михаил Фадеев",
    link: "" //  "https://styleschool.ru/user/profile.php?id=34"
  },
  {
    descript: "Имидж-стилист Московского Центра Стилистов",
    image: "/img/about/g-chernyh.jpg",
    name: "Александра Черных",
    link: "" //  "https://styleschool.ru/user/profile.php?id=136"
  },
  {
    descript: "",
    image: "/img/about/g-shevchuk.jpg",
    name: "Екатерина Шевчук",
    link: "" //  "https://styleschool.ru/user/profile.php?id=125"
  },
  {
    descript: "Стилист и имидж-консультант  Московского Центра Стилистов",
    image: "/img/about/g-scherbinina.jpg",
    name: "Ольга Щербинина",
    link: "" //  "https://styleschool.ru/user/profile.php?id=185"
  }
];

export default function Teachers() {
  return (
    <div>
      <Helmet>
        <title>Выпускники</title>
        <meta name="keywords" content="ВШС: Выпускники" />
      </Helmet>
      <Page lable="Отзывы" lableMobile="Отзывы">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Block title={content.review.head} text={content.review.text} />
          </Grid>
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <h2 style={styles.h2}>Выпускники</h2>
            <Person teachers={graduates} style={{}} />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
