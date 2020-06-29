import React from "react";
import Grid from "@material-ui/core/Grid";
import H2 from "../../components/head1";
import Slider from "../../components/slider-person";

const teachers = [
  {
    descript:
      "Заместитель руководителя, руководитель учебных процессов, автор образовательных программ, кандидат филологических наук, ведущий преподаватель Высшей школы стилистики",
    image: "/img/about/natalya-gorskih.jpg",
    name: "Наталья Горских",
    link: "/natalya_gorskyh"
  },
  // {
  //   descript: "Автор и ведущий преподаватель курса «Визуальный мерчендайзинг и витринистика», профессиональный специалист-практик в области мерчендайзинга, витринистики, проектирования магазинов.",
  //   image: "/img/about/marina-polkovnikova.jpg",
  //   name: "Марина Полковникова",
  //   link: "https://styleschool.ru/user/profile.php?id=21"
  // },
  {
    descript:
      "Историк моды, визуальный мерчендайзер, витринист, член творческого союза дизайнеров и имиджмейкеров, преподаватель ВШС.",
    image: "/img/about/ruslan-migranov.jpg",
    name: "Руслан Мигранов",
    link: "/ruslan_migranov"
  },
  {
    descript:
      "Дизайнер одежды, художник по костюму, практикующий стилист, модный эксперт, преподаватель Высшей школы стилистики",
    image: "/img/about/svetlana-mihalenko.jpg",
    name: "Светлана Михаленко",
    link: "/svetlana_mikhailenko"
  },
  {
    descript: "",
    image: "/img/about/galina-varakina.jpg",
    name: "Галина Варакина",
    link: "/galina_varakina"
  },
  // {
  //   descript: "Практикующий имидж-тренер, стилист, психолог, преподаватель факультета «Моды и имиджмейкинга» ВШС",
  //   image: "/img/about/mariya-krasilnikova.jpg",
  //   name: "Мария Красильникова",
  //   link: "https://styleschool.ru/user/profile.php?id=26"
  // },
  {
    descript: "",
    image: "/img/about/marina-kostarnova.jpg",
    name: "Марина Костарнова",
    link: "/marina_kostarnova"
  },
  {
    descript:
      "Практикующий имидж-стилист, дизайнер одежды, преподаватель Санкт-Петербургской школы телевидения, преподаватель Высшей школы стилистики.",
    image: "/img/about/svetlana-kononets.jpg",
    name: "Светлана Кононец",
    link: "/svetlana_kononets"
  },
  {
    descript:
      "PR-консультант, бизнес-тренер, кандидат исторических наук, доцент, преподаватель и автор-разработчик курсов для ВШС",
    image: "/img/about/natalya-shved.jpg",
    name: "Наталия Швед",
    link: "/natalia_shved"
  },
  // {
  //   descript: "Искусствовед, доцент факультета «Дизайн» Международного Славянского института, художник, руководитель АРТ-Лаборатории, автор-разработчик курса для ВШС «История стилей в интерьере».",
  //   image: "/img/about/darjya-voronina.jpg",
  //   name: "Дарья Воронина",
  //   link: "https://styleschool.ru/user/profile.php?id=133"
  // },
  {
    descript:
      "Fashion-журналист, независимый автор глянца, продюсер ряда цифровых изданий, посвященных современному искусству",
    image: "/img/about/meri-sargsyan.jpg",
    name: "Мэри Саргсян",
    link: "/mary_sargsyan"
  },
  // {
  //   descript: "Профессиональный специалист-практик в области мерчендайзинга, преподаватель курса «Визуальный мерчендайзинг и витринистика» ВШС.",
  //   image: "/img/about/sergey-yuriev.jpg",
  //   name: "Сергей Юрьев",
  //   link: "https://styleschool.ru/user/profile.php?id=161"
  // },
  {
    descript: <span>Beauty &amp; Fashion фотограф</span>,
    image: "/img/about/emiliya-jilova.jpg",
    name: "Эмилия Жилова",
    link: "/emilia_zhilova"
  },
  // {
  //   descript: "Консультант по стилю и персональный шопер, преподаватель Высшей школы стилистики",
  //   image: "/img/about/galina-charnaya.jpg",
  //   name: "Галина Чарная",
  //   link: "https://styleschool.ru/user/profile.php?id=193"
  // },
  // {
  //   descript: "Преподаватель истории дизайна, член Союза Дизайнеров России, преподаватель ВШС",
  //   image: "/img/about/yuliya-artamonova.jpg",
  //   name: "Юлия Артамонова",
  //   link: "https://styleschool.ru/user/profile.php?id=344"
  // },
  {
    descript:
      "Практикующий имиджмейкер, имидж-тренер, fashion-стилист, преподаватель Высшей школы стилистики, руководитель филиала Высшей школы стилистики в Новосибирске",
    image: "/img/about/nadejda-ishakova.jpg",
    name: "Надежда Исхакова",
    link: "/nadezhda_iskhakova"
  },
  {
    descript:
      'Художник-модельер, преподаватель и практикующий имидж-консультант.  В Высшей школы стилистики ведет занятия в рамках дисциплины "Профессинальные имидж-технологии".',
    image: "/img/about/tatiyana-fomina.jpg",
    name: "Татьяна Фомина",
    link: "/tatiana_fomina"
  },
  {
    descript:
      "Главный редактор журнала TEORA Magazine и нескольких других медийных проектов, колумнист Marie Claire, преподаватель и практикующий стилист",
    image: "/img/about/rozmari-turman.jpg",
    name: "Розмари Турман",
    link: "/rosemary_thurman"
  },
  {
    descript:
      "Руководитель студии профессионального макияжа «ProMakeupArtist». Соавтор и постоянный тренер образовательного проекта ProMakeupArtist School Prague (Прага, Чехия).",
    image: "/img/about/yana-ahmetova.jpg",
    name: "Яна Ахметова",
    link: "/yana_ahmetova"
  },
  {
    descript:
      "Кандидат политических наук, психолог, бизнес-тренер, политтехнолог, Директор фонда «Общественных инициатив»",
    image: "/img/about/mariya-rodina.jpg",
    name: "Мария Родина",
    link: "/maria_rodina"
  },
  {
    descript:
      "Стилист-имиджмейкер, психолог, фотограф, журналист, преподаватель Высшей школы стилистики",
    image: "/img/about/anna-antonova.jpg",
    name: "Анна Антонова",
    link: "/anna_antonova"
  },
  {
    descript:
      "Кандидат экономических наук, социолог, бизнес-тренер, политтехнолог, Директор Института стратегических исследований и проектов",
    image: "/img/about/valeriy-cherednichenko.jpg",
    name: "Валерий Чередниченко",
    link: "/valery_cherednichenko"
  },
  // {
  //   descript: "Имидж-консультант, психолог, преподаватель Высшей Школы Стилистики.",
  //   image: "/img/about/polina-efimova.jpg",
  //   name: "Полина Ефимова",
  //   link: "https://styleschool.ru/user/profile.php?id=3445"
  // },
  // {
  //   descript: "Основатель Fashionovation.CO, со-основатель Innovation Camp, основатель The Lab",
  //   image: "/img/about/viktoriya-belyakova.jpg",
  //   name: "Виктория Белякова",
  //   link: "https://styleschool.ru/user/profile.php?id=1528"
  // },
  {
    descript: "",
    image: "/img/about/marina-bonetskaya.jpg",
    name: "Марина Бонецкая",
    link: "/marina_bonetskaya"
  },
  {
    descript: "",
    image: "/img/about/anna-kachalina.jpg",
    name: "Анна Качалина",
    link: "/anna_kachalina"
  },
  {
    descript:
      "Имидж-консультант, профайлер, автор программ по управлению впечатлением в бизнесе и межличностных коммуникациях",
    image: "/img/about/liana-bahova.jpg",
    name: "Лиана Бахова",
    link: "/liana_bahova"
  },
  {
    descript:
      "Журналист, блоггер, основатель «Школы осознанного пиара и писательского ремесла». Автор книги: «Кафе. Читай по главе в день». Преподаватель пиара, smm, писательского ремесла в социальных сетях и автор проекта «Пишем книгу год»",
    image: "/img/about/ekaterina-britsova.jpg",
    name: "Екатерина Аполлонова",
    link: "/catherine_britsova"
  },
  {
    descript:
      "Дизайнер. Специалист в области интерьерного, ландшафтного, предметного дизайна, создатель концепций и проектов оформления мероприятий всероссийского уровня, создатель собственного дизайн бюро, преподаватель Высшей школы стилистики",
    image: "/img/teachers/lamonova-small.jpg",
    name: "Елена Ламонова",
    link: "/elena-lamonova"
  },
  {
    descript:
      "Визуальный мерчендайзер, имидж-консультант, преподаватель Высшей школы стилистики.",
    image: "/img/teachers/hlestova-small.jpg",
    name: "Маргарита Хлестова",
    link: "/margarita-hlestova"
  },
  {
    descript: "Дизайнер интерьера, преподаватель #ВШСДТ",
    image: "/img/teachers/rotar_300.jpg",
    name: "Татьяна Ротарь",
    link: "/tatyana_rotar"
  },
  {
    descript:
      "Автор и куратор курсов Высшей школы стилистики дизайна  и технологий. Специалист по fashion-коммуникациям, рекламе и PR, коммуникационный тренер, ТВ-эксперт, предприниматель.",
    image: "/img/teachers/prohorovich.jpg",
    name: "Елена Прохорович",
    link: "/elena-prohorovich"
  },
  {
    descript:
      "Практикующий дизайнер интерьера. Художник. Технический директор собственной студии дизайна интерьеров ArtStreet Design.",
    image: "/img/teachers/erika-nenasheva-small.jpg",
    name: "Эрика Ненашева",
    link: "/erika_nenasheva"
  },
  {
    descript: "Fashion stylist , creator fashion project",
    image: "/img/about/g-troepolskaya.jpg",
    name: "Любовь Троепольская",
    link: "/troepolskaya"
  },
  {
    descript: "",
    image: "/img/teachers/islamova-small.jpg",
    name: "Камила Исламова",
    link: "/islamova"
  }
];

export default function Teachers() {
  return (
    <Grid
      container
      justify="center"
      style={{
        background: "rgba(0,0,0,0.07)"
      }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Преподаватели" />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          padding: "20px 28px 30px"
          //background: "rgba(0,0,0,0.07)",
        }}
      >
        <Slider teachers={teachers} style={{}} />
      </Grid>
    </Grid>
  );
}
