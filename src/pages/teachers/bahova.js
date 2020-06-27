import React from "react";
import Helmet from "react-helmet";
import Page from "../../components/page";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import List from "../../components/list";

export default function Teach() {
  var content = [
    {
      title: "Преподавание в Высшей школе стилистики",
      text: (
        <List
          arr={[
            <span>
              Курс повышения квалификации &laquo;Модный ассортимент&raquo;
            </span>,
            <span>
              Курс профессиональной переподготовки &laquo;Имидж-консалтинг и
              fashion-styling&raquo;
            </span>
          ]}
        />
      )
    },
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Кубанский Государственный университет, факультет «Управления»",
            "Московский Государственный Университет Культуры и Искусств/Институт репутационных технологий Art&image – «Имиджелогия»",
            <span>
              Brandflight/Medinge Group, Sweden, обучение у Томаса Гэда (личного
              наставника Ричарда Бренсона и автора слогана для Nokia
              &laquo;Connecting people&raquo;) – Корпоративный
              брендинг/Персональный бренд
            </span>,
            "Международная академия исследования лжи – «Профайлинг»",
            "Международная академия исследования лжи – «Оперативная психодиагностика»"
          ]}
        />
      )
    },
    {
      title: "Профессиональный опыт:",
      text: (
        <List
          arr={[
            "Корпоративные тренинги и семинары по управлению впечатлением в бизнесе",
            "Консультирование российских топ-менеджеров и владельцев компаний по вопросам профессионального имиджа, по HR и бизнес-профайлингу",
            "Разработка дресс-кода, оценка персонала",
            "Имидж-консалтинг и шопинг-сопровождение. Авторские мастер-классы",
            "Сотрудничество с брендами Annette Görtz, Bogner, Stefanel, Max&Co и др.",
            "Участие в качестве имидж-эксперта на телеканалах МИР 24 и СТС Love",
            "Колумнист Forbes"
          ]}
        />
      )
    },
    {
      title: "Преподавательская деятельность:",
      text: <List arr={["Школа стиля Кати Гершуни", "Русская школа стиля"]} />
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Лиана Бахова: Публичный профиль</title>
        <meta name="keywords" content="Лиана Бахова: Публичный профиль" />
      </Helmet>
      <Page lable="Лиана Бахова" lableMobile="Лиана Бахова">
        <Grid container justify="center" alignItems="flex-start">
          <Grid item style={{ padding: 20 }}>
            <Teacher
              head="Лиана Бахова"
              short="Имидж-консультант, профайлер, автор программ по управлению впечатлением в бизнесе и межличностных коммуникациях"
              image="/img/about/liana-bahova.jpg"
              tiles={false}
              content={content}
            />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}
