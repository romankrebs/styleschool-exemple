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
      title: "Профессиональный опыт",
      text: (
        <List
          arr={[
            "Организатор продакшн показов MBFW",
            "Арт-директор нескольких изданий",
            "Консалтинг по стратегиям PR и маркетинговых коммуникаций",
            "Колумнист нескольких СМИ об индустрии"
          ]}
        />
      )
    },
    {
      title: "Преподавание в Высшей школе стилистики",
      text: (
        <List
          arr={[
            "Современная индустрия моды",
            "Анализ и прогнозирование трендов"
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
              <b>ММВШБ МИРБИС</b> – бакалавр «Международных финансовых систем»
            </span>,
            <span>
              <b>Westminster University</b> – повышение квалификации «Fashion
              Business Management»
            </span>,
            <span>
              <b>МГУ им. Ломоносова</b> – MBA «Теория моды»
            </span>,
            <span>
              <b>Parsons NY</b> – повышение квалификации Fashion Business &
              Fashion Styling
            </span>,
            <span>
              <b>АртИмидж</b> – повышение квалификации &laquo;Fashion
              Styling&raquo;
            </span>,
            "Магистратура Высшей Школы Экономики по направлению «Визуальная культура»"
          ]}
        />
      )
    },
    {
      title: "Преподавательская деятельность",
      text: (
        <List
          arr={[
            "Основной преподавательский состав 6ти факультетов по направлению Fashion в Британской Высшей Школе Дизайна",
            "Школа индустрии моды Howfashionworks",
            "Ведущий преподаватель MBA по направлению Fashion Business в МГИМО"
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Розмари Турман: Публичный профиль</title>
        <meta name="keywords" content="Розмари Турман: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Розмари Турман"
            short={
              <span>
                Аналитик современной индустрии моды, создатель проекта
                @howfashionworks, книжного клуба &laquo;All&nbsp;about…&raquo;,
                колумнист изданий: Marie Claire, SNC, Buro&nbsp;247.
              </span>
            }
            image="/img/about/rozmari-turman.jpg"
            tiles={false}
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
