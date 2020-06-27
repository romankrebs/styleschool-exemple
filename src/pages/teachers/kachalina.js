import React from "react";
import Footer from "../../components/footer";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";
import Helmet from "react-helmet";

export default function Teach() {
  var content = [
    {
      title: "Образование",
      text: (
        <List
          arr={[
            "Институт Информатики и управления, специализация «Психология управления»",
            "FCG курсы «Визуальный мерчендайзинг в индустрии моды», «Визуальный мерчендайзинг в обувном бизнесе»",
            "Школа современного дизайна, курс «Витринистика в модном магазине»",
            <span>Школа акварели С.&nbsp;Андрияки</span>,
            "Академия «Интерколледж» специализация «Дизайн интерьера»"
          ]}
        />
      )
    },
    {
      title: "Профессиональный опыт",
      text: (
        <List
          arr={[
            "Ведущий визуальный мерчендайзер группы компаний Спортмастер (бренды O’stin, O’stin KIDS, FUNDAY)",
            "Разработка и внедрение стандартов VM, сезонных рекомендаций по презентации продукта, оформлению витрин, акциям и кампаниям, обучение и развитие персонала",
            "Работа в обувном сегменте (бренды ECCO, Эконика, Obuv.com)",
            "Адаптация и внедрение сезонных VM book, участие в заказах коллекций, оформление сезонных каталогов, запуск магазинов после ребрендинга",
            "Всего более 13 лет опыта работы в мерчендайзинге, проведения обучающих тренингов и вебинаров по VM для персонала, ведение краткосрочных курсов по мерчендайзингу в московских школах, ведения проектов по консалтингу малого бизнеса"
          ]}
        />
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Анна Качалина: Публичный профиль</title>
        <meta name="keywords" content="Анна Качалина: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Анна Качалина"
            short={
              <span>
                Автор и преподаватель курса «Визуальный мерчендайзинг и
                витринистика».
                <br />
                Специалист по открытию магазинов, Start Up проектам и
                консалтингу малого бизнеса.
              </span>
            }
            image="/img/about/anna-kachalina.jpg"
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
