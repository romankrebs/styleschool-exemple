import React from "react";
import Footer from "../../components/footer";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import List from "../../components/list";
import Top from "../../components/topmenu";
import Helmet from "react-helmet";

export default function Teach() {
  var content = [
    {
      title: "Преподавание в Высшей школе стилистики",
      text: (
        <List
          arr={[
            <span>
              Курс профессиональной переподготовки{" "}
              <a href="https://styleschool.ru/image-consulting-fashion-styling?id=358">
                &laquo;Имидж-консалтинг и fashion-styling&raquo;
              </a>
            </span>,
            <span>
              Курс профессиональной переподготовки{" "}
              <a href="https://styleschool.ru/profi-fashion-journalist">
                &laquo;Модная журналистика&raquo;
              </a>
            </span>,
            <span>
              Краткосрочный авторский курс{" "}
              <a href="/fashion-media-digital">
                &laquo;Индустрия моды и fashion-журналистика в цифровую
                эпоху&raquo;
              </a>
            </span>
          ]}
        />
      )
    },
    {
      title: "Профессиональный опыт",
      text: (
        <List
          arr={[
            "Выпускающий редактор, Independent Media (Grazia Russia, Harper's Bazaar Russia)",
            <span>
              Редакционный директор, &laquo;Книга перемен. Материалы к истории
              русского искусства&raquo; (Музей современного искусства GARAGE)
            </span>,
            "Сотрудничество с известными журналами: Cosmopolitan, Numero, ISSUE Magazine и др.",
            "Редакционный директор книги арт-критика А. А. Ковалева «КНИГА ПЕРЕМЕН. Материалы к истории русского искусства»",
            "Со-продюсер магистерской программы ВШЭ «Трансмедийное производство в цифровых индустриях»",
            "Продюсер и куратор программы ВШЭ «Fashion-медиа и коммуникации в эпоху digital»",
            "Колумнист ZOE Magazine, Italy",
            "Колумнист Buro 24/7, Singapore",
            "Колумнист Buro 24/7, Ukraine"
          ]}
        />
      )
    },
    {
      title: "Научно-исследовательская деятельность",
      text: (
        <List
          arr={[
            "Монография: «Глянцевые медиа и форматы диверсификации бизнеса с ориентиром на индустриализацию моды на малых рынках»",
            "Научно-исследовательское эссе: «Трансформация креативности и ее медиа детерминизм в индустрии моды»",
            "Научно-исследовательское эссе: «Дигитализация индустрии моды и ее влияние на потребительское мышление»",
            "Научно исследовательское эссе: «Эволюция политики глянцевых изданий»",
            "Научно-исследовательское эссе: «Концептуализм в искусстве как основа зарождения ugly fashion»"
          ]}
        />
      )
    },
    {
      title: "Образование",
      text: (
        <List
          arr={[
            <span>
              РАУ , Департамент &laquo;Мировая экономика&raquo;, Факультет
              &laquo;Финансы и бизнес-менеджмент&raquo;
            </span>,
            <span>
              РАУ, Департамент &laquo;Медиа, реклама и кино&raquo;, Факультет
              &laquo;Журналистика&raquo;
            </span>,
            <span>
              НИУ ВШЭ, Департемант медиа и дизайна, магистерская программа
              &laquo;Медиапроизводство в креативных индустриях&raquo;
            </span>
          ]}
        />
      )
    },
    {
      title: "Преподавательская деятельность",
      text: (
        <List
          arr={[
            <span>
              РАУ (Славянский Университет) &ndash; преподаватель курса
              &laquo;Глянцевая журналистика&raquo; в рамках образовательной
              программы для бакалавров департамента &laquo;Медиа, реклама и
              кино&raquo; факультета &laquo;Журналистика&raquo;
            </span>,
            <span>
              Проведение мастер-классов совместно с проектом &laquo;Loft&raquo;
            </span>,
            "Авторские лекции: Армения, Грузия, Эстония"
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Мария Саргсян: Публичный профиль</title>
        <meta name="keywords" content="Мария Саргсян: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Мэри Саргсян"
            short="Fashion-журналист, независимый автор глянца, продюсер ряда цифровых изданий, посвященных современному искусству."
            image="/img/about/meri-sargsyan.jpg"
            tiles={[
              {
                image: "/img/earth.svg",
                title: "Авторские лекции",
                text: "Армения, Грузия, Эстония"
              }
            ]}
            content={content}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
